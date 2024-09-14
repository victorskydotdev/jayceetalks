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
	if (masthead && animateImg) {
		// Add the class to trigger the animation
		masthead.classList.add('animate-fade-in');
		subHeading.classList.add('animate-fade-in2');
		mastheadBtn.classList.add('animate-fade-in3');

		// adding review animation class to review slider
		// reviewAnimation.classList.add('sliderAnimation');

		animateImg.classList.add('animate-img');
	}
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

const accNumPopup = document.querySelector('.account-num-popup');
const accPopCloseBtn = document.querySelector('.account-close-btn');
const accContentWrap = document.querySelector('.account-content');

const accNumContent = `
	<div class="text-wrap">
		<p class="bank-name"> <i class="fa-solid fa-building-columns"></i>
			Pay into Access/Diamond Bank (0079249187)</p>
		<p class="account-name"><i class="fa-solid fa-user"></i> Opara Jude</p>
		<p class="amount"><i class="fa-solid fa-money-bill-wave"></i> N15,000 (Early Bird)</p>
		<p class="amount2"><i class="fa-solid fa-clock"></i> N30,000 (Late Payment)</p>

		<a class="confirm-payment-btn" href="https://wa.me/+2347064932563">Click here to confirm payment</a>
	</div>
`;

function showAccNum() {
	if (accNumPopup) {
		const accBtn = document
			.querySelector('.account-btn')
			.addEventListener('click', () => {
				accNumPopup.style.display = 'flex';
				accContentWrap.innerHTML += accNumContent;
			});

		accPopCloseBtn.addEventListener('click', () => {
			accNumPopup.style.display = 'none';

			// removing the content following the closing of the modal
			accContentWrap.innerHTML = '';
		});
	}
}

showAccNum();

// console.log(accContentWrap, accNumPopup, accPopCloseBtn);
