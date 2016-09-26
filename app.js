// Module
var app = angular.module('storeApp', []);


app.controller('storeController', ["$scope", "classesService", "abilitiesService", "weaponService", function($scope, classesService, abilitiesService, weaponService) {

    $scope.totalSkillPoints = 10;
    $scope.classes = classesService.classes;
    $scope.isDisabled = false;
    $scope.classOneFourthProgress = false;
    $scope.isDisabled2 = false;
    $scope.classHalfProgress = false;   // for half progress bar
    $scope.isDisabled3 = false;
    $scope.progressFull = false;    // for full progress bar

    // function to re-retotal points. Sets disabled for buttons, progress class for progress meter
    $scope.calcCostController = function(classCost) {
        $scope.totalSkillPoints = classesService.calcCostService($scope.totalSkillPoints, classCost);
        $scope.isDisabled = true;
        $scope.classOneFourthProgress = true;
    };

    // function for active class card
    $scope.activeCard = function(index) {
        $scope.selectedCard = index;
        $scope.selectedCharacter = abilitiesService.allAbilities[index].abilities;  // get char at specific index
        $scope.pushedName = [];
        $scope.pushedName.push(classesService.classes[index].name); // add class name to footer
    };

    // function for active ability card
    $scope.activeAbilityCard = function(index) {
        $scope.selectedCard2 = index;
        $scope.isDisabled2 = true;
        $scope.classHalfProgress = true;
        $scope.pushedAbility = [];
        $scope.pushedAbility.push(abilitiesService.allAbilities[$scope.selectedCard].abilities[index].name);
    };

    // function for active weapon card
    $scope.activeWeaponCard = function(index) {
        $scope.selectedCard3 = index;
        $scope.isDisabled3 = true;
        $scope.progressFull = true;
        $scope.pushedWeapon = [];
        $scope.pushedWeapon.push(weaponService.allWeapons[index].name);
    };

    // properties for naming character
    $scope.inputCharName = [];
    $scope.inputText = '';
    $scope.nameSubmit = function() {
            $scope.inputCharName.push(this.inputText);
            $scope.inputText = '';   // set text back to nothing
    };

    // access to abilities service
    $scope.allAbilities = abilitiesService.allAbilities;

    // access to weapons service
    $scope.allWeapons = weaponService.allWeapons;

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
            weakness: 'holy energy',
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

    abilitiesService.allAbilities = [];  // push at end


    // New Object for Abilites
    // function to create abilities per character
    function createAbility (name, desc, cost, image) {
        var Ability = {'name': name, 'description': desc, 'cost': cost, 'image': image};

        return Ability;
    }

    // New Object for Characters
    var barbarian = {'abilities':[]};
    // push barbarian abilities to abilities array in Character object
    barbarian.abilities.push(createAbility("Bash", "A powerful smashing blow that knocks the target back.", 1, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/e/e6/Bash_Icon.png?version=48660faeb7eb3976ccb1e92fde0abcbb"));
    barbarian.abilities.push(createAbility("Stun", "A successful attack briefly stuns the enemy.", 2, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/6/60/Stun_Icon.png?version=fe8644ced479540d3cf59e7373fe7146"));
    barbarian.abilities.push(createAbility("Whirlwind", "A fierce spinning attack.", 3, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/f/f4/Whirlwind_Icon.png?version=379cb85bd885db524d3df610bcd6c72a"));
    barbarian.abilities.push(createAbility("Berserk", "A powerful attack that leaves the Barbarian more vulnerable.", 3, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/c/c5/Berserk_Icon.png?version=8e96532155ffd518e66f04ca443084f8"));

    var mage = {'abilities':[]};
    mage.abilities.push(createAbility("Fire Bolt", "Casts a small projectile of fire through the air and in to one enemy.", 1, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/6/68/Fire_Bolt_Icon.png?version=ea538224a6502a40ee0f20f4dde1932c"));
    mage.abilities.push(createAbility("Nova", "When cast, creates an expanding ring of pure lightning damage to hurt surrounding enemies within a fixed range", 2, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/8/89/Nova_Icon.png?version=d3715978b0c4b9bdd7fb0d5e708b04ff"));
    mage.abilities.push(createAbility("Blizzard", "Gives a defense bonus and freezes any melee attacker that hits you.", 3, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/4/4b/Blizzard_Icon.png?version=a5372a61a1d0ec27d2d0453495e914d3"));
    mage.abilities.push(createAbility("Hydra", "Summons a Fire-elemental in the form of a three-headed, fire-spitting hydra.", 3, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/3/3b/Hydra_Icon.png?version=18d3fd84ee9a2572242dcddd61c8fde2"));

    var paladin = {'abilities':[]};
    paladin.abilities.push(createAbility("Might", "Increases damage dealt by party members.", 1, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/8/88/Might_Icon.png?version=f1f6368f162d8b3ad64e402cc0530edf"));
    paladin.abilities.push(createAbility("Thorns", "Enemies take damage when they cause melee damage to party members.", 2, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/9/90/Thorns_Icon.png?version=db66989fa7cddd342926bc5cbd53d8ff"));
    paladin.abilities.push(createAbility("Holy Shock", "Periodically does Lightning damage to enemies within a radius.", 3, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/c/c3/Holy_Shock_Icon.png?version=5d099d421643a689bdb7e356c19ee3a6"));
    paladin.abilities.push(createAbility("Conviction", "Reduces enemy Defense and the Resistances of monsters.", 3, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/8/81/Conviction_Icon.png?version=542eec1f0dcc0b13cf83807c839d99d6"));
    // paladin.abilities.splice(0, 4);
    // console.log(paladin);

    var assassin = {'abilities':[]};
    assassin.abilities.push(createAbility("Dragon Talon", "An Assassin is taught to utilize her entire body as a weapon using this skill, she lets loose a powerful kick to send her opponents flying.", 1, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/a/a4/Dragon_Talon_Icon.png?version=d766f12028e4a1b48f31fa31a12c1376"));
    assassin.abilities.push(createAbility("Cobra Strike", "A properly trained Assassin can focus her mind to draw upon the ambient energies surrounding her. Using this skill, she can drain her adversary of life and spiritual essence.", 2, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/8/85/Cobra_Strike_Icon.png?version=a43170b2cf19a719980d94a0e6d4ac41"));
    assassin.abilities.push(createAbility("Mind Blast", "Focusing her anima, an Assassin using this potent ability can crush the will of a group of enemies, stunning them and confusing the feebleminded into attacking their comrades.", 3, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/c/c4/Mind_Blast_Icon.png?version=ecdb53dc0353a321d870034866b8a2a8"));
    assassin.abilities.push(createAbility("Death Sentry", "This trap emits projectiles laden with a potent chemical catalyst, detonating the exposed cadavers of slain enemies. Damage: 40-80% Of Corpse Life. Shoots 5 times.", 3, "https://hydra-media.cursecdn.com/diablo.gamepedia.com/f/fd/Death_Sentry_Icon.png?version=ea1ec08af7981f41cf8d7fe39d422fe4"));
    // assassin.abilities.splice(0, 4);


    // push barbarian to allAbilities array
    abilitiesService.allAbilities.push(barbarian);
    abilitiesService.allAbilities.push(mage);
    abilitiesService.allAbilities.push(paladin);
    abilitiesService.allAbilities.push(assassin);

});


app.service('weaponService', function () {

    var weaponService = this;

    function Weapon(name, desc, cost, image) {
        this.name = name;
        this.description = desc;
        this.cost = cost;
        this.image = image;
    }

    var sword = new Weapon('Sword', 'Weapon used for hack and slash fighting.', 2, 'http://www.freeiconspng.com/uploads/sword-png-31.png');
    var axe = new Weapon('Axe', 'Heavy weapon used for causing major limb damage.', 3, 'http://plainicon.com/dboard/userprod/2921_4eb4c/prod_thumb/plainicon.com-58663-512px-87e.png');
    var spear = new Weapon('Spear', 'Light weapon used for mid-range fighting.', 2, 'https://d30y9cdsu7xlg0.cloudfront.net/png/33215-200.png');
    var wand = new Weapon('Wand', 'Weapon imbued with magical powers. Used for long distance fighting', 3, 'https://d30y9cdsu7xlg0.cloudfront.net/png/1294-200.png');


    weaponService.allWeapons = [];

    weaponService.allWeapons.push(sword);
    weaponService.allWeapons.push(axe);
    weaponService.allWeapons.push(spear);
    weaponService.allWeapons.push(wand);
    console.log(weaponService.allWeapons);
});


// Custom filter for character name array
app.filter('stringFilter', function() {

    return function(input) {
        if (input) {
            return input.toString();
        }
    }
});
