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





app.service('productService', function() {



});