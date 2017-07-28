function Color(red, green, blue)
{
	this.red = red;
	this.green = green;
	this.blue = blue;
}

Color.prototype.toCSSString = function()
{
	return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
}

Color.addColor = function(name)
{
	var can = Color._canvas;

	can.fillStyle = name;

	can.fillRect(0, 0, 1, 1);

	var data = can.getImageData(0, 0, 1, 1).data;

	var color = new Color(data[0], data[1], data[2]);
	
	Color[name] = color;
};

Color._canvasElement = document.createElement("canvas");
Color._canvasElement.width = 1;
Color._canvasElement.height = 1;

Color._canvas = Color._canvasElement.getContext("2d");

Color.red = new Color(255, 0, 0);
Color.green = new Color(0, 255, 0);
Color.blue = new Color(0, 0, 255);
Color.white = new Color(255, 255, 255);