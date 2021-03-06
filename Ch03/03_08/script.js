(function() {
"use strict";

var state = document.getElementById('s-state');

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);
	
	var btnEstimate = document.getElementById('btn-estimate');
	
	btnEstimate.disabled = true;
	
	state.addEventListener('change', function() {
	
		if (state.value === '') {
			btnEstimate.disabled = true;
		} else {
			btnEstimate.disabled = false;
		}
	
	});
});

function estimateTotal(event) {
	event.preventDefault();
	
	if (state.value === '') {
		alert('Please choose your shipping state.');
		
		state.focus();
	}

	var itemBball = document.getElementById('txt-q-bball').value,
		itemJersey = document.getElementById('txt-q-jersey').value,
		itemPower = document.getElementById('txt-q-power').value,
		shippingState = state.value,
		shippingMethod = document.querySelector('[name=r_method]:checked').value;

		console.log(itemBball, itemJersey, itemPower, shippingState, shippingMethod);
	}

})();