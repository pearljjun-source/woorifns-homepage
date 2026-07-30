import { test, expect } from "@playwright/test";

/**
 * 문의 폼 — /api/contact는 라우트 인터셉트로 모킹해서
 * 실제 이메일 발송(Resend)·DB 저장(Supabase) 없이 UI 흐름만 검증
 */

test("필수 항목 비우고 제출 → 브라우저 검증에 막혀 전송 안 됨", async ({ page }) => {
  let apiCalled = false;
  await page.route("**/api/contact", (route) => {
    apiCalled = true;
    return route.fulfill({ status: 200, body: "{}" });
  });

  await page.goto("/contact");
  await page.getByRole("button", { name: "상담 신청하기" }).click();

  // required 필드(회사명)가 비어 있어 폼이 제출되지 않아야 함
  const companyName = page.locator("#companyName");
  await expect(companyName).toHaveJSProperty("validity.valueMissing", true);
  expect(apiCalled).toBe(false);
});

test("폼 작성 후 제출 → 접수 완료 화면", async ({ page }) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    })
  );

  await page.goto("/contact");
  await page.locator("#companyName").fill("테스트주식회사");
  await page.locator("#contactName").fill("홍길동");
  await page.locator("#phone").fill("010-1234-5678");
  await page.locator("#mealCount").fill("100");
  await page.locator("#message").fill("e2e 테스트 문의입니다.");
  await page.getByRole("button", { name: "상담 신청하기" }).click();

  await expect(page.getByText("문의가 접수되었습니다!")).toBeVisible();

  // "새로운 문의" 버튼으로 폼 복귀 + 입력값 초기화
  await page.getByRole("button", { name: "새로운 문의" }).click();
  await expect(page.locator("#companyName")).toHaveValue("");
});

test("API 오류 시 → 에러 메시지 표시, 입력값 유지", async ({ page }) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({ status: 500, body: "{}" })
  );

  await page.goto("/contact");
  await page.locator("#companyName").fill("테스트주식회사");
  await page.locator("#contactName").fill("홍길동");
  await page.locator("#phone").fill("010-1234-5678");
  await page.getByRole("button", { name: "상담 신청하기" }).click();

  await expect(page.getByText(/문의 접수 중 오류가 발생했습니다/)).toBeVisible();
  await expect(page.locator("#companyName")).toHaveValue("테스트주식회사");
});
