function loadNav(currentPage) {

	fetch('/src/html/nav.html')
		.then(res => res.text())
		.then(html => {

			const temp = document.createElement('div');
			temp.innerHTML = html;

			const template = temp.querySelector('#nav-template');
			const navContainer = document.getElementById('nav-container');

			navContainer.innerHTML = '';
			navContainer.appendChild(template.content.cloneNode(true));

			// Highlight current page
			navContainer.querySelectorAll('[data-page]').forEach(item => {
				if (item.dataset.page === currentPage)
					item.classList.add('current');
			});

			// Remove old panel/titleBar (prevents duplicates)
			$('#navPanel').remove();
			$('#titleBar').remove();

			// Desktop dropdown
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center'
			});

			// Mobile panel
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
			.appendTo($('body'))
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'left',
				target: $('body'),
				visibleClass: 'navPanel-visible'
			});

			// Title bar (mobile toggle)
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			).appendTo($('body'));

		})
		.catch(err => console.error(err));
}