import { test, expect, type Page } from "@playwright/test";

/**
 * 회귀 테스트: 모바일 햄버거 메뉴
 *
 * 과거 버그 — 메뉴 오버레이(z-index: 999)가 드롭다운 메뉴(z-index 없음)까지
 * 덮어서, 메뉴 링크를 탭하면 오버레이의 닫기 핸들러만 실행되고 페이지 이동이
 * 안 됐음. Playwright의 click은 다른 요소가 포인터 이벤트를 가로채면 실패하므로
 * 같은 버그가 재발하면 이 테스트가 잡아냄.
 */

const hamburger = (page: Page) =>
  page.getByRole("button", { name: /메뉴 열기|메뉴 닫기/ });

const headerLink = (page: Page, name: string) =>
  page.locator("header").getByRole("link", { name, exact: true });

test("햄버거 메뉴에서 회사소개 탭 → /about 이동", async ({ page }) => {
  await page.goto("/");
  await hamburger(page).click();
  await expect(hamburger(page)).toHaveAttribute("aria-expanded", "true");

  await headerLink(page, "회사소개").click();

  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("회사소개");
});

test("햄버거 메뉴에서 서비스 탭 → /services 이동", async ({ page }) => {
  await page.goto("/");
  await hamburger(page).click();

  await headerLink(page, "서비스").click();

  await expect(page).toHaveURL(/\/services$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("서비스");
});

test("메뉴 바깥(오버레이) 탭 → 메뉴만 닫히고 페이지 유지", async ({ page }) => {
  await page.goto("/");
  await hamburger(page).click();
  await expect(hamburger(page)).toHaveAttribute("aria-expanded", "true");

  // 화면 하단(메뉴 바깥) 탭 → 오버레이 클릭으로 메뉴 닫힘
  const viewport = page.viewportSize()!;
  await page.mouse.click(viewport.width / 2, viewport.height - 50);

  await expect(hamburger(page)).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/\/$/);
});

test("Escape 키 → 메뉴 닫힘", async ({ page }) => {
  await page.goto("/");
  await hamburger(page).click();
  await expect(hamburger(page)).toHaveAttribute("aria-expanded", "true");

  await page.keyboard.press("Escape");
  await expect(hamburger(page)).toHaveAttribute("aria-expanded", "false");
});
