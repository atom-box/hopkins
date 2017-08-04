function silencer( stringy, badChar){
	var ns = "";
	for (var i = 0; i < strCngy.length; i++) {
		if ( stringy[i] != badChar ){
			ns += stringy[i];
		}
	return ns;
	}
}
var x = prompt("Enter a word.");		
var y = prompt("And now, enter an integer.");
console.log("The " + y + "th letter in " + x + " is " + x[y-1]);
document.write("The " + y + "th letter in " + x + " is " + x[y-1]);
