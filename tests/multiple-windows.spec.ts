import { test, expect } from "@playwright/test";

test.describe("Multiple Windows Test Suite", () => {
  /**
   * Prmpt:
   *
   * I have the URL: https://the-internet.herokuapp.com/windows and I want to click a link on the page and navigate to the newly opened tab. Assert the tile and then come back to the original page. Write a spec file for me.
   */
  test("should handle multiple windows/tabs", async ({ context, page }) => {
    // Navigate to the initial page
    await page.goto("https://the-internet.herokuapp.com/windows");

    // Verify we're on the correct initial page
    await expect(page).toHaveTitle("The Internet");

    // Start waiting for the new page before clicking
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.click("text=Click Here"), // Click the link that opens new window
    ]);

    // Wait for the new page to load
    await newPage.waitForLoadState();

    // Verify the title of the new window
    await expect(newPage).toHaveTitle("New Window");

    // Optional: verify the text content in the new window
    await expect(newPage.locator("h3")).toHaveText("New Window");

    // Close the new window
    await newPage.close();

    // Verify we can still interact with the original page
    await expect(page).toHaveTitle("The Internet");
  });
});
