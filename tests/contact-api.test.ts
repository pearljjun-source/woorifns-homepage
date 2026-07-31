import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";

/**
 * /api/contact POST 핸들러 통합 테스트
 * Resend는 모킹(실제 메일 발송 없음), Supabase는 env를 비워 저장 단계를 건너뜀.
 * rate limiter가 모듈 상태를 공유하므로 테스트마다 서로 다른 IP를 사용.
 */

const { sendMock } = vi.hoisted(() => ({ sendMock: vi.fn() }));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

import { POST } from "@/app/api/contact/route";

let ipCounter = 0;
function makeRequest(body: unknown, ip?: string): NextRequest {
  return new NextRequest("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip ?? `10.0.0.${++ipCounter}`,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const validBody = {
  companyName: "테스트주식회사",
  contactName: "홍길동",
  phone: "010-1234-5678",
  mealCount: "100",
  message: "통합 테스트 문의",
};

beforeEach(() => {
  sendMock.mockReset().mockResolvedValue({ error: null });
  vi.stubEnv("RESEND_API_KEY", "test-key");
  vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "");
  vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "");
  vi.stubEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "");
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("POST /api/contact", () => {
  test("정상 요청 → 200, 메일 발송, 입력값이 이스케이프되어 포함", async () => {
    const res = await POST(
      makeRequest({ ...validBody, companyName: "<b>회사</b>" })
    );

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true, emailSent: true });

    expect(sendMock).toHaveBeenCalledTimes(1);
    const sent = sendMock.mock.calls[0][0];
    expect(sent.html).toContain("&lt;b&gt;회사&lt;/b&gt;");
    expect(sent.html).not.toContain("<b>회사</b>");
    expect(sent.html).toContain("홍길동");
  });

  test("필수값 누락 → 400 + 에러 메시지, 메일 발송 안 함", async () => {
    const res = await POST(makeRequest({ ...validBody, companyName: "" }));

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({
      success: false,
      error: "회사명은 필수 입력입니다.",
    });
    expect(sendMock).not.toHaveBeenCalled();
  });

  test("RESEND_API_KEY 미설정 → 200이지만 emailSent: false", async () => {
    vi.stubEnv("RESEND_API_KEY", "");

    const res = await POST(makeRequest(validBody));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true, emailSent: false });
    expect(sendMock).not.toHaveBeenCalled();
  });

  test("Resend 발송 실패 → 200이지만 emailSent: false (사용자에겐 접수 성공)", async () => {
    sendMock.mockResolvedValue({ error: { message: "quota exceeded" } });

    const res = await POST(makeRequest(validBody));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ success: true, emailSent: false });
  });

  test("잘못된 JSON body → 500", async () => {
    const res = await POST(makeRequest("not-json{{{"));

    expect(res.status).toBe(500);
    expect((await res.json()).success).toBe(false);
  });

  test("같은 IP 분당 5회 초과 → 429", async () => {
    const ip = "99.99.99.99";

    for (let i = 0; i < 5; i++) {
      const res = await POST(makeRequest(validBody, ip));
      expect(res.status).toBe(200);
    }

    const blocked = await POST(makeRequest(validBody, ip));
    expect(blocked.status).toBe(429);
    expect((await blocked.json()).error).toContain("요청이 너무 많습니다");

    // 다른 IP는 영향 없음
    const other = await POST(makeRequest(validBody, "88.88.88.88"));
    expect(other.status).toBe(200);
  });
});
