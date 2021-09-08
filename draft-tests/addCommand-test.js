beforeEach(async () => {
  await browser.url("./");
});



describe("Test Chai Assertion", () => {
  it("check login portal page", async () => {
    const clickById = $("#login-portal");
    clickById.click();
    await browser.pause(3000);

    await browser.switchWindow("WebDriver | Login Portal");
    const result = await browser.getUrlAndTitle();
    console.log('title:  ',  result.title);

    expect(result.title).to.include(" | Login Portal");
    expect(result.url).to.not.include("zzz");
    const cc = result.title;
    cc.should.equal('WebDriver | Login Portal');
  });
});
