beforeEach(async () => {
  await browser.url("./");
});

describe("Test contact us page of webdriver university", () => {
  it("add and clear value of contact us form fields", async () => {
    const clickId = $('#contact-us');
    clickId.click();
    await browser.pause(1000);
    await browser.switchWindow('WebDriver | Contact Us');
    await $("[name=first_name]").setValue('sid');
    await $("[name=last_name]").setValue('Vora');
    await $("[name=first_name]").addValue('DHI');
    await $("[name=first_name]").clearValue();
    await browser.pause(3000);
  });
});
