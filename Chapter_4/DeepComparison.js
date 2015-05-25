// Deep Comparison
// My Solution

function deepEqual(a, b) {
	
	if (typeof a === typeof b)
		return true;
	else if (a === b)
		return true;
	else
		return false;
}

// Book Solution
