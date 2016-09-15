// Module
var app = angular.module('storeApp', []);


app.controller('storeController', ["$scope", "classesService", function($scope, classesService) {

    // $scope.currency = {
    //     amount: 1000
    // };
    //
    // $scope.purchase = function(weaponAmount) {
    //     $scope.currency.amount -= weaponAmount;
    // };

    $scope.name = classesService.classes[0].name;
    $scope.skillPoints = classesService.totalSkillPoints;

}]);

app.service('classesService', function() {

    var self = this;

    this.totalSkillPoints = 10;

    this.classes = [

         {
          name: 'Barbarian',
          skill: 'hand-to-hand combat'
        }

    ]
});
