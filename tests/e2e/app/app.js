/* global describe, it, beforeEach, module, inject, expect, spyOn */

(function () {

    'use strict';

    describe('App', function () {

        beforeEach(function () {

            browser.get('/');

            this.$button = element(by.buttonText('Click me'));
            this.$message = element(by.binding('message'));

        });

        it('should say nothing', function () {
            expect(this.$message.getText()).toBe('');
        });

        it('should say "clicked" after one click', function () {
            this.$button.click()
            expect(this.$message.getText()).toBe('clicked');
        });

        it('should say "clicked again" after two clicks', function () {
            this.$button.click()
            this.$button.click()
            expect(this.$message.getText()).toBe('clicked again');
        });

    });

}());
