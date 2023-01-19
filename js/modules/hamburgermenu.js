export default function Hamburger() {

	// "model"
	// an abstraction of the HTML (view)
	let menuVisible = false;

	let dropdownListVisible = false; 

	// create a reference to the Block (BEM) element
	const menuButton = document.querySelector('.header__menu-button');
	const contentContainer = document.querySelector('.header__menu-button-content');
	
	// check if the "menuButton" exists before attaching an "event-listener"
	// in this case the menuButton on header exists on every page, so the condition will always be true
	if (menuButton ) {
		menuButton.addEventListener('click', handleMenuButtonClick);
	}

	if (contentContainer !== null) {
		menuButton.addEventListener('click', handleMenuButtonContentClick);
	}

	

	// split the "handler-function" into separate functions
	//		you should see at first sight what "clicking the menuButton" does in the code
	//		regardless of the way it's implemented. this is "declarative code".
	//		this means to split the code into more specific functions.
	//		"functions should do one thing and one thing only", clean code
	function handleMenuButtonClick() {
		toggleMenuVisibility();
		renderButton();
	}

	function handleMenuButtonContentClick() {
		toggleMenuDropdown();
		renderDropdown();
	}

	// "methods"
	// the purpose of these methods is to mutate model variables,
	// and nothing else. these methods should not be bothered with how the
	// model is presented to the user, but only what the functionality is
	function toggleMenuVisibility() {
		menuVisible = !menuVisible;
	}

	function toggleMenuDropdown() {
		dropdownListVisible = !dropdownListVisible;
	}

	// "render"
	// this function renders (updates) the needed HTML DOM elements based
	// on the values of the model. this has to be called after the model
	// has been updated and should preferrably be called once per update,
	// and only from the handler function
	function renderButton() {
		if(menuVisible) {
			menuButton.classList.add('header__menu-button--visible');
		} else {
			menuButton.classList.remove('header__menu-button--visible');
		}
	}

	function renderDropdown() {
		if (dropdownListVisible === true) {
			contentContainer.classList.add('header__menu-button-content--visible')
		} else {
			contentContainer.classList.remove('header__menu-button-content--visible')
		}
	}

}