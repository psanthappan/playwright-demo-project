import { test, expect } from "@playwright/test";

test.describe("REST API get call", () => {
  test("Should get the list of names", async ({ request }) => {
    const res = await request.get("https://reqres.in/api/users?page=2", {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    });

    // Assert the status code
    expect(res.status()).toBe(200);

    //Get the data in the console
    const responseData = await res.json();
    console.log(`>>> The response data: ${JSON.stringify(responseData)}`);
  });
});
