beforeEach(async () => {
    await browser.url("./");
  });
  
  describe("Test contact us page of webdriver university", () => {
    it("add and clear value of contact us form fields", async () => {
      const clickId = $('#dropdown-checkboxes-radiobuttons');
      clickId.click();
      await browser.pause(1000);
      await browser.switchWindow('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)');

      console.log(await $("[value='tindi']").isExisting());
      console.log(await $("input[value='option-3']").isSelected());
      console.log(await $("#dropdowm-menu-2").isDisplayed());
      //await browser.pause(3000);
    });
  });
  