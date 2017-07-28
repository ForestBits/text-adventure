function Room()
{

}

Room.prototype.run = function()
{
	activeRoom = this;

	this.action();
}

function TestRoom()
{

}

inheritsFrom(TestRoom, Room);

TestRoom.prototype.action = function()
{

};


function BeeRoom()
{
	this.bad = randomInt(2) == 0;
}

inheritsFrom(BeeRoom, Room);

BeeRoom.prototype.action = function()
{
	print("You see something in the corner of the room. It appears `gold` and shiny.", [Color.gold, Color.white]);

	beeRoomDialogue.print();
};

function opFunction(operation, arg1, arg2)
{
	switch (operation)
	{
		case 0:
			return arg1 + arg2;

		case 1:
			return arg1 - arg2;

		case 2:
			return arg1 * arg2;

		case 3:
			return Math.floor(arg1/arg2);
	}
}

function PatternPuzzleRoom()
{
	this.choices = [];

	var type = randomInt(3);

	if (type == 0)
	{
		var baseValue = randomInt(98) + 2;

		var changeValue = randomInt(9) + 1;

		var operation = randomInt(3);

		var vals = [];

		vals.push(opFunction(operation, baseValue, changeValue));

		for (var i = 1; i < 4; ++i)
		{
			if (operation == 0)
				vals[i] = opFunction(operation, vals[i - 1], changeValue);
		}

		//finish and stuff
	}
}

inheritsFrom(PatternPuzzleRoom, Room);

function SandTrapRoom()
{

}

inheritsFrom(SandTrapRoom, Room);

SandTrapRoom.prototype.action = function()
{
	print("As you walk into the room, you hear a click.");
	print("There is a dull rushing sound in the distance. It is getting louder.");
	print("A section of the wall opened, and `sand` began pouring in!", [Color.gold, Color.white]);
	print("There must be a way out... the sand is rising.");
	print("You scan the walls, and notice three levers on one wall. Above them is written `\"More up than down, and symmetry to spare\"`.", [textColor, Color.white]);

	sandRoomDialogue.print();
};

function RandomWizardRoom()
{

}

inheritsFrom(RandomWizardRoom, Room);

RandomWizardRoom.prototype.action = function()
{
	print("The room smells of... perfume?");
	print("You see an old man sitting in the corner of the room at a table. On it is a `crystal ball`.", [Color.cyan, Color.white]);

	randomWizard.say("What is that `nauseating` smell?", [Color.brown, Color.white]);
	randomWizard.say("I think I am going to die, it is so terrible.");

	print("The wizard looks up, and notices you.");

	randomWizard.say("I see...");
	randomWizard.say("What brings you here, smelly stranger? Wait, no, don't tell me, I can read your mind.");

	print("You walk over to the table. The wizard is rubbing the ball.");

	randomWizard.say("C'mon baby, please work... yes, something is coming in...");
	randomWizard.say("The ball says your name is `" + playerName + "`. Is that so?", [emphasisColor, Color.white]);

	wizardDialogue1.print();
};

function BoulderRoom()
{

}

inheritsFrom(BoulderRoom, Room);

BoulderRoom.prototype.action = function()
{
	print("You appear to be in a long hallway. It is slanted upward.");
	print("You begin walking up the ramp.");
	print("A `boulder` dropped from the ceiling at the end of the ramp!", [Color.tan, Color.white]);

	boulderRoomDialogue.print();
};

function HistoryRoom()
{

}

inheritsFrom(HistoryRoom, Room);

HistoryRoom.prototype.action = function()
{
	print("A man in a suit is standing on a stage with a microphone!");

	historyGuy.say("Put your hands together for the next contestant folks! Come on up, `" + playerName + "`.", [emphasisColor, Color.white]);

	print("The man beckons you onstage.");

	historyGuy.say("Who is ready for another round of right or dead?");

	print("Clapping sounds emit from someplace.");

	historyGuy.say("Your topic is... history! Here is your question.");

	historyGuy.say("In what year was the `Panama Canal` first opened?", [emphasisColor, Color.white]);

	historyRoomDialogue.print();
};

function MirrorRoom()
{

}

inheritsFrom(MirrorRoom, Room);

MirrorRoom.prototype.action = function()
{
	print("There appears to be a `magic mirror`... on the floor.", [Color.purple, Color.white]);
	print("You say \"Mirror mirror on the floor, where, oh where, is the door?\"");

	mirror.say("What? You see a magic mirror, and it just has to do your bidding, is that it?");
	mirror.say("You know what? I am tired of being a magic mirror. You and everybody before you show no respect.");
	mirror.say("I should quit right now, I really should.")
	mirror.say("I will give you one chance. Name me one of the seven dwarfs, and I shall grant you passage.");

	waitingFreeInput = true;

	freeInputField = "dwarf";
};

function MontyHallRoom()
{

}

inheritsFrom(MontyHallRoom, Room);

MontyHallRoom.prototype.action = function()
{
	this.goodDoor = randomInt(3) + 1;

	print("You see Monty Hall standing by three doors. The man, not the hallway.");

	monty.say("Welcome to... something... with doors.");
	monty.say("So here is how it works. Each door has something behind it.");
	monty.say("Two of these doors will kill you, somehow. The other one leads out of here.");
	monty.say("What door do you want?");

	montyHallRoomDialogue.print(500);
};