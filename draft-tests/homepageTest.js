const assert = require("assert");

describe("Test webdriveruniversity homepage", () => {
  it("by validating its title", async () => {
    await browser.url('./');
    const title = await browser.getTitle();
    console.log('title is:::::', title);
    assert.strictEqual(title, "WebDriverUniversity.com");
  });
});
