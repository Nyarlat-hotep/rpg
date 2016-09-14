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
           myUrl: '=',
           myLinkText: '@'
       },
       template: '\
          <div>\
            <label>My URL Field:</label>\
            <input type="text" ng-model="myUrl" />\
            <a href="{{myUrl}}">{{myUrl}}</a>\
          </div>\
        '
   }
});