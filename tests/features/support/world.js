module.exports = function cucumberSetup () {

    this.World = function World() {
        // this property will be available in step definitions
        this.prop = 'Hello from the World!';

        this.greetings = function(name) {
            console.log('\n----Hello ' + name);
        };
    };
};
