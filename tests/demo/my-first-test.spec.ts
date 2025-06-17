import { test, expect } from "@playwright/test";

test("Should launch the home page sucessfully", async ({ page }) => {
  // Launch the homeoage
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Assert the title
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // Assert the hearder text
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});
