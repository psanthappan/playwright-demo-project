import { test, expect } from "@playwright/test";

test.describe(
  "Login functionality",
  {
    annotation: {
      type: "EPIC-1234",
      description: "JIRA-1234: Login story",
    },
  },
  () => {
    test.beforeEach("Launch the homepage", async ({ page }) => {
      // Launch the homeoage
      await page.goto("https://katalon-demo-cura.herokuapp.com/");

      // Assert the title
      await expect(page).toHaveTitle("CURA Healthcare Service");

      // Assert the hearder text
      await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
    });
    // Successful login
    test("Should login successfully", { tag: "@smoke" }, async ({ page }) => {
      await page.getByRole("link", { name: "Make Appointment" }).click();

      // Adding a screenshot
      const screenshot = await page.screenshot({ fullPage: true });
      //Attach it to the test
      await test.info().attach("Appt screenshot", {
        body: screenshot,
        contentType: "image/png",
      }); // This usually sits in a helper file

      await page.getByLabel("Username").fill("John Doe");
      await page.getByLabel("Password").fill("ThisIsNotAPassword");
      await page.getByRole("button", { name: "Login" }).click();

      await expect(page.getByRole("heading", { name: "Make Appointment" })).toBeVisible();
    });

    // Unsuccessful login
    test.skip("Should not login successfully", async ({ page }) => {
      await page.getByRole("link", { name: "Make Appointment" }).click();

      await page.getByLabel("Username").fill("John Doe");
      await page.getByLabel("Password").fill("ThisIsAPassword");
      await page.getByRole("button", { name: "Login" }).click();

      await expect(page.locator("#login")).toContainText("Login failed! Please ensure the username and password are valid.");
    });
  }
);
