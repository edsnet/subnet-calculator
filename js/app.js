'use strict';

var ipcalculatorApp = angular.module('ipcalculatorApp', [
	'ngRoute',
	'ipcalculatorControllers'
]);

ipcalculatorApp.config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        
		$routeProvider.
			when('/ipv6', {
				templateUrl: '/partials/ipv6.html',
				controller: 'ipv6CalCtrl'
			}).
			when('/ipv4', {
				templateUrl: '/partials/ipv4.html',
				controller: 'ipv4CalCtrl'
			}).
			otherwise({
				redirectTo: '/ipv6'
			});
	}
);