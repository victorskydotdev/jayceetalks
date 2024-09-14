const container = document.querySelectorAll('.modal-container');

const eventModal = document.getElementById('event-hosting');
const eventBtn = document.getElementById('event-btn');
const eventCloseBtn = document.querySelector('.video-close-button');

const audioModal = document.getElementById('audio-modal');
const voBtn = document.getElementById('vo-btn');
const audioCloseBtn = document.querySelector('.audio-close-btn');

const brandModal = document.getElementById('brand-influence');
const brandBtn = document.getElementById('brand-inf-btn');
const brandCloseBtn = document.getElementById('brand-close-btn');

const openModal = () => {
	if (eventBtn) {
		eventBtn.addEventListener('click', () => {
			eventModal.classList.add('show-modal');

			eventCloseBtn.addEventListener('click', () => {
				eventModal.classList.remove('show-modal');
			});
		});
	}

	if (voBtn) {
		voBtn.addEventListener('click', () => {
			audioModal.classList.add('show-modal');

			audioCloseBtn.addEventListener('click', () => {
				audioModal.classList.remove('show-modal');
			});

			const audioPlayer = document.getElementById('audioPlayer');

			const audioOptions = document.querySelectorAll('.audio-option');

			audioOptions.forEach(function (playButton) {
				playButton.addEventListener('click', function () {
					// Get the path to the audio file from the 'data-audio' attribute
					const audioPath = playButton.getAttribute('data-audio');

					// You may want to update the play button text/content accordingly
					const playContext = audioPlayer.paused ? 'Play Audio' : 'Pause Audio';
					playButton.textContent = playContext;

					// Toggle play/pause
					if (audioPlayer.src === audioPath && !audioPlayer.paused) {
						audioPlayer.pause();
					} else {
						audioPlayer.src = audioPath;
						audioPlayer.play();
					}
				});
			});
		});
	}

	if (brandBtn) {
		brandBtn.addEventListener('click', () => {
			brandModal.classList.add('show-modal');

			if (brandCloseBtn) {
				brandCloseBtn.addEventListener('click', () => {
					brandModal.classList.remove('show-modal');
				});
			}
		});
	}
};

openModal();

// modalClose.forEach((closeBtn) => {
// 	closeBtn.addEventListener('click', () => {
// 		console.log('close button clicked');
// 	});
// });
