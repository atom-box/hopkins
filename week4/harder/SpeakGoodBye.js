/*	By Evan Genest  Twitter@mistergenest
*/
(function (window){
	var speakWord = "Good Bye";
	var byeSpeaker = {};
	byeSpeaker.speak = function (name) {
		if ( name == ''){ name = 'dodo'}
		console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);
// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
