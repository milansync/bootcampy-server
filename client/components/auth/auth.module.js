'use strict';

angular.module('bootcampyApp.auth', ['bootcampyApp.constants', 'bootcampyApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
