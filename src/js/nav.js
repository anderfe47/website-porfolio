function loadNav(currentPage) {

	fetch('/src/html/nav.html')
		.then(response => response.text())
		.then(html => {

			const temp = document.createElement('div');
			temp.innerHTML = html;

			const template = temp.querySelector('#nav-template');

			const navContainer = document.getElementById('nav-container');

			navContainer.innerHTML = '';

			navContainer.appendChild(
				template.content.cloneNode(true)
			);

			// Highlight current page
			const items = navContainer.querySelectorAll('[data-page]');

			items.forEach(item => {

				if (item.dataset.page === currentPage)
					item.classList.add('current');

			});

			// Reinitialize Dropotron
			setTimeout(() => {

				$('#nav > ul').dropotron({
					mode: 'fade',
					noOpenerFade: true,
					alignment: 'center'
				});

			}, 0);

		})
		.catch(error => {
			console.error('Error loading nav:', error);
		});

}