'use strict';

var ipcalculatorApp = angular.module('ipcalculatorApp', [
	'ngRoute',
	'ipcalculatorControllers'
]);

ipcalculatorApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/ipv6', {
				templateUrl: 'ipv6/ipv6.html',
				controller: 'ipv6CalCtrl'
			}).
			when('/ipv4', {
				templateUrl: 'ipv4/ipv4.html',
				controller: 'ipv4CalCtrl'
			}).
			otherwise({
				redirectTo: '/ipv6'
			});
	}
]);