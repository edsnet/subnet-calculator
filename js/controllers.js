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
        $scope.prefixes = [];
        var i;
        
        for( i=1; i<=64; i++ ){
            $scope.prefixes.push(i);
        }
	}
]);


ipcalculatorControllers.controller('ipv4CalCtrl', ['$scope',
	function($scope){
		$scope.subnets = [];
		var i;
		
		for( i=1; i<=32; i++ ){
			$scope.subnets.push(i);
		}
	}
]);