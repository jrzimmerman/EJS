// Sum of a Range
// My Solution
function range(start,end,step){
	if(step === undefined){
		    step = 1;
		}
	var arr = [];
	if(start<end) {
    	for (start; start <= end; start += step) {
    		arr.push(start);
    	}
	} else {
	    for(start;start >= end; start += step) {
	        arr.push(start);
	    }
	}
	
	return arr;
}

function sum(arr) {
    var total = 0;
    for(var i = 0; i < arr.length;i++) {
        total += arr[i];
    }
    return total;
}

sum(range(1,10));
range(10,1,-1);

// Book Solution

function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}