// Module
var app = angular.module('storeApp', ['ngRoute']);



app.controller('storeController', ['$scope', '$parse', function($scope, $parse) {

    $scope.person = {
        name: 'ari lerner'
    };

    $scope.$watch('expr', function(newVal, oldVal, scope) {
        if (newVal !== oldVal) {    
            var parseFun = $parse(newVal);
            scope.parsedValue = parseFun(scope);
        }
    });

}]);





app.service('productService', function() {



});