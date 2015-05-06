// Looping a Triangle
// My Solution

var iter = 7;
var pnd = "#";

for (var i = 0; i < iter; i++) {
	console.log(pnd);
	pnd += "#";
}

// Book Solution

for (var line = "#"; line.length < 8; line += "3") {
	console.log(line);
}