// dropdown
const data = [
	{
		title: 'Vikendice okolina Beograda',
		href: 'https://www.weekendica.com/vikendice-za-iznajmljivanje-u-beogradu-i-okolini/',
	},
	{
		title: 'Na sat od Beograda',
		href: 'https://www.weekendica.com/vikendice/?type=vikendice&listing_region=na-sat-od-beograda',
	},
	{
		title: 'Vikendice na Fruškoj Gori',
		href: 'https://www.weekendica.com/vikendice-fruska-gora/',
	},
	{
		title: 'Vikendice Palić',
		href: 'https://www.weekendica.com/vikendice/?type=vikendice&listing_region=palic',
	},
	{
		title: 'Vikendice na Tari',
		href: 'https://www.weekendica.com/vikendice-tara/',
	},
	{
		title: 'Vikendice na Kopaoniku',
		href: 'https://www.weekendica.com/vikendice-kopaonik/',
	},
	{
		title: 'Luksuzne vikendice',
		href: 'https://www.weekendica.com/luksuzne-vikendice-za-iznajmljivanje/',
	},
	{
		title: 'Vikendice sa bazenom',
		href: 'https://www.weekendica.com/vikendice-sa-bazenom-za-iznajmljivanje/',
	},
	{
		title: 'Vikendice za okupljanja',
		href: 'https://www.weekendica.com/vikendice-za-okupljanja-za-iznajmljivanje/',
	},
	{
		title: 'Vikendice za proslave i događaje',
		href: 'https://www.weekendica.com/vikendice-za-proslave-i-dogadjaje/',
	},
	{
		title: 'Splavovi za iznajmljivanje',
		href: 'https://www.weekendica.com/splavovi-za-iznajmljivanje/',
	},
	{
		title: 'Pet-friendly vikendice',
		href: 'https://www.weekendica.com/pet-friendly-vikendice/',
	},
];

const dropdownContent = document.querySelector('.dropdown__content');
// const markup = `<a href="#" class="dropdown__link">Vikendice okolina Beograda</a>`;
const markup = `
${data
	.map((item) => {
		return `<a href=${item.href} class="dropdown__link">${item.title}</a>`;
	})
	.join(' ')}
`;
dropdownContent.innerHTML = '';
dropdownContent.insertAdjacentHTML('afterbegin', markup);

// swiper slider for offer items
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// mblNavbar text
const mblNavText = document.querySelectorAll('.mblNav__link .text');
mblNavText.forEach((text) => {
	const newText = text.textContent.substring(0, 10);
	if (text.innerHTML === newText) {
		console.log('true');
		text.innerHTML = newText;
	} else {
		text.innerHTML = `${newText}...`;
	}
});

// sidebar
const openSidebar = document.querySelector('.btn-open');
const closeSidebar = document.querySelector('.btn-close');
const navList = document.querySelector('.nav__list');

openSidebar.addEventListener('click', () => {
	navList.classList.add('show');
});
closeSidebar.addEventListener('click', () => {
	navList.classList.remove('show');
});