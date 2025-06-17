import { test, expect } from "@playwright/test";
import LoginPage from "../page-objects/login.page";
import constants from "../../data/constants.json";

test.describe("Login functionality", () => {
  // Successful login
  test("Should login successfully", async ({ page }) => {
    // Reading data from constants
    console.log(`>>> Data from constants file: ${JSON.stringify(constants)}`);

    // Get data from .env file
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const URL = process.env.URL;

    // Check for any error
    if (!username || !password || !URL) {
      throw new Error(">>> Error getting URL or User credentials...");
    }

    const loginpage = new LoginPage(page); // Instance creation
    await loginpage.launchHomePage(URL);
    await loginpage.login(username, password);
  });
});
