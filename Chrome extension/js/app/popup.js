console.log("popup.js Loaded ! ! ");
let myAmazonHistory = angular.module("myamazonhistory", ["ui.router"]);

myAmazonHistory.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("home", {
    url: "/home",
    templateUrl: "../views/home.html",
  });

  $urlRouterProvider.otherwise("home");
});

myAmazonHistory.controller("PopupCtrl", ["$scope", "$state", function ($scope, $state) {
  console.log("Popup Controller Initialized")
}])