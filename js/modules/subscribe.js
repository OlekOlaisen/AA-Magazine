export default function Subscribe() {
	
	const subscribeButtonContainer = document.querySelector('.subscribe');
	const subscribeButton = document.querySelector('.subscribe__button')
	
	if (window.innerWidth > 1100) {
		subscribeButton.innerHTML = 'Subscribe for architecture, art, and more <span class="subscribe__close-button">X</span>';
  	}

	const closeButton = document.querySelector('.subscribe__close-button');

	closeButton.addEventListener('click', function() {
		subscribeButtonContainer.style.display = "none";
	});
}
