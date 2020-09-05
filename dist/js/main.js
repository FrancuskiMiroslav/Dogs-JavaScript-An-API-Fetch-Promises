/*! project-name v0.0.1 | (c) 2020 Francuski Miroslav | MIT License | http://link-to-your-git-repo.com */
$(document).ready((function () {
	console.log('main.js file loaded');
}));

window.addEventListener('DOMContentLoaded', (function () {
	fetch('https://dog.ceo/api/breeds/list/all')
		.then((res) => res.json())
		.then((data) => {
			const listOfBreeds = Object.keys(data.message);

			console.log(listOfBreeds);
		});
}));
