// Module
var app = angular.module('storeApp', []);


app.controller('storeController', function($scope) {

    // $scope.currency = {
    //     amount: 1000
    // };
    //
    // $scope.purchase = function(weaponAmount) {
    //     $scope.currency.amount -= weaponAmount;
    // };


    $scope.people = [
        {name: "ari", city: "sanfran"},
        {name: "erik", city: "seattle"}
    ];
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