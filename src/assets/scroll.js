export default function () {
	const headerDestination = document.querySelector('.header'),
		newsDestination = document.querySelector('.news'),
		playersDestination = document.querySelector('.players'),
		sponsorsDestination = document.querySelector('.sponsors'),
		contactDestination = document.querySelector('.contact'),
		navLink = document.querySelectorAll('.nav__link'),
		backToTopDestination = document.querySelector('body'),
		backToTopLink = document.querySelector('.back-to-top');

	navLink.forEach((target) => {
		target.addEventListener('click', () => {
			switch (target.dataset.name) {
				case 'header':
					scroll(headerDestination);
					break;
				case 'news':
					scroll(newsDestination);
					break;
				case 'players':
					scroll(playersDestination);
					break;
				case 'sponsors':
					scroll(sponsorsDestination);
					break;
				case 'contact':
					scroll(contactDestination);
					break;
				default:
					break;
			}
		});
	});

	backToTopLink.addEventListener('click', () => {
		scroll(backToTopDestination);
	});
}

function scroll(target) {
	target.scrollIntoView(
		{
			behavior: 'smooth',
		},
		5000
	);
}
