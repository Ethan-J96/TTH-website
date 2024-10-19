(() => {
	window.onload = function() {

		document.querySelectorAll(".q_and_a.col").forEach(function(element) {
			element.addEventListener("click", function(event) {
				element.classList.toggle("selected");
				console.log("Q&A Clicked")
			});
		});
	}
})();