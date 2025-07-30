(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunchMenu = "";
    $scope.messageClass = "";
    $scope.inputBorderClass = "";

    // Reset styling when user starts typing
    $scope.$watch("lunchMenu", function (newValue, oldValue) {
      if (newValue !== oldValue && $scope.message) {
        $scope.messageClass = "";
        $scope.inputBorderClass = "";
      }
    });

    $scope.checkLunch = function () {
      if (!$scope.lunchMenu || $scope.lunchMenu.trim() === "") {
        $scope.message = "Please enter data first";
        $scope.messageClass = "error-message";
        $scope.inputBorderClass = "error-border";
        return;
      }

      var lunchItems = $scope.lunchMenu.split(",").filter(function (item) {
        return item.trim() !== "";
      });

      if (lunchItems.length === 0) {
        $scope.message = "Please enter data first";
        $scope.messageClass = "error-message";
        $scope.inputBorderClass = "error-border";
      } else if (lunchItems.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageClass = "success-message";
        $scope.inputBorderClass = "success-border";
      } else {
        $scope.message = "Too much!";
        $scope.messageClass = "success-message";
        $scope.inputBorderClass = "success-border";
      }
    };
  }
})();
