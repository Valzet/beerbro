$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");


});


const slides = document.querySelectorAll(".menu__item");
const button = document.querySelectorAll(".menu__button");

let current = 0;
let prev = 3;
let next = 1;

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
	
}

console.log(button)

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < 3 ? gotoNum(current + 1) : gotoNum(0);
const gotoNum = number => {
	current = number;
	prev = current - 1;
	next = current + 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("menu__item_type_active");
		slides[i].classList.remove("menu__item_type_next");
		slides[i].classList.remove("menu__item_type_prev");
	}
	if (next == 3) {
		next = 0;
	}
	if (prev == -1) {
		prev = 3;
	}

	slides[current].classList.add("menu__item_type_active");
	slides[next].classList.add("menu__item_type_next");
	slides[prev].classList.add("reviews__item_type_prev");
}
