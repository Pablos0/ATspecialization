Feature: Customer Account

Scenario: A Customer log in to his account
Given user wants to log in to his customer profile
When customer type his "john@domain.com" in "Email address" field
And type "password123" in "Password" field
But the typed password is "incorrect" 
And press "Login" button
Then John should received "Invalid email or password" message

Scenario: Customer John log in from his cart
Given User "click" in "cart" icon
And do click in "Proceed to checkout" button
When User click on "Login" button without his credentials
Then should received "Email is required" error message

Scenario: A new Customer registration
Given the user speaks just French
When user "click" in button with the little globe
And select "FR" as prefered language 
Then the page page should change the language to French

