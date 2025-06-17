import { test, expect } from "@playwright/test";
import LoginPage from "../page-objects/login.page";
import constants from "../../data/constants.json";

test.describe("Login functionality", () => {
  // Successful login
  test("Should login successfully", async ({ page }) => {
    // Reading data from constants
    console.log(`>>> Data from constants file: ${JSON.stringify(constants)}`);

    const loginpage = new LoginPage(page); // Instance creation
    await loginpage.launchHomePage("https://katalon-demo-cura.herokuapp.com/");
    await loginpage.login("John Doe", "ThisIsNotAPassword");
  });
});
