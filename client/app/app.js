'use strict';

angular.module('fullstackApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'btford.socket-io',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });