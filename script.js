(function() {
"use strict";

var state = document.getElementById("s-state");

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("cart-hplus").addEventListener("submit", estimateTotal);
	
	var btnEstimate = document.getElementById("btn-estimate");
	
	btnEstimate.disabled = true;
	
	state.addEventListener("change", function(){
		if (state.value === "") {
			btnEstimate.disabled = true;
  	} else {
	  	btnEstimate.disabled = false;
 	 }
	});
});

function estimateTotal(event) {
  event.preventDefault();

  if (state.value === "") {
		window.alert("Please enter a state");
		
		state.focus();
	}
}

	
})();
/* http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

*/