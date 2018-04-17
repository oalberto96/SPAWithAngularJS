(function () {
	"use-strict";
	var app = angular.module("LunchCheck",[]);
	app.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){

		$scope.lunchCheck = function(){
			if ($scope.lunchList != undefined && $scope.lunchList != "") {
				var lunchList = $scope.lunchList.split(",");
				checkEmptyItems(lunchList);
				if (lunchList.length <= 3) {
				$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
					$scope.typeMessage = "success";
				}
			} else {
				$scope.typeMessage = "error";
				$scope.message = "Please enter data first";
			}
		}

		function checkEmptyItems(list){
			for (var i = 0; i < list.length; i++) {
				if (list[i] == "") {
					list.splice(i, 1);
				}
			}
		}
	}

})();

