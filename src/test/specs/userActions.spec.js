 import { assert, expect } from "chai";

 describe('User account', () => { 
    beforeEach(async () => {
        await browser.url("/");
    });

    it("Customer log in",  async () => {
        await $('a[data-test="nav-sign-in"]').click();
        await $('input[data-test="login-submit"]').click();

        const loginError = await $("#password-error");
        expect(await loginError.getText()).to.equal("Password is required");
    });
    
    it("Login from cart page", async () => {
        await $('h5[data-test="product-name"]').click();
        await $('button[data-test="add-to-cart"]').click();

        const toast = await $('#toast-container');
        await toast.waitForDisplayed({ timeout: 7000 });

        const navCart = await $('a[data-test="nav-cart"]');
        await navCart.click();
        await $('[data-test="proceed-1"]').click();
        const loginButton = await $('input[data-test="login-submit"]');
        await loginButton.click();

        const errorMessage = await $('#email-error');
        await errorMessage.waitForDisplayed({ timeout: 7000 });

        const errMessage = await errorMessage.getText();
        errMessage.should.equal('Email is required');
    });

    it ("language change to French", async () => {
        await $('[data-test="language-select"]').click();
        await $('[data-test="lang-fr"]').click();

        const frLang = await $('a[data-test="nav-home"]');
        await frLang.waitUntil(async function () {
            return (await this.getText()) === 'Accueil'
        }, {
            timeoutMsg: 'Expected text to change to "Accueil"'
        }); 

        const newLanguage = await frLang.getText();
        assert.equal(newLanguage, 'Accueil');
       // expect (await frLang.getText()).toEqual('Accueil');
    })
 }) 