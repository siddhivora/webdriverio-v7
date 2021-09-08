const config = require('../config/main-config');

beforeEach(async () => {
    await browser.url('./');
})
describe('Test Contact us page of WebDriver University::', () => {
    it.skip('validate URL and title', async () => {
        const result = await browser.getUrlAndTitle();

        expect(result.title).to.equal('WebDriverUniversity.com');
        expect(result.url).to.equal('http://www.webdriveruniversity.com/');

    });

    it('submit contact us form', async () => {
        //const clickId = $('#contact-us');
        //clickId.click();
        await browser.waitAndClick('#contact-us');
        await browser.pause(1000);
        await browser.switchWindow('WebDriver | Contact Us');

        //await $("h2[name='contactme']").waitForDisplayed({ timeout : 3000 });
        //await $(config.firstNameSelector).setValue(config.firstName);
        //await $(config.lastNameSelector).setValue(config.lastName);
        //await $(config.emailSelector).setValue(config.email);
        //await $(config.messageSelector).setValue(config.message);
        //await $(config.submitButtonSelector).click();

        await browser.waitAndSendkeys(config.firstNameSelector, config.firstName);
        await browser.waitAndSendkeys(config.lastNameSelector, config.lastName);
        await browser.waitAndSendkeys(config.emailSelector, 'abc@email.com');
        await browser.waitAndSendkeys(config.submitButtonSelector, config.message);
        await browser.waitAndClick(config.submitButtonSelector);

        await $(config.successfulMessageSelector).waitForDisplayed({ timeout : 7000 });
        const successfulUrl = await browser.getUrl();
        expect(successfulUrl).to.equal('http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html');
    });
})