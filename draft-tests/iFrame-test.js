beforeEach(async () => {
    await browser.url("/IFrame/index.html");
    await browser.pause(4000);
  });
  
  describe("Test iFrame page of webdriver university", () => {
    it("click on OUR PRODUCTS button", async () => {
      let iframeId = await browser.$('#frame');
      //await browser.switchToFrame($("/html//iframe[@id='frame']"));
      await browser.switchToFrame(iframeId);

      const buttonId = $("li:nth-of-type(2) > a");
      //await buttonId.waitForDisplayed(1000);
      buttonId.click();
      
      await browser.pause(11000);
    });
  });
  