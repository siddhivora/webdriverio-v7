beforeEach(async () => {
    await browser.url("./");
  });

  describe("Test different wait commands::::", () => {
    it.skip("Contact Us Page: check Thank You message to exist in HTML DOM after successful form submission", async () => {
      const clickById = $("#contact-us");
      clickById.click();
      await browser.pause(1000);
      await browser.switchWindow('WebDriver | Contact Us');

      await $("[name='first_name']").setValue('Siddhi');
      await $("[name='last_name']").setValue('Vora');
      await $("[name='email']").setValue('siddhi@gmail.com');
      await $("[name='message']").setValue('Siddhi');
      await $("[type='submit']").click();
  
      const successfulMessageSelector = $('#contact_reply');
      const messageState = await successfulMessageSelector.waitForExist({ timeout: 5000 });
      //await browser.pause(4000);
      expect(messageState).to.be.true;
      expect(await successfulMessageSelector.getText()).to.equal('Thank You for your Message!');
    });

    it.skip("Ajax Loader Page: wait for click me button to be displayed", async () => {
        const clickById = $("a#ajax-loader h1");
        clickById.click();
        await browser.pause(1000);
        await browser.switchWindow('WebDriver | Ajax-Loader');
    
        const clickMeButtonSelector = $('span#button1');
        const buttonState = await clickMeButtonSelector.waitForDisplayed({ timeout: 7000 });
        //await browser.pause(4000);
        expect(buttonState).to.be.true;
      });

    it.skip("Dropdown Page: wait for cabbage radio button to be enabled", async () => {
        const clickById = $("a#dropdown-checkboxes-radiobuttons h1");
        clickById.click();
        await browser.pause(1000);
        await browser.switchWindow('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)');
    
        const clickMeButtonSelector = $("[value='cabbage']");
        const buttonState = await clickMeButtonSelector.waitForEnabled({ timeout: 2000, reverse: true }); //wait for cabbage to be disabled (pass)
        //const buttonState = await clickMeButtonSelector.waitForEnabled({ timeout: 2000 }); //wait for cabbage to be enabled (fail)
        expect(buttonState).to.be.true;
      });

    it("Ajax Loader Page: click after pause of specified time", async () => {
        const clickById = $("a#ajax-loader h1");
        clickById.click();
        await browser.pause(1000);
        await browser.switchWindow('WebDriver | Ajax-Loader');
    
        const clickMeButtonSelector = $('span#button1');
        await clickMeButtonSelector.waitForDisplayed({ timeout: 7000 });
        //await browser.pause(5000); //to use waitFor commands instead of pause is a good choice.
        clickMeButtonSelector.click();
      });
  });