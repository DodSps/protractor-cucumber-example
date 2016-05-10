function World() {
    this.visit = function (path) {
        return browser.get(path);
    };

    this.clickButton = function () {
        return element(by.buttonText('Click me')).click();
    };

    this.getMessage = function () {
        return element(by.binding('message')).getText();
    };
}

module.exports = function cucumberSetup () {
    this.World = World;
};
