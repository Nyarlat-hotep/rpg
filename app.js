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

});


app.controller('parentController', function($scope) {

   $scope.someModel = {
       someValue: 'hello computer'
   };

   $scope.someAction = function() {
       $scope.someModel.someValue = 'hello human, from parent';
   };

});

app.controller('childController', function($scope) {

    $scope.childAction = function() {
        $scope.someModel.someValue = 'hello human, from child';
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