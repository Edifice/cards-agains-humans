'use strict';

/**
 * @ngdoc overview
 * @name cardsAgainstHumansApp
 * @description
 * # cardsAgainstHumansApp
 *
 * Main module of the application.
 */
window.app = angular.module('cardsAgainstHumansApp', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'pascalprecht.translate',
    'ui.bootstrap'
]);

app.config(function($translateProvider) {
    $translateProvider.preferredLanguage('en');
});

app.run(function($rootScope, $cookies, $translate) {
    $rootScope.languages = ['en', 'hu'];
    $rootScope.language = $cookies.get('lang') || 'en';

    $rootScope.$watch('language', function(key) {
        $translate.use(key);

        $cookies.put('lang', key, {expires: 'Tue, 19 Jan 2038 03:14:07 UTC'});
    });
});
