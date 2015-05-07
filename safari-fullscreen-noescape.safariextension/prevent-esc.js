(function (window) {
	const KEYCODE_ESCAPE = 27;

	window.addEventListener('keypress', function suppressEscape(event) {
		if (event.keyCode === KEYCODE_ESCAPE) {
			event.preventDefault();
		}
	});
})(window);