// Module
var app = angular.module('storeApp', [])


// ng-href
// .run(function($rootScope, $timeout) {
//
//     $timeout(function() {
//         $rootScope.myHref = 'http://google.com';
//     }, 2000);
// });


// ng-src
    .run(function ($rootScope, $timeout) {
        $timeout(function() {
            $rootScope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
        }, 2000);
    });







app.controller('storeController', function($scope) {

    // $scope.currency = {
    //     amount: 1000
    // };
    //
    // $scope.purchase = function(weaponAmount) {
    //     $scope.currency.amount -= weaponAmount;
    // };

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