function World() {
    this.visit = function (path) {
        return browser.get(path);
    };

    this.clickButton = function (buttonText) {
        return element(by.buttonText(buttonText)).click();
    };

    this.getMessage = function () {
        return element(by.binding('message')).getText();
    };
}

module.exports = function cucumberSetup () {
    this.World = World;
};
