export default function Subscribe() {
	
	const subscribeButtonContainer = document.querySelector('.subscribe');
	const subscribeButton = document.querySelector('.subscribe__button')
	
	window.addEventListener('resize', renderSubscribeButton);

	function renderSubscribeButton() {
		if (window.innerWidth > 768) {
			subscribeButton.innerHTML = 'Subscribe for architecture, art, and more <span class="subscribe__close-button"></span>';
		} else {
			subscribeButton.innerHTML = 'Subscribe <span class="subscribe__close-button"></span>';
		}
	};
	
	renderSubscribeButton();

	const closeButton = document.querySelector('.subscribe__close-button');

	closeButton.addEventListener('click', function() {
		subscribeButtonContainer.style.display = "none";
	});
}
