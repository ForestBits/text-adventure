function Character(name)
{
	this.name = name;
}

Character.prototype.say = function(arg1, arg2, arg3)
{
	if (arg1 instanceof Dialogue)
		this._sayDialogue(arg1, arg2);
	else if (arg1 instanceof String || typeof arg1 == "string")
		this._sayText(arg1, arg2, arg3);
};

Character.prototype._sayText = function(text, colors, delay)
{
	if (delay == undefined)
		delay = dialogueDelay;

	print(this.name + ": " + text, colors, delay);
};

Character.prototype._sayDialogue = function(dialogue, delay)
{
	activeDialogue = dialogue;

	print(this.name + ": " + dialogue.text, dialogue.colors, delay);

	var str = "Options: ";

	for (var i = 0; i < dialogue.optionStrings.length; ++i)
		str = str + dialogue.optionStrings[i] + ", ";

	str = str.substr(0, str.length - 2) + ".";

	print(str, 2000);
}