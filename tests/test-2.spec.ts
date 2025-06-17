import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/windows");
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Click Here" }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole("heading", { name: "New Window" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Opening a new window" })).toBeVisible();
});
