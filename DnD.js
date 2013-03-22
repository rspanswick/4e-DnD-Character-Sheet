// Primary Character Object ====================================================

function myCharacter(myName, myRace, myShifter, myClass, myRole, myGender, myStr, myCon, myDex, myInt, myWis, myCha, myRP) {
    this.myName = myName;
    this.myRace = myRace;
    this.myShifter = myShifter;
    this.myClass = myClass;
    this.myRole = myRole;
    this.myGender = myGender;
    this.myStr = myStr;
    this.myCon = myCon;
    this.myDex = myDex;
    this.myInt = myInt;
    this.myWis = myWis;
    this.myCha = myCha;
    this.myRP = myRP;
}

// Name Your Character ==========================================================

function newName(userInput) {
  userName = userInput;
	generateToon();
}

// Chose your Race, Class, Role & Gender ========================================

var userName = undefined; 
var userRace = undefined;
var userClass = undefined;
var userGender = undefined;
var userRole = undefined;
var userStr = 10;
var userCon = 10;
var userDex = 10;
var userInt = 10;
var userWis = 10;
var userCha = 10;
var userRP = 22;
var modStr = userStr;
var modCon = userCon;
var modDex = userDex;
var modInt = userInt;
var modWis = userWis;
var modCha = userCha;
var shifterType = undefined;
var newToon = new myCharacter();

function newRace(userInput) {
	userRace = userInput;
	resetModify();
	resetShifter();
	//checkForHuman();
	checkForShifter();
	generateToon();
}

function newClass(userInput) {
	userClass = userInput;
	newRole(userClass);
	generateToon();
}

function newRole(userClass) {
	var roleListController = ["Druid", "Invoker", "Wizard"];
	var roleListDefender = ["Fighter", "Paladin", "Warden"];
	var roleListLeader = ["Bard", "Cleric", "Shaman", "Warlord"];
	var roleListStriker = ["Avenger", "Barbarian", "Ranger", "Rogue", "Sorcerer", "Warlock"];
	for (classNames in roleListController) {
		if (userClass === roleListController[classNames]) {
			userRole = "Controller";
		}
	};
	for (classNames in roleListDefender) {
		if (userClass === roleListDefender[classNames]) {
			userRole = "Defender";
		}
	};
	for (classNames in roleListLeader) {
		if (userClass === roleListLeader[classNames]) {
			userRole = "Leader";
		}
	};
	for (classNames in roleListStriker) {
		if (userClass === roleListStriker[classNames]) {
			userRole = "Striker";
		}
	};
}

function newGender(userInput) {
	userGender = userInput;
	generateToon();
}

// Populate Race & Class Lists ===========================================

var arrayList = ["raceList", "classList", "genderList"];

var raceList = ["Changeling", "Deva", "Dragonborn", "Drow", "Dwarf", "Eladrin", "Elf", "Genasi", "Githzerai", "Gnome", "Goliath", "Half-Elf", "Half-Orc", "Halfling", "Human", "Kalashtar", "Minotaur", "Mul", "Revenant", "Shadar-Kai", "Shardmind", "Shifter", "Thri-Kreen", "Tiefling", "Warforged", "Wilden"];
var classList = ["Avenger", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Invoker", "Paladin", "Ranger", "Rogue", "Shaman", "Sorcerer", "Warden", "Warlock", "Warlord", "Wizard"];
var genderList = ["Male", "Female"];

for (n=0; n<arrayList.length; n++) {
	var optionList = window[arrayList[n]];
	var targetOptionList = document.getElementById(arrayList[n] + "Target");
	for (i=0; i<optionList.length; i++) {
		var newOpt = document.createElement("option");
		newOpt.innerHTML = optionList[i];
		newOpt.value = optionList[i];
		targetOptionList.appendChild(newOpt);
	}
}

// Add & Remove Attribute Points =========================================

var remainingPoints = document.getElementById("remainingPoints");

function addPoint(userInput) {
	var findAttribute = document.getElementById((userInput + "Number"));
	var counterPoint = findAttribute.innerHTML;
	var counterRP = remainingPoints.innerHTML;
	if (remainingPoints.innerHTML > 0 && findAttribute.innerHTML >= 0 && findAttribute.innerHTML < 13) {
		findAttribute.innerHTML = Number(counterPoint) + 1;
		remainingPoints.innerHTML = Number(counterRP) - 1;
	} else if (remainingPoints.innerHTML > 0 && findAttribute.innerHTML >= 13 && findAttribute.innerHTML < 16) {
		if ((remainingPoints.innerHTML - 2) >= 0) {
			findAttribute.innerHTML = Number(counterPoint) + 1;
			remainingPoints.innerHTML = Number(counterRP) - 2;
		} else {
			console.log("You do not have enough points remaining to increase this skill");
		}
	} else if (remainingPoints.innerHTML > 0 && findAttribute.innerHTML >= 16 && findAttribute.innerHTML < 17) {
		if ((remainingPoints.innerHTML - 3) >= 0) {
			findAttribute.innerHTML = Number(counterPoint) + 1;
			remainingPoints.innerHTML = Number(counterRP) - 3;
		} else {
			console.log("You do not have enough points remaining to increase this skill");
		}
	} else if (remainingPoints.innerHTML > 0 && findAttribute.innerHTML >= 17) {
		if ((remainingPoints.innerHTML - 4) >= 0) {
			findAttribute.innerHTML = Number(counterPoint) + 1;
			remainingPoints.innerHTML = Number(counterRP) - 4;
		} else {
			console.log("You do not have enough points remaining to increase this skill");
		}
	}
	if (userInput === "str") {
		userStr = findAttribute.innerHTML;
	} else if (userInput === "con") {
		userCon = findAttribute.innerHTML;
	} else if (userInput === "dex") {
		userDex = findAttribute.innerHTML;
	} else if (userInput === "int") {
		userInt = findAttribute.innerHTML;
	} else if (userInput === "wis") {
		userWis = findAttribute.innerHTML;
	} else if (userInput === "cha") {
		userCha = findAttribute.innerHTML;
	}
	userRP = Number(remainingPoints.innerHTML);
	modStr = Number(userStr);
	modCon = Number(userCon);
	modDex = Number(userDex);
	modInt = Number(userInt);
	modWis = Number(userWis);
	modCha = Number(userCha);
	if (shifterType) {
		modWis = Number(userWis) + 2;
		if (shifterType === "Longtooth"){
			modStr = Number(userStr) + 2;
		} else if (shifterType === "Razerclaw") {
			modDex = Number(userDex) + 2;
		} else {
			abilityModify();
		}
	} else {
		abilityModify();
	}
	generateToon();
}
function removePoint(userInput) {
	var findAttribute = document.getElementById((userInput + "Number"));
	var counterPoint = findAttribute.innerHTML;
	var counterRP = remainingPoints.innerHTML;
	if (remainingPoints.innerHTML >= 0 && findAttribute.innerHTML > 0 && findAttribute.innerHTML <= 13) {
		findAttribute.innerHTML = Number(counterPoint) - 1;
		remainingPoints.innerHTML = Number(counterRP) + 1;
	} else if (remainingPoints.innerHTML >= 0 && findAttribute.innerHTML > 13 && findAttribute.innerHTML <= 16) {
		findAttribute.innerHTML = Number(counterPoint) - 1;
		remainingPoints.innerHTML = Number(counterRP) + 2;
	} else if (remainingPoints.innerHTML >= 0 && findAttribute.innerHTML > 16 && findAttribute.innerHTML <= 17) {
		findAttribute.innerHTML = Number(counterPoint) - 1;
		remainingPoints.innerHTML = Number(counterRP) + 3;
	} else if (remainingPoints.innerHTML >= 0 && findAttribute.innerHTML > 17) {
		if (findAttribute.innerHTML > 0) {
			findAttribute.innerHTML = Number(counterPoint) - 1;
			remainingPoints.innerHTML = Number(counterRP) + 4;
		}
	}
	if (userInput === "str") {
		userStr = findAttribute.innerHTML;
	} else if (userInput === "con") {
		userCon = findAttribute.innerHTML;
	} else if (userInput === "dex") {
		userDex = findAttribute.innerHTML;
	} else if (userInput === "int") {
		userInt = findAttribute.innerHTML;
	} else if (userInput === "wis") {
		userWis = findAttribute.innerHTML;
	} else if (userInput === "cha") {
		userCha = findAttribute.innerHTML;
	}
	userRP = Number(remainingPoints.innerHTML);
	modStr = Number(userStr);
	modCon = Number(userCon);
	modDex = Number(userDex);
	modInt = Number(userInt);
	modWis = Number(userWis);
	modCha = Number(userCha);
	if (shifterType) {
		modWis = Number(userWis) + 2;
		if (shifterType === "Longtooth"){
			modStr = Number(userStr) + 2;
		} else if (shifterType === "Razerclaw") {
			modDex = Number(userDex) + 2;
		}
	} else {
		abilityModify();
	}
	generateToon();
}

// Racial Ability Score Modifiers ========================================

var StrModMessage = document.getElementById("strModify");
var ConModMessage = document.getElementById("conModify");
var DexModMessage = document.getElementById("dexModify");
var IntModMessage = document.getElementById("intModify");
var WisModMessage = document.getElementById("wisModify");
var ChaModMessage = document.getElementById("chaModify");
var lightBox = document.getElementById("chooseAbility");
var shifterBox = document.getElementById("chooseShifter");
var humanBox = document.getElementById("chooseAnyAbility");
var resetModifyButton = document.getElementById("resetModifyButton");
var resetShifterButton = document.getElementById("resetShifterButton");
var shifterMessage = document.getElementById("shifterChoiceMessage");
var chosenAbility = undefined;
var attribute0 = undefined;
var attribute1 = undefined;
var attribute2 = undefined;
var modAtt0 = undefined;
var userAtt0 = undefined;
var attModMessage0 = undefined;
var modAtt1 = undefined;
var userAtt1 = undefined;
var attModMessage1 = undefined;
var modAtt2 = undefined;
var userAtt2 = undefined;
var attModMessage2 = undefined;
var sayName = undefined;

if (userName) {
	sayName = userName;
} else {
	sayName = "Adventurer";
}

function abilityChoice(userInput) {
	chosenAbility = userInput;
	abilityModify();
}

function abilityModify() {
	modStr = Number(userStr);
	modCon = Number(userCon);
	modDex = Number(userDex);
	modInt = Number(userInt);
	modWis = Number(userWis);
	modCha = Number(userCha);
	StrModMessage.innerHTML = ""
	ConModMessage.innerHTML = ""
	DexModMessage.innerHTML = ""
	IntModMessage.innerHTML = ""
	WisModMessage.innerHTML = ""
	ChaModMessage.innerHTML = ""
	
	function pickAbility(race, abi0, abi1, abi2) {
		lightBox.style.display = "block";
		var abiMessage = document.getElementById("abilityChoiceMessage");
		var choiceOne = document.getElementById("abilityChoice1");
		var choiceTwo = document.getElementById("abilityChoice2");
		abiMessage.innerHTML = "The " + race + " race get a bonus to their " + abi0 + ". You also get to choose another bonus to either " + abi1 + " or " + abi2 + ". Choose wisely, " + sayName + ".";
		choiceOne.value = abi1;
		choiceTwo.value = abi2;
	}
	
	if (userRace === "Changeling") {
		setAttributes("Charisma", "Dexterity", "Intelligence");
	} else if (userRace === "Deva") {
		setAttributes("Wisdom", "Intelligence", "Charisma");
	} else if (userRace === "Dragonborn") {
		setAttributes("Charisma", "Strength", "Constitution");
	} else if (userRace === "Drow") {
		setAttributes("Dexterity", "Wisdom", "Charisma");
	} else if (userRace === "Dwarf") {
		setAttributes("Constitution", "Strength", "Wisdom");
	} else if (userRace === "Eladrin") {
		setAttributes("Intelligence", "Dexterity", "Charisma");
	} else if (userRace === "Elf") {
		setAttributes("Dexterity", "Intelligence", "Wisdom");
	} else if (userRace === "Genasi") {
		setAttributes("Intelligence", "Strength", "Constitution");
	} else if (userRace === "Githzerai") {
		setAttributes("Wisdom", "Dexterity", "Intelligence");
	} else if (userRace === "Gnome") {
		setAttributes("Intelligence", "Dexterity", "Charisma");
	} else if (userRace === "Goliath") {
		setAttributes("Strength", "Constitution", "Wisdom");
	} else if (userRace === "Half-Elf") {
		setAttributes("Constitution", "Wisdom", "Charisma");
	} else if (userRace === "Half-Orc") {
		setAttributes("Dexterity", "Strength", "Constitution");
	} else if (userRace === "Halfling") {
		setAttributes("Dexterity", "Constitution", "Charisma");
	} else if (userRace === "Kalashtar") {
		setAttributes("Charisma", "Intelligence", "Wisdom");
	} else if (userRace === "Minotaur") {
		setAttributes("Strength", "Constitution", "Wisdom");
	} else if (userRace === "Mul") {
		setAttributes("Constitution", "Strength", "Wisdom");
	} else if (userRace === "Revenant") {
		setAttributes("Dexterity", "Charisma", "Constitution");
	} else if (userRace === "Shadar-Kai") {
		setAttributes("Dexterity", "Intelligence", "Wisdom");
	} else if (userRace === "Shardmind") {
		setAttributes("Intelligence", "Wisdom", "Charisma");
	} else if (userRace === "Thri-Kreen") {
		setAttributes("Dexterity", "Strength", "Wisdom");
	} else if (userRace === "Tiefling") {
		setAttributes("Charisma", "Constitution", "Intelligence");
	} else if (userRace === "Warforged") {
		setAttributes("Constitution", "Strength", "Intelligence");
	} else if (userRace === "Wilden") {
		setAttributes("Wisdom", "Dexterity", "Constitution");
	}
	
	function setAttributes(att0, att1, att2) {
		attribute0 = att0;
		attribute1 = att1;
		attribute2 = att2;
		modAtt0 = "mod" + attribute0.substring(0,3);
		userAtt0 = "user" + attribute0.substring(0,3);
		attModMessage0 = attribute0.substring(0,3) +"ModMessage";
		modAtt1 = "mod" + attribute1.substring(0,3);
		userAtt1 = "user" + attribute1.substring(0,3);
		attModMessage1 = attribute1.substring(0,3) +"ModMessage";
		modAtt2 = "mod" + attribute2.substring(0,3);
		userAtt2 = "user" + attribute2.substring(0,3);
		attModMessage2 = attribute2.substring(0,3) +"ModMessage";
		
		window[attModMessage0].innerHTML = "+2";
		
		if (chosenAbility) {
			lightBox.style.display = "none";
			resetModifyButton.style.display = "block";
			if (chosenAbility === attribute1) {
				window[attModMessage1].innerHTML = "+2";
			} else if (chosenAbility === attribute2) {
				window[attModMessage2].innerHTML = "+2";
			}
		} else {
			pickAbility(userRace, attribute0, attribute1, attribute2);
		}
	}
	if (modAtt0 === "modStr") {
		modStr = Number(userStr) + 2;
	} else if (modAtt0 === "modCon") {
		modCon = Number(userCon) + 2;
	} else if (modAtt0 === "modDex") {
		modDex = Number(userDex) + 2;
	} else if (modAtt0 === "modInt") {
		modInt = Number(userInt) + 2;
	} else if (modAtt0 === "modWis") {
		modWis = Number(userWis) + 2;
	} else if (modAtt0 === "modCha") {
		modCha = Number(userCha) + 2;
	}
	if (chosenAbility === "Strength") {
		modStr = Number(userStr) + 2;
	} else if (chosenAbility === "Constitution") {
		modCon = Number(userCon) + 2;
	} else if (chosenAbility === "Dexterity") {
		modDex = Number(userDex) + 2;
	} else if (chosenAbility === "Intelligence") {
		modInt = Number(userInt) + 2;
	} else if (chosenAbility === "Wisdom") {
		modWis = Number(userWis) + 2;
	} else if (chosenAbility === "Charisma") {
		modCha = Number(userCha) + 2;
	}
	shifterType = undefined;
	
	generateToon();
}

/* -- Human Race -- 
function checkForHuman() {
	if (userRace === "Human") {
		
	} else if (userRace === "Shifter") {
		checkForShifter();
	} else {
		abilityModify();
	};
}*/

/* -- Shifter Race -- */
function checkForShifter() {
	if (userRace === "Shifter") {
		shifterBox.style.display = "block";
		shifterMessage.innerHTML = "The Shifter race gets a +2 bonus to Wisdom. If you choose to be a Longtooth Shifter you also get a +2 bonus to Strength. Or you can choose to be a Razerclaw Shifter and get a +2 bonus to Dexterity. Choose wisely, " + sayName + ".";
		modStr = Number(userStr);
		modCon = Number(userCon);
		modDex = Number(userDex);
		modInt = Number(userInt);
		modWis = Number(userWis) + 2;
		modCha = Number(userCha);
		WisModMessage.innerHTML = "+2";
	//} else if (userRace === "Human") {
		//checkForHuman();
	} else {
		abilityModify();
	}
}
function shifterChoice(userInput) {
	if (userInput === "Longtooth") {
		modStr = Number(userStr) + 2;
		StrModMessage.innerHTML = "+2";
		shifterType = "Longtooth";
	} else if (userInput === "Razerclaw") {
		modDex = Number(userDex) + 2;
		DexModMessage.innerHTML = "+2";
		shifterType = "Razerclaw";
	}
	shifterBox.style.display = "none";
	resetShifterButton.style.display = "block";
	
	generateToon();
}


// Resets ===============================================================

/*function resetStats() {
	userStr = 10;
	var strNumber = document.getElementById(("strNumber"));
	strNumber.innerHTML = userStr;
	userCon = 10;
	var conNumber = document.getElementById(("conNumber"));
	conNumber.innerHTML = userCon;
	userDex = 10;
	var dexNumber = document.getElementById(("dexNumber"));
	dexNumber.innerHTML = userDex;
	userInt = 10;
	var intNumber = document.getElementById(("intNumber"));
	intNumber.innerHTML = userInt;
	userWis = 10;
	var wisNumber = document.getElementById(("wisNumber"));
	wisNumber.innerHTML = userWis;
	userCha = 10;
	var chaNumber = document.getElementById(("chaNumber"));
	chaNumber.innerHTML = userCha;
	userRP = 22;
	var remainingPoints = document.getElementById(("remainingPoints"));
	remainingPoints.innerHTML = userRP;
}*/

function resetModify() {
	resetModifyButton.style.display = "none";
	chosenAbility = undefined;
	abilityModify();
}

/* -- Shifter Race -- */
function resetShifter() {
	resetShifterButton.style.display = "none";
	StrModMessage.innerHTML = "";
	DexModMessage.innerHTML = "";
	checkForShifter();
}

// Generate Character Sheet ==============================================

function generateToon() {
	newToon = new myCharacter(userName, userRace, shifterType, userClass, userRole, userGender, modStr, modCon, modDex, modInt, modWis, modCha, userRP);
	console.log(newToon);
}


