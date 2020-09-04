// Program to search for a particular character in a string.

var search = prompt("enter the string");
var find = prompt("enter the character");
for (var i = 0; i < search.length; i++) {
    if (search[i] === find) {
        return true;
    }
}
return false;


// Program to convert Minutes Into Seconds
// here we have to provide the minutes value to calculate the output.
function(minutes){
  var seconds = minutes * 60 ;
}


// Program to search for an element in a array of strings.

function searchElement(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

// Program to reverse the array

function reverse_string() {
	// Original Array
	var arr = ['alok', 'Student','Computer', 'honest'];
	document.write(arr);

	// Reversed array
	var new_arr = arr.reverse();
	document.write("<br>");
	document.write(new_arr);
}

// Program to display only elements containing 'a' in them from a Array()
var c = ['alok', 'Student','Computer', 'honest','car'];
var d = [];
// extract the words form array c

for(var i =0;i<c.length;i++){
var con = c[i];
}
// now check 'a ' in word
for(var j=0;j<con.length;j++){
  if(con[j]=='a'){
    d.push(" + con + ");
  }
}
console.log(d);
