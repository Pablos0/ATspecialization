describe('shopping cart', () => {
    beforeEach(async () => {
        await browser.url("/");
    });

    it ("Adding products to cart", async () => {
        await $('h5[data-test="product-name"]').click();
        await $('button[data-test="increase-quantity"]').click();
        await $('button[data-test="add-to-cart"]').click();

        const productAdded = await $('#toast-container');
        await productAdded.waitForDisplayed({ timeout: 7000 });
        await expect(productAdded).toHaveText("Product added to shopping cart.");
    }) 

    it("Filtering tools", async () => {
        await $('a.nav-link.dropdown-toggle').click();
        await $('a[data-test="nav-power-tools"]').click();
        await $('input.icheck').click();

        const drill = await $('h5*=Cordless Drill 20V');
        await drill.waitForDisplayed({ timeout: 7000 });
        await expect(drill).toHaveText('Cordless Drill 20V');
    });

    it("Deleting products", async () => {
        await $('h5[data-test="product-name"]').click();
        await $('button[data-test="add-to-cart"]').click();

        const toast = await $('.toast-body');
        await toast.waitForDisplayed({ reverse: true });

        await $('a[data-test="nav-cart"]').click();
        await $('a.btn.btn-danger').click();

        const emptyMsg = await $('p.ng-star-inserted');
        await emptyMsg.waitForDisplayed({ timeout: 7000 });
        await expect(emptyMsg).toHaveText('The cart is empty. Nothing to display.'); 
    });

    it("Adding favorites", async () => {
        await $('h5[data-test="product-name"]').click();
        await $('button[data-test="add-to-favorites"]').click();

        const favorites = await $('#toast-container');
        await favorites.waitForDisplayed({timeout: 7000 });
        await expect(favorites).toHaveText("Unauthorized, can not add product to your favorite list.");
    })
})