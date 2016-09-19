// Module
var app = angular.module('storeApp', []);


app.controller('storeController', ["$scope", "classesService", "abilitiesService", function($scope, classesService, abilitiesService) {

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
    $scope.classOneFourthProgress = false;

    $scope.calcCostController = function(classCost) {
        $scope.totalSkillPoints = classesService.calcCostService($scope.totalSkillPoints, classCost);
        $scope.isDisabled = true;
        $scope.classOneFourthProgress = true;
    };

    $scope.barb = abilitiesService.returnBarb();


}]);

app.service('classesService', function() {

    var classesService = this;

    classesService.classes = [

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

    classesService.calcCostService = function(total, classCost) {
        return total -= classCost;
    }

});


app.service('abilitiesService', function() {

    var abilitiesService = this;

    var allAbilities = [];  //push at end
    var Character = {'charName':'', 'abilities':[]};


    // New Object for Characters
    var barbarian = new Object(Character);
    barbarian.charName = "Barbarian Name";

    console.log(barbarian);

    var mage = new Object(Character);
    mage.name = "";

    var paladin = new Object(Character);
    paladin.name = "";

    var assassin = new Object(Character);
    assassin.name = "";


    // New Object for Abilites
    // function to create abilities per character
    function createAbility (name, desc, cost) {
        var Ability = {'name': name, 'description': desc, 'cost': cost};

        return Ability;
    }

    // push first barbarian ability to array
    barbarian.abilities.push(createAbility("Bash", "A powerful smashing blow that knocks the target back.", 1 ));
    barbarian.abilities.push(createAbility("Stun", "A successful attack briefly stuns the enemy.", 2));
    barbarian.abilities.push(createAbility("Whirlwind", "A fierce spinning attack.", 3));
    barbarian.abilities.push(createAbility("Berserk", "A powerful attack that leaves the Barbarian more vulnerable.", 3));

    // function to return barbarian character. Used in controller
    abilitiesService.returnBarb = function getBarb() {
        return barbarian;
    };
});
