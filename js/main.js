/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function () {
	console.log('main.js file loaded');
}));

window.addEventListener('DOMContentLoaded', (function () {
	let dogContainer = document.getElementById('dog-container');
	let dogBreedsSelect = document.getElementById('dog-breeds-select');

	fetch('https://dog.ceo/api/breeds/list/all')
		.then((res) => res.json())
		.then((data) => {
			let breedsArray = Object.keys(data.message);

			dogBreedsSelect.innerHTML = `
        <option>Choose a dog breed</option>
        ${breedsArray
					.map((breed) => {
						return `
          <option>${breed}</option>
          `;
					})
					.join('')}
        `;

			dogBreedsSelect.addEventListener('change', (e) => {
				console.log(e.target.value);
			});
		});
}));
