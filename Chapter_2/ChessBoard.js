// Chess Board
// My Solution
function board(size) {
  var chessboard = "";
  var sum = 0;
  for(var i = 1; i <= size; i++) {
    var row = "";
    for(var j = 1; j <= size; j++) {
      sum = i + j;
      if(sum % 2 === 0) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row + "\n");
  }
}
board(10);

// Book Solution

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
	for (var x = 0; x < size; x++) {
		if (( x + y) % 2 == 0)
			board += " ";
		else
			board += "#";
	}
	board += "\n";
}

console.log(board);