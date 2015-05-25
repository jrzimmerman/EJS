// Deep Comparison
// My Solution

function deepEqual(a, b) {
	if (a === b)
		return true;
	else if ( a === null || typeof a != "object" || 
			  b === null || typeof b != "object")
		return false;
	var propA = 0, propB = 0;

	for ( var prop in a ) {
		propA += 1;
	}

	for ( var prop in b) {
		propB += 1;

		if( !(prop in a) || !deepEqual(a[prop],b[prop]))
			return false;
	}
	
	return propA == propB;
}

var obj = {here: {is: "an"}, object: 2};
// deepEqual(obj, obj);
// deepEqual(obj, {here: 1, object: 2});
deepEqual(obj, {here: {is: "an"}, object: 2});

// Book Solution

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}