function Dialogue(text, colors, options, onChoice)
{
	this.text = text;
	this.colors = colors;
	this.options = options;
	this.onChoice = onChoice;
	this.optionStrings = [];

	for (var i = 0; i < options.length; ++i)
		this.optionStrings.push(options[i].text);
}

Dialogue.prototype.print = function(delay)
{
	if (this.text.length > 0)	
		print(this.text, this.colors, delay);

	var str = "Options: ";

	for (var i = 0; i < this.optionStrings.length; ++i)
		str = str + this.optionStrings[i] + ", ";

	str = str.substr(0, str.length - 2) + ".";

	print(str, 2000);

	activeDialogue = this;
};

function ChatOption(text, returnValue)
{
	this.text = text;
	this.returnValue = returnValue;
}