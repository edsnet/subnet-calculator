'use strict';

var ipcalculatorControllers = angular.module('ipcalculatorControllers', []);

ipcalculatorControllers.controller("menuCtrl", ['$scope','$location',
    function($scope, $location){
        $scope.isActive = function(viewLocation){
            return viewLocation ===$location.path();
        };
    }
]);

ipcalculatorControllers.controller("ipv6CalCtrl", ['$scope',
	function($scope) {
        $scope.ipv6 = {};
        $scope.ipv6.title = "IPv6";
	}
]);


ipcalculatorControllers.controller('ipv4CalCtrl', ['$scope',
	function($scope){
		$scope.ipv4 = {};
		$scope.ipv4.title = "IPv4";
	}
]);