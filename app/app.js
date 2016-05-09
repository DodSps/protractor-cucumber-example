(function (angular) {

    var app = angular.module('app', [
        'ngRoute'
    ]);

    app.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'BaseCtrl',
                    templateUrl: 'templates/base.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);

    app.controller('BaseCtrl', [
        '$scope',
        function ($scope) {
            $scope.clicked = false;
            $scope.click = function () {
                if ($scope.clicked) {
                    $scope.message = 'not clicked'
                    $scope.clicked = false;
                } else {
                    $scope.message = 'clicked'
                    $scope.clicked = true;
                }
            }
        }
    ]);

}(window.angular));
