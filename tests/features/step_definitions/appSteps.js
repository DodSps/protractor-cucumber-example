console.log('appsteps');
var appSteps = function() {

    this.Given(/^this is the first app$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Given(/^this is the second app$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

};

module.exports = appSteps;
