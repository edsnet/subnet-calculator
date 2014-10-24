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
        $scope.ipv6.title = "Prefix Length";
        $scope.ipv6.address = "";
        $scope.ipv6.pattern = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
        $scope.ipv6.prefixes = [];
        $scope.ipv6.response = "No.";
        $scope.ipv6.splitAddress = [];
        var i;
        
        for( i=128; i>=1; i-- ){
            $scope.ipv6.prefixes.push(i);
        }
        
        $scope.onChange = function(){
            if($scope.ipv6Input.address.$valid){
                $scope.ipv6.response = "Yes"; 
                $scope.ipv6.splitAddress = $scope.ipv6.address.split(':');
            }
        };
	}
]);


ipcalculatorControllers.controller('ipv4CalCtrl', ['$scope',
	function($scope){
		$scope.ipv4 = {};
		$scope.ipv4.title = "Subnet Mask";
		$scope.ipv4.address = "";
		$scope.ipv4.pattern = /^((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])$/;
		$scope.ipv4.subnets = [];
		$scope.ipv4.response = "No.";
		$scope.ipv4.splitAddress = [];
		var i;
		
		for( i=32; i>=1; i-- ){
			$scope.ipv4.subnets.push(i);
		}
		
        $scope.onChange = function(){
            if($scope.ipv4Input.address.$valid){
                $scope.ipv4.response = "Yes"; 
                $scope.ipv4.splitAddress = $scope.ipv4.address.split('.');
            }
        };		
	}
]);