(function() {
"use strict";
	
document.getElementById("cart-hplus").addEventListener("submit", estimateTotal);

function estimateTotal(event) {
  event.preventDefault();

  var state = document.getElementById("s-state");

  if (state.value === "") {
		window.alert("Please enter a state");
		
		state.focus();
	}
}

	
})();
/* http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

*/