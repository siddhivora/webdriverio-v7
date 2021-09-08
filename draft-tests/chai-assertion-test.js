beforeEach(async () => {
  await browser.url("./");
});

describe("Test Chai Assertion", () => {
  it("check login portal page", async () => {
    const clickById = $("#login-portal");
    clickById.click();
    await browser.pause(3000);

    await browser.switchWindow("WebDriver | Login Portal");
    const pageTitle = await browser.getTitle();

    expect(pageTitle).to.include(" | Login Portal");
    expect(pageTitle).to.not.include("zzz");

  });
});
