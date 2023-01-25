export default function Subscribe() {
	
	const subscribeButtonContainer = document.querySelector('.subscribe');
	const closeButton = document.querySelector('.subscribe__close-button');

	closeButton.addEventListener('click', function() {
		subscribeButtonContainer.style.display = "none";
	});
}
