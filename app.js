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

    $scope.activeCard = function(index) {
        $scope.selectedCard = index;
    };


    $scope.inputCharName = [];
    $scope.inputText = '';
    $scope.nameSubmit = function() {
            $scope.inputCharName.push(this.inputText);
            $scope.inputText = '';   // set text back to nothing
    }

}]);

app.service('classesService', function() {

    var classesService = this;

    classesService.classes = [

         {
             name: 'Barbarian',
             skill: 'hand-to-hand combat',
             weakness: 'arcane magic',
             cost: 1,
             image: "https://hydra-media.cursecdn.com/diablo.gamepedia.com/a/a7/Barbarian_diablo_II.gif?version=a0e77c2c02b44ccb203b5e012aa2411c",
             active: false
        },
        {
            name: 'Mage',
            skill: 'arcane magic',
            weakness: 'ranged attacks',
            cost: 3,
            image: 'https://hydra-media.cursecdn.com/diablo.gamepedia.com/f/f2/Sorceress.gif?version=4eb1229c3b3bbb4fa1ebc3227415c625',
            active: false
        },
        {
            name: 'Paladin',
            skill: 'holy energy',
            weakness: 'ranged attacks',
            cost: 2,
            image: 'https://hydra-media.cursecdn.com/diablo.gamepedia.com/c/c3/Paladin.gif?version=de9305f310c75d61d3610e6231705cc8',
            active: false
        },
        {
            name: 'Assassin',
            skill: 'ranged attacks',
            weakness: 'hand-to-hand combat',
            cost: 3,
            image: 'https://hydra-media.cursecdn.com/diablo.gamepedia.com/3/37/Assassin.gif?version=52da562801e08e5f8f16a21ae3dbb43d',
            active: false
        }
    ];

    classesService.calcCostService = function(total, classCost) {
        return total -= classCost;
    };

});


app.service('abilitiesService', function() {

    var abilitiesService = this;

    var allAbilities = [];  //push at end
    var Character = {'abilities':[]};

    abilitiesService.charName = '';

    // New Object for Characters
    var barbarian = new Object(Character);
    // push barbarian abilities to abilities array in Character object
    barbarian.abilities.push(createAbility("Bash", "A powerful smashing blow that knocks the target back.", 1 ));
    barbarian.abilities.push(createAbility("Stun", "A successful attack briefly stuns the enemy.", 2));
    barbarian.abilities.push(createAbility("Whirlwind", "A fierce spinning attack.", 3));
    barbarian.abilities.push(createAbility("Berserk", "A powerful attack that leaves the Barbarian more vulnerable.", 3));

    var mage = new Object(Character);
    mage.abilities.push(createAbility("Fire Bolt", "Casts a small projectile of fire through the air and in to one enemy.", 1));
    mage.abilities.push(createAbility("Nova", "When cast, creates an expanding ring of pure lightning damage to hurt surrounding enemies within a fixed range", 2));
    mage.abilities.push(createAbility("Blizzard", "Gives a defense bonus and freezes any melee attacker that hits you.", 3));
    mage.abilities.push(createAbility("Hydra", "Summons a Fire-elemental in the form of a three-headed, fire-spitting hydra.", 3));
    mage.abilities.splice(0, 4);

    var paladin = new Object(Character);
    paladin.abilities.push(createAbility("Paladin", "Might", "Increases damage dealt by party members.", 1));
    paladin.abilities.push(createAbility("Thorns", "Enemies take damage when they cause melee damage to party members.", 2));
    paladin.abilities.push(createAbility("Holy Shock", "Periodically does Lightning damage to enemies within a radius.", 3));
    paladin.abilities.push(createAbility("Conviction", "Reduces enemy Defense and the Resistances of monsters.", 3));
    paladin.abilities.splice(0, 4);
    // console.log(paladin);

    var assassin = new Object(Character);
    assassin.abilities.push(createAbility("Dragon Talon", "An Assassin is taught to utilize her entire body as a weapon using this skill, she lets loose a powerful kick to send her opponents flying.", 1));
    assassin.abilities.push(createAbility("Cobra Strike", "A properly trained Assassin can focus her mind to draw upon the ambient energies surrounding her. Using this skill, she can drain her adversary of life and spiritual essence.", 2));
    assassin.abilities.push(createAbility("Mind Blast", "Focusing her anima, an Assassin using this potent ability can crush the will of a group of enemies, stunning them and confusing the feebleminded into attacking their comrades.", 3));
    assassin.abilities.push(createAbility("Death Sentry", "This trap emits projectiles laden with a potent chemical catalyst, detonating the exposed cadavers of slain enemies. Damage: 40-80% Of Corpse Life. Shoots 5 times.", 3));
    assassin.abilities.splice(0, 4);


    // New Object for Abilites
    // function to create abilities per character
    function createAbility (name, desc, cost) {
        var Ability = {'name': name, 'description': desc, 'cost': cost};

        return Ability;
    }


    // push barbarian to allAbilities array
    allAbilities.push(barbarian);
    allAbilities.push(mage);
    allAbilities.push(paladin);
    allAbilities.push(assassin);
    console.log(allAbilities);

});
