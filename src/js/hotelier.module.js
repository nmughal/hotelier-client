(function() {
  'use strict';

  angular.module('hotelier', ['ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider
      .state({
        name: 'create-guest',
        url: '/create-guest',
        templateUrl: 'views/create-guest.template.html',
        controller: 'GuestController',
        controllerAs: 'guestCtrl'
      })

      .state({
        name: 'login',
        url: '/login',
        templateUrl: 'views/login.template.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
      })
      .state({
        name: 'make-reservation',
        url: '/make-reservation',
        templateUrl: 'views/make-reservation.template.html',
        controller: 'ReservationController',
        controllerAs: 'resCtrl'
      })
      .state({
        name: 'home',
        url: '/',
        templateUrl: 'views/home.template.html'
      });
  }
}());
