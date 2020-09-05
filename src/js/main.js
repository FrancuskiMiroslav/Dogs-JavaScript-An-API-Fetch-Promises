$(document).ready(function () {
	console.log('main.js file loaded');
});

window.addEventListener('DOMContentLoaded', function () {
	let dogBreedsSelect = document.getElementById('dog-breeds-select');
	const nextBtn = document.getElementById('next-btn');

	fetch('https://dog.ceo/api/breeds/list/all')
		.then((res) => res.json())
		.then((data) => {
			let breedsArray = Object.keys(data.message);

			dogBreedsSelect.innerHTML = `
        <option>Choose a dog breed</option>
        ${breedsArray
					.map((breed) => {
						return `
          <option class='breed'>${breed}</option>
          `;
					})
					.join('')}
		`;

			dogBreedsSelect.addEventListener('change', (e) => {
				if (e.target.value != 'Choose a dog breed') {
					fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
						.then((res) => res.json())
						.then((data) => {
							let randomImg =
								data.message[Math.floor(Math.random() * data.message.length)];
							let image = document.getElementById('dog-img');

							image.setAttribute('src', `${randomImg}`);
							image.setAttribute('class', 'dog__image');

							nextBtn.addEventListener('click', (e) => {
								console.log(e.target.previousElementSibling);

								let activeImg = e.target.previousElementSibling;
								let newRandomImg =
									data.message[Math.floor(Math.random() * data.message.length)];

								if (e) {
									activeImg.setAttribute('src', `${newRandomImg}`);
								}
							});
						});
				}
			});
		});
});
