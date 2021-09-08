beforeEach(async () => {
    await browser.url("./");
  });
  
  describe("Webdriveruniversity", () => {
    it("switch window and close window", async () => {
      const clickById = $("#login-portal");
      clickById.click();
      await browser.pause(3000);

      console.log('HOMEPAGE HEADER:  ' + await browser.getTitle());
      await browser.switchWindow('WebDriver | Login Portal');
      console.log('LOGIN PAGE HEADER:  ' + await browser.getTitle());

      await browser.closeWindow();  //closes window which has focus
    });
  });
  