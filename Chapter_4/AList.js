// A List
// My Solution

function arrayToList(array) {
	var list = {};
	for(var i = array.length - 1; i >= 0; i--) {
		list = { value: array[i], rest: list}
	}
	return list;
}

function listToArray(list) {
	var array = [];
	for(var node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}

function prepend(value, rest) {
	return {value: value, rest: rest};
}

function nth(list, place) {
    if (!list)
        return undefined;
    else if (place === 0)
        return list.value;
    else
	    return nth(list.rest, place - 1);
}

// arrayToList([10, 20]);
// listToArray(arrayToList([10, 20, 30]));
// prepend(10, prepend(20, null));
// nth(arrayToList([10, 20, 30]), 1);

// Book Solution

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}