(function() {
"use strict";
	
document.getElementbyId("cart-hplus").addEventListener("submit", estimateTotal);

estimateTotal(event) {
  event.preventDefault();

	console.log("Submit Clicked");
}
	
	
})();
/* http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

*/