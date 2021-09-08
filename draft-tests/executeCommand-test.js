beforeEach(async () => {
    await browser.url("./");
  });
  
  
  
  describe("Using Execute Command (inserting JavaScript)", () => {
    it("to change the background color of body", async () => {
      await browser.execute( () => {
          return (document.body.style.backgroundColor = 'red');
      });
      await browser.pause(3000);
    });
  });
  