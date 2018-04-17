(function () {
	"use-strict";
	var app = angular.module("LunchCheck",[]);
	app.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){

		$scope.lunchCheck = function(){
			if ($scope.lunchList != undefined && $scope.lunchList != "") {
				var lunchList = $scope.lunchList.split(",");
				if (lunchList.length <= 3) {
				$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				}
			} else {
				$scope.message = "Please enter data first";
			}
		}
	}

})();

