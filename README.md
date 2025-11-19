# Automated Testing in JavaScript project 🛠️ 🧪

This project is to generate test cases related to page https://practicesoftwaretesting.com/ 

The project has been created as part of Automated Testing in JavaScript program from EPAM campus. 

The project is develop with different frameworks such WDIO and CHAI. The cases to be tested are: 

1. A Customer log in to his account
2. Customer John log in from his cart
3. A new Customer registration
4. Adding products to the shopping cart
5. Filtering tools
6. Deleting products from the shopping cart
7. Adding tools to favorites

## Structure

The tests scenarios are divide in two files called ```shoppingCart1``` and ```customerAccount1``` which are inside Features folder. 

The ```spec.js``` files in the next path ```./test/specs```. There is one file for each Feature file. 

In <b>.gitignore</b> file is just ```node_modules``` folder. In ```wdio.conf.js``` is the required configuration for each test.

## Configuration 

The specs are saved under the names ```cart.spec.js``` and ```userActions.spec.js```, the configuration the wdio.config file is:

```js
specs: [
        './test/specs/**/*.js',
        './src/test/specs/**/*.js'
    ],
```
The max number of  instance to be use is <b>2</b>
The capabilities are configured with thre browsers: 
1. Chrome
2. Firefox 
3. Safari (this browser is available just in iOS)

Chrome and Firefox are configured to be run in headless mode:

```js
capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions':{
            args: [
                '--headless',
                '--disable-gpu',
                '--window-size=1920,1080'
            ]
        
    }},
        {browserName: 'firefox',
        'moz:firefoxOptions': {
            args: [
                '--headless',
                '--disable-gpu',
                '--window-size=1920,1080'
            ]
        }},
       //  { browserName: 'safari' } no tested by computer compability
    ]
```
Chai is implemented as ``` import { expect, assert, should } from 'chai';``` and his functions: 
```js
before: function (capabilities, specs) {
        global.expect = expect;
        global.assert = assert;
        global.should = should();
     }
```

## Test Scenario
### Shopping cart

<b>Adding products to the cart</b>, the user is trying to add "Thor Hammer" to his cart, once the user do click in "add button", the cart icon should change with a number, depending of the amount of products in the cart. 

<b>Filtering Tools</b>, the user is looking for a drill. To do this the user needs to do click in "Categories" option at the top right of the page and select "power tools". Once the tools are display, in the left side there are several options to filter the results, when the user select "drill" chebox, the page should reload within the next 3 seconds.

<b>Deleting products from cart</b>, the user will try to delete his products in his cart. In the right side of the product should be an "X" button. When the user do click, in the top right side should appear the message "Product deleted" and the cart page will be refreshed automatically.

<b>Adding favorites</b>, the user is trying to add a tool to favorite, but he is not allow to do it. When he do click in "Add to favorites", the "Unauthorized, can not add product to your favorite list." message must appears.

### Customer account
<b>Customer login</b>, the user is trying to log in to his account typing "john@domain.com" as emal and as password "password123", then press enter. But, due the password is incorrect, an  "Invalid email or password" error message must appears.

<b>Customer log in from cart</b>, user do click in the cart icon located in the top right of the page and the click in "Proceed to checkout", when the user do click in login button without any information, the message "Email is required" must be shown. 

<b>Language change</b>, as the user speaks another language, when he do click in th little globe button located in the top right of the page and select his prefered language, the page should be refreshed with the new language.

## Languages and Framework 


<img src="./src/images/javascript.png" alt= "webdriverIOicon" width= "35px" height = "35px"><br>

<img src="./src/images/webdriverio.png" alt= "webdriverIOicon" width= "35px" height = "35px"><br>

## Notes

### Assert, Should and Expect

The ```Assert``` allows insert an additional message in the last parameter for better understanding of the test. This option is also available with ```Expect```, however this is BDD, unlike assert, which is TDD. 
Both ```Expect``` and ```Should``` are BDD, the main different between these two are th syntax. ```Should``` function required to be executed. 

### Page Objects

The page objects files are under constructions...  