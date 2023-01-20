export default function Header() {

window.onscroll = function() {stickyNavigation()};

let header = document.querySelector(".header__content");
let content = document.querySelector(".header__content--sticky");

let sticky = header.offsetTop;

function stickyNavigation() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("header__content--sticky")
	 
  } else {
    header.classList.remove("header__content--sticky");
  }
}


}