# Lab8_Starter
Name: Menghe Li
## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1)Within a Github action that runs whenever code is pushed.

1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because the message feature allow to write and send, which are separate parts of the code that should be tested separately.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

yes, because it is a small testing that does not need to do any other testing on other feature.

1. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

It will run the default - run the tests without a browser UI

1. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

Use await page.click("header > img")

