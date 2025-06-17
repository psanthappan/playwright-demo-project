import { test, expect } from "@playwright/test";
import LoginPage from "../page-objects/login.page";

test.describe("Login functionality", () => {
  // Successful login
  test("Should login successfully", async ({ page }) => {
    const loginpage = new LoginPage(page); // Instance creation
    await loginpage.launchHomePage("https://katalon-demo-cura.herokuapp.com/");
    await loginpage.login('John Doe', 'ThisIsNotAPassword');
  });
});
