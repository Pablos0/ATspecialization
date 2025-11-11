describe('User account', () => { 
    beforeEach(async () => {
        await browser.url("/");
    });

    it("Customer log in",  async () => {
        await $('a[data-test="nav-sign-in"]').click();
        await $('input[data-test="login-submit"]').click();

        const loginError = await $("#password-error");
        expect(await loginError.getText()).toEqual("Password is required");
    });
    
    it("Login from cart page", async () => {
        await $('h5[data-test="product-name"]').click();
        await $('button[data-test="add-to-cart"]').click();

        const toast = await $('.toast-body');
        await toast.waitForDisplayed({ reverse: true });
        await browser.pause(100);

        const navCart = await $('a[data-test="nav-cart"]');
        await navCart.waitForClickable();
        await navCart.click();
        await $('[data-test="proceed-1"]').click();
        const loginButton = await $('input[data-test="login-submit"]');
        await loginButton.click();

        const errorMessage = await $('#email-error');
        expect(await errorMessage.getText()).toEqual('Email is required');
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
        expect (await frLang.getText()).toEqual('Accueil');
    })
       
 })