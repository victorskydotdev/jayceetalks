// variables
const navMenu = document.querySelectorAll('.menu');
const hamburgerBtn = document.querySelector('.hamburger');
const menuCloseBtn = document.querySelector('.close-btn');

const navbar = document.querySelector('.header-nav');

const masthead = document.getElementById('animate-masthead');
const subHeading = document.getElementById('animate-subhead');
const mastheadBtn = document.getElementById('animate-btn');
const animateImg = document.getElementById('animate-img');
// const reviewAnimation = document.getElementById('review-animation');

document.addEventListener('DOMContentLoaded', function () {
	// Add the class to trigger the animation
	masthead.classList.add('animate-fade-in');
	subHeading.classList.add('animate-fade-in2');
	mastheadBtn.classList.add('animate-fade-in3');

	// adding review animation class to review slider
	// reviewAnimation.classList.add('sliderAnimation');

	animateImg.classList.add('animate-img');
});

const changeNavShadow = () => {
	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY;

		if (scrollY > 50) {
			navbar.classList.add('box-shadow');
		} else {
			navbar.classList.remove('box-shadow');
		}
	});
};

const activateMenu = () => {
	hamburgerBtn.addEventListener('click', () => {
		navMenu.forEach((clickItem) => {
			clickItem.style.display = 'block';

			menuCloseBtn.style.display = 'flex';
			hamburgerBtn.style.display = 'none';
		});
	});

	menuCloseBtn.addEventListener('click', () => {
		navMenu.forEach((clickItem) => {
			clickItem.style.display = 'none';

			menuCloseBtn.style.display = 'none';
			hamburgerBtn.style.display = 'block';
		});
	});
};

// Call the functions
changeNavShadow();
activateMenu();

const ourWorkBtn = document.querySelectorAll('.our-work');
const linkModalOne = document.querySelector('.links-modal');
const linkModalTwo = document.querySelector('.links-modal2');
const linkModalClostBtn = document.querySelectorAll('.link-modal-close');

for (let i = 0; i < ourWorkBtn.length; i++) {
	ourWorkBtn[0].addEventListener('click', () => {
		if (linkModalOne) {
			linkModalOne.style.display = 'block';
			// linkModalOne.style.justifyContent = 'center';
		} else console.log('link modal one,  not in the DOM');
	});

	ourWorkBtn[1].addEventListener('click', () => {
		if (linkModalTwo) {
			linkModalTwo.style.display = 'block';
		} else console.log('Link modal two not in the DOM');
	});
}

for (let j = 0; j < linkModalClostBtn.length; j++) {
	if (linkModalOne) {
		linkModalClostBtn[0].addEventListener('click', () => {
			linkModalOne.style.display = 'none';
			console.log('Modal 1 CLicked');
		});
	}

	if (linkModalTwo) {
		linkModalClostBtn[1].addEventListener('click', () => {
			linkModalTwo.style.display = 'none';
			console.log('Modal 2 CLicked');
		});
	}
}
