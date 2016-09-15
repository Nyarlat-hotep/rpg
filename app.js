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

    $scope.totalSkillPoints = 10;
    $scope.classes = classesService.classes;
    $scope.isDisabled = false;
    $scope.classOneFourthProggress = false;

    $scope.calcCostController = function(classCost) {
        $scope.totalSkillPoints = classesService.calcCostService($scope.totalSkillPoints, classCost);
        $scope.isDisabled = true;
        $scope.classOneFourthProggress = true;
    };

}]);

app.service('classesService', function() {

    var self = this;

    self.classes = [

         {
             name: 'Barbarian',
             skill: 'hand-to-hand combat',
             weakness: 'arcane magic',
             cost: 1,
             image: "https://hydra-media.cursecdn.com/diablo.gamepedia.com/a/a7/Barbarian_diablo_II.gif?version=a0e77c2c02b44ccb203b5e012aa2411c"
        },
        {
            name: 'Mage',
            skill: 'arcane magic',
            weakness: 'ranged attacks',
            cost: 3,
            image: 'https://hydra-media.cursecdn.com/diablo.gamepedia.com/f/f2/Sorceress.gif?version=4eb1229c3b3bbb4fa1ebc3227415c625'
        },
        {
            name: 'Paladin',
            skill: 'holy energy',
            weakness: 'ranged attacks',
            cost: 2,
            image: 'https://hydra-media.cursecdn.com/diablo.gamepedia.com/c/c3/Paladin.gif?version=de9305f310c75d61d3610e6231705cc8'
        },
        {
            name: 'Assassin',
            skill: 'ranged attacks',
            weakness: 'hand-to-hand combat',
            cost: 3,
            image: 'https://hydra-media.cursecdn.com/diablo.gamepedia.com/3/37/Assassin.gif?version=52da562801e08e5f8f16a21ae3dbb43d'
        }
    ];

    self.calcCostService = function(total, classCost) {
        return total -= classCost;
    }

});
