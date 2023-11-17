const container = document.querySelector('.modal-container');
const clickBtns = document.querySelectorAll('.learn-more-btn');
const modalClose = document.querySelector('.modal-close-btn');

// const showModal = () => {
// 	const modalContent = `
//   <div class="modal">
//     <div class="modal-content">
//       <img src="${productData.image}" alt="${productData.name}" />
//       <h2>${productData.name}</h2>
//       <p>${productData.description}</p>
//       <p>Price: $${productData.price.toFixed(2)}</p>
//       <button class="close-modal">Close</button>
//     </div>
//   </div>
//   `;
// };

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

					playButton.textContent = 'Pause Audio';

					// Set the 'src' attribute of the audio player to the selected audio file
					audioPlayer.src = audioPath;

					// Play the audio
					audioPlayer.play();
				});
			});
		});
	});
};

openModal();

modalClose.addEventListener('click', () => {
	container.classList.remove('show-modal');
});
