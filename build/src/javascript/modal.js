const container = document.querySelector('.modal-container');
const clickBtns = document.querySelectorAll('.learn-more-btn');
const modalClose = document.querySelector('.modal-close-btn');

const openModal = () => {
	clickBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			container.classList.add('show-modal');

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

					// const playContext = 'Pause Audio';
					// playButton.textContent = playContext;

					// audioPlayer.src = audioPath;

					// // Play the audio
					// audioPlayer.play();
				});
			});
		});
	});
};

openModal();

modalClose.addEventListener('click', () => {
	container.classList.remove('show-modal');
});
