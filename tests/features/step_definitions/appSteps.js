var assert = require('assert');

module.exports = function appSteps() {

    this.Given('I am on the home page', function () {
        return this.visit('/');
    });

    this.When('I click the button once', function () {
        return this.clickButton();
    });

    this.When('I click the button twice', function () {
        return this.clickButton().then(this.clickButton);
    });

    this.Then('The message should be empty', function () {
        return this.getMessage().then((actualMessage) => {
            assert.equal(actualMessage, '');
        });
    });

    this.Then('The message should say $message', function (expectedMessage) {
        return this.getMessage().then((actualMessage) => {
            assert.equal(actualMessage, expectedMessage);
        });
    });

};
