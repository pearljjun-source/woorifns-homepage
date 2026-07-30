import { test, expect, type Page } from "@playwright/test";

/** 데스크톱 헤더 내비게이션 — 각 메뉴 클릭 시 올바른 페이지로 이동 */

const headerLink = (page: Page, name: string) =>
  page.locator("header").getByRole("link", { name, exact: true });

const cases = [
  { label: "회사소개", path: /\/about$/, heading: "회사소개" },
  { label: "서비스", path: /\/services$/, heading: "서비스 소개" },
  { label: "문의하기", path: /\/contact$/, heading: "문의하기" },
] as const;

for (const { label, path, heading } of cases) {
  test(`헤더에서 ${label} 클릭 → 해당 페이지 이동`, async ({ page }) => {
    await page.goto("/");
    await headerLink(page, label).click();

    await expect(page).toHaveURL(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
  });
}

test("로고 클릭 → 홈으로 이동", async ({ page }) => {
  await page.goto("/about");
  await page.locator("header").getByRole("link", { name: /우리푸드앤드서비스/ }).click();

  await expect(page).toHaveURL(/\/$/);
});
