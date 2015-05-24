// Bean Counting
// My Solution

function countBs(str) {
	var count = 0;
	for(var i = 0; i < str.length; i++){
		 if (str[i].charAt() === "B")
		 	count++;
	}
	return count;
}
countBs("BBCK");

function countChar(str,char) {
	var count = 0;
	for(var i = 0; i < str.length; i++) {
		if (str[i].charAt() === char)
			count++;
	}
	return count;
}
countChar("kakkerlak", "k");

// Book Solution

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}