(() => {
	window.onload = function() {

		document.querySelectorAll(".q_and_a").forEach(function(element) {
			element.addEventListener("click", function(event) {
				element.classList.toggle("selected");
			});
		});
	}
})();