module.exports = function appSteps() {

    this.Given(/^this is the first app$/, function () {
        console.log('\n----' + this.prop);
    });

    this.Given(/^this is the second app$/, function () {
        return this.greetings('everybody');
    });

};
