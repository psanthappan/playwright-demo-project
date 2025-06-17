import { test, expect } from "@playwright/test";

test("should handle new tab", async ({ browser }) => {
  // Create a new browser context
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/windows");

  // Click the link
  await page.getByRole("link", { name: "Click Here" }).click();

  // Prepare to wait for the new page
  const newPage = await context.waitForEvent("page");

  // Wait for the loa
  await newPage.waitForLoadState();

  // Assert
  await expect(newPage).toHaveURL("https://the-internet.herokuapp.com/windows/new");

  // Close the page

  // 6. Close the new tab and continue in the original page
  await newPage.close();
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/windows");
});
