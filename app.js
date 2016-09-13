// Module
var app = angular.module('storeApp', ['ngRoute']);



app.controller('storeController', function($scope) {

    $scope.name = "Taylor";
    $scope.clock = {
        now: new Date()
    };

    var updateClock = function () {
        $scope.clock.now = new Date()
    };
    setInterval(function () {
        $scope.$apply(updateClock); // every sec run function setting new date
    }, 1000);
    updateClock();

    $scope.counter = 0;
    $scope.add = function(amount) { // amount = 1 in index file
        $scope.counter += amount;
    };
    $scope.subtract = function(amount) {
        $scope.counter -= amount;
    }

});



app.controller('parentController', function($scope) {

   $scope.person = {
       greeted: false
   };

});

app.controller('childController', function($scope) {

    $scope.sayHello = function() {
        $scope.person.name = 'Ari Lerner';
        $scope.person.greeted = true;
    }

});





app.service('productService', function() {



});