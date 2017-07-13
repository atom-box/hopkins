/*  By Evan Genest Twitter@mistergenest
*/


// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//

function doIt (){
  var names =  ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var name = "";
  for (n in names) {
    name = names[n];
    if ( 'J' == name.charAt(0) || 'j' == name.charAt(0) ) {

     byeSpeaker.speak( name );
    } else {

      helloSpeaker.speak( name );    
    }
  }
}

doIt();
