// Reverse an Array
// My Solution

function reverseArray(array) {
    var newArray = [];
	for(var i = array.length - 1; i >= 0; i--) {
		newArray.push(array[i]);
	}
	return newArray;
}


function reverseArrayInPlace(array) {
	var lower = 0;
	var upper = 0;
	var half = Math.floor(array.length / 2);
	for(var i = 0; i < half; i++) {
		lower = array[i];
		upper = array[array.length - 1 - i];
		array[i] = upper;
		array[array.length - 1 - i] = lower;
	}
	return array;
}

reverseArray(["A", "B", "C"]);
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

// Book Solution

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}