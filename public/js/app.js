angular.module('RomanCalci', ['ngRoute', 'RomanCalciController', 'RomanCalciService'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html'
            })
        $locationProvider.html5Mode(true);
    }]); 