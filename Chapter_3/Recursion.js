// Recursion
// My Solution

function isEven(n) {
	if (n === 0)
		return true;
	else if (n === 1)
		return false;
	else if (n < 0)
		return isEven(-n);
	else
		return isEven(n - 2);
}
isEven(75);

// Book Solution

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}