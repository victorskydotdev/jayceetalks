// import { alertMessage } from './js_scripts/variables';
// variables
const navMenu = document.querySelectorAll('.menu');
const hamburgerBtn = document.querySelector('.hamburger');
const menuCloseBtn = document.querySelector('.close-btn');

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

const alertMessage =
	'the variable script file is connecting to the main js file and reaching the DOM';

const showMessage = () => {
	alert(alertMessage);
};

const clickBtns = document.querySelectorAll('.learn-more-btn');

const triggerAlert = () => {
	clickBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			showMessage();
		});
	});
};

// Call the functions
activateMenu();
triggerAlert();
