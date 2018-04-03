(function() {
"use strict";
	
document.getElementById("cart-hplus").addEventListener("submit", estimateTotal);

function estimateTotal(event) {
  event.preventDefault();

	if (document.getElementById('s-state') === "CA") {
		console.log('Please enter a state');
	}
}

	
})();
/* http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

*/