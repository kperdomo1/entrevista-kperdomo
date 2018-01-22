'use strict';

/**
 * @ngdoc overview
 * @name leadakiApp
 * @description
 * # leadakiApp
 *
 * Main module of the application.
 */
angular
    .module('leadakiApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router'
    ])
    .config(
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    });
