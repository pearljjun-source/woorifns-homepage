import { describe, test, expect } from "vitest";
import { escapeHtml, validateInput, createRateLimiter } from "@/lib/contact";

describe("escapeHtml — XSS 방지", () => {
  test("HTML 특수문자 5종을 모두 이스케이프", () => {
    expect(escapeHtml(`<script>alert("x&y's")</script>`)).toBe(
      "&lt;script&gt;alert(&quot;x&amp;y&#39;s&quot;)&lt;/script&gt;"
    );
  });

  test("& 를 먼저 이스케이프해서 이중 이스케이프가 없어야 함", () => {
    expect(escapeHtml("&lt;")).toBe("&amp;lt;");
  });

  test("일반 한글 텍스트는 그대로", () => {
    expect(escapeHtml("우리푸드앤드서비스 단체급식")).toBe("우리푸드앤드서비스 단체급식");
  });
});

describe("validateInput — 입력값 검증", () => {
  const validBody = {
    companyName: "테스트주식회사",
    contactName: "홍길동",
    phone: "010-1234-5678",
    mealCount: "100",
    message: "문의합니다",
  };

  test("정상 입력 → valid, 값 그대로 반환", () => {
    const result = validateInput(validBody);
    expect(result.valid).toBe(true);
    expect(result.data).toEqual(validBody);
  });

  test("앞뒤 공백은 trim", () => {
    const result = validateInput({ ...validBody, companyName: "  회사  " });
    expect(result.data?.companyName).toBe("회사");
  });

  test.each([
    ["companyName", "회사명은 필수 입력입니다."],
    ["contactName", "담당자명은 필수 입력입니다."],
    ["phone", "연락처는 필수 입력입니다."],
  ])("필수값 %s 누락 → 에러", (field, error) => {
    const result = validateInput({ ...validBody, [field]: "" });
    expect(result.valid).toBe(false);
    expect(result.error).toBe(error);
  });

  test("공백만 있는 필수값도 누락으로 처리", () => {
    expect(validateInput({ ...validBody, phone: "   " }).valid).toBe(false);
  });

  test("필수값이 문자열이 아니면 (타입 공격) → 에러", () => {
    expect(validateInput({ ...validBody, companyName: 123 }).valid).toBe(false);
    expect(validateInput({ ...validBody, contactName: ["x"] }).valid).toBe(false);
    expect(validateInput({ ...validBody, phone: { a: 1 } }).valid).toBe(false);
  });

  test.each([
    ["companyName", 101, "회사명은 100자 이내로 입력해주세요."],
    ["contactName", 51, "담당자명은 50자 이내로 입력해주세요."],
    ["phone", 21, "연락처는 20자 이내로 입력해주세요."],
  ])("%s 길이 초과(%i자) → 에러", (field, len, error) => {
    const result = validateInput({ ...validBody, [field]: "a".repeat(len) });
    expect(result.valid).toBe(false);
    expect(result.error).toBe(error);
  });

  test("선택값 초과분은 에러 없이 잘라냄 (mealCount 10자, message 2000자)", () => {
    const result = validateInput({
      ...validBody,
      mealCount: "1".repeat(50),
      message: "가".repeat(3000),
    });
    expect(result.valid).toBe(true);
    expect(result.data?.mealCount).toHaveLength(10);
    expect(result.data?.message).toHaveLength(2000);
  });

  test("선택값이 문자열이 아니면 빈 값으로 대체", () => {
    const result = validateInput({ ...validBody, mealCount: 100, message: null });
    expect(result.valid).toBe(true);
    expect(result.data?.mealCount).toBe("");
    expect(result.data?.message).toBe("");
  });

  test.each([null, undefined, "문자열", 42])("body가 객체가 아니면(%o) → 에러", (body) => {
    expect(validateInput(body).valid).toBe(false);
  });
});

describe("createRateLimiter — IP 기반 요청 제한", () => {
  test("제한 횟수까지 허용, 초과분부터 차단", () => {
    const isLimited = createRateLimiter(60_000, 5);
    const now = 1_000_000;

    for (let i = 0; i < 5; i++) {
      expect(isLimited("1.2.3.4", now + i)).toBe(false);
    }
    expect(isLimited("1.2.3.4", now + 5)).toBe(true);
    expect(isLimited("1.2.3.4", now + 6)).toBe(true);
  });

  test("IP별로 독립적으로 카운트", () => {
    const isLimited = createRateLimiter(60_000, 1);
    const now = 1_000_000;

    expect(isLimited("1.1.1.1", now)).toBe(false);
    expect(isLimited("1.1.1.1", now)).toBe(true);
    expect(isLimited("2.2.2.2", now)).toBe(false);
  });

  test("시간 윈도우가 지나면 카운트 리셋", () => {
    const isLimited = createRateLimiter(60_000, 1);
    const now = 1_000_000;

    expect(isLimited("1.2.3.4", now)).toBe(false);
    expect(isLimited("1.2.3.4", now + 1)).toBe(true);
    // 윈도우(60초) 경과 후 → 다시 허용
    expect(isLimited("1.2.3.4", now + 60_001)).toBe(false);
  });
});
