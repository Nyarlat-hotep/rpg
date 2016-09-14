// Module
var app = angular.module('storeApp', ['ngRoute']);



app.controller('storeController', function($scope) {

    $scope.currency = {
        amount: 1000
    };

    $scope.purchase = function(weaponAmount) {
        $scope.currency.amount -= weaponAmount;
    };

});





app.directive('myDirective', function () {
   return {
       restrict: 'A',
       replace: true,
       scope: {
           myText: '=',
           myLinkText: '@'
       },
       template: '\
          <div>\
            <label>My Text Field:</label>\
            <input type="text" ng-model="myText" />\
            <a href="{{myText}}">{{myText}}</a>\
          </div>\
        '
   }
});