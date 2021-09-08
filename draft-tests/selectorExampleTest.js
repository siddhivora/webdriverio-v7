beforeEach(async () => {
  await browser.url("./");
});

describe("Webdriveruniversity homepage click button check", () => {
  it("by ID", async () => {
    const clickById = $("#login-portal");
    clickById.click();
    await browser.pause(3000);
  });

  it("by Class", async () => {
    const clickByClass = $(".section-title");
    clickByClass.click();
    await browser.pause(3000);
  });

  it("by XPATH", async () => {
    const clickById = $("//h1[text()='BUTTON CLICKS']/..");
    clickById.click();
    await browser.pause(3000);
  });

  it("by CSS Selector", async () => {
    const clickById = $("#to-do-list h1");
    clickById.click();
    await browser.pause(3000);
  });
});
