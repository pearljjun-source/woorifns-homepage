import { test, expect } from "@playwright/test";

/** 스모크 테스트 — 각 페이지가 렌더링되고 핵심 요소가 존재하는지 */

const pages = [
  { path: "/", title: /우리푸드앤드서비스/, h1: /정직한 밥상/ },
  { path: "/about", title: /회사소개/, h1: /회사소개/ },
  { path: "/services", title: /서비스/, h1: /서비스 소개/ },
  { path: "/contact", title: /문의하기/, h1: /문의하기/ },
] as const;

for (const { path, title, h1 } of pages) {
  test(`${path} 페이지 렌더링`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(path);

    await expect(page).toHaveTitle(title);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(h1);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    expect(errors, `JS 런타임 에러: ${errors.join(", ")}`).toHaveLength(0);
  });
}
