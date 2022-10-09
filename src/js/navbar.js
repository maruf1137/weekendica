$(function () {
	$('.selectpicker').selectpicker();
});

const search = document.querySelector('.search');
const btnSearchDropdown = document.querySelector('.btn-search-dropdown');
const searchDropdownWrapper = document.querySelector('.search__dropdown--wrapper');
const btnCloseSearchDropdown = document.querySelector('.btn-close-search-dropdown');
const searchDropdownOverlay = document.querySelector('.search__dropdown .overlay');
const btnLeftSidebar = document.querySelector('.btn-left-sidebar');

btnSearchDropdown.addEventListener('click', () => {
	searchDropdownWrapper.classList.toggle('show-dropdown');
	searchDropdownOverlay.classList.toggle('show-overlay');
});
searchDropdownOverlay.addEventListener('click', () => {
	searchDropdownWrapper.classList.remove('show-dropdown');
	searchDropdownOverlay.classList.remove('show-overlay');
});
btnCloseSearchDropdown.addEventListener('click', () => {
	searchDropdownWrapper.classList.remove('show-dropdown');
	searchDropdownOverlay.classList.remove('show-overlay');
});

window.addEventListener('scroll', () => {
	const scrollSize = window.scrollY;
	if (scrollSize >= 140) {
		search.classList.add('sticky');
	} else {
		search.classList.remove('sticky');
	}
});

// left sidebar
const leftSidebar = document.querySelector('.btn-left-sidebar');
const closeLeftSidebar = document.querySelector('.btn-close-left-sidebar');
const nav = document.querySelector('.nav');
leftSidebar.addEventListener('click', () => {
	nav.classList.toggle('show-left-sidebar');
});
closeLeftSidebar.addEventListener('click', () => {
	nav.classList.remove('show-left-sidebar');
});

// responsive right sidebar dropdown
const btnLogin = document.querySelector('.btn-login');
const btnCloseRightSidebar = document.querySelector('.btn-close-right-sidebar');
const btnRightSidebar = document.querySelector('.btn-open-rightSidebar');
const navTop = document.querySelectorAll('.navTop');
const btnLoginList = document.querySelectorAll('.navTop__dropdown--list');
btnLogin.addEventListener('click', () => {
	btnLoginList.forEach((item) => {
		item.classList.toggle('show-dropdown');
	});
});

btnRightSidebar.addEventListener('click', () => {
	navTop.forEach((item) => {
		item.classList.toggle('show-rightSidebar');
	});
});
btnCloseRightSidebar.addEventListener('click', () => {
	navTop.forEach((item) => {
		item.classList.remove('show-rightSidebar');
	});
});

// calendar dropdown
const btnCalendar = document.querySelector('.btn-calender-dropdown');
const btnApply = document.querySelector('.btn-apply');
const calendarContainer = document.querySelector('.calender-dropdown__content');
const calendarOverlay = document.querySelector('.calender-dropdown .overlay');

btnCalendar.addEventListener('click', () => {
	calendarContainer.classList.toggle('show-calendar');
	calendarOverlay.style.display = 'block';
});
btnApply.addEventListener('click', () => {
	calendarContainer.classList.remove('show-calendar');
	calendarOverlay.style.display = 'none';
});
calendarOverlay.addEventListener('click', () => {
	calendarContainer.classList.remove('show-calendar');
	calendarOverlay.style.display = 'none';
});

// people dropdown
const btnPeople = document.querySelector('.btn-people-dropdwon');
const btnDone = document.querySelector('.btn-done');
const peopleContainer = document.querySelector('.people__dropdown');
const peopleOverlay = document.querySelector('.people .overlay');

btnPeople.addEventListener('click', () => {
	peopleContainer.classList.toggle('show-peple-drodpdown');
	peopleOverlay.style.display = 'block';
});
btnDone.addEventListener('click', () => {
	peopleContainer.classList.remove('show-peple-drodpdown');
	peopleOverlay.style.display = 'none';
});
peopleOverlay.addEventListener('click', () => {
	peopleContainer.classList.remove('show-peple-drodpdown');
	peopleOverlay.style.display = 'none';
});

// mbl search form
const btnForm = document.querySelector('.btn-form');
const btnCloseForm = document.querySelector('.btn-close-form');
const searchForm = document.querySelector('.search__form');

btnForm.addEventListener('click', () => {
	searchForm.style.height = 'auto';
	btnForm.style.display = 'none';
	btnCloseForm.style.display = 'block';
	searchForm.style.paddingTop = '5rem';
});

btnCloseForm.addEventListener('click', () => {
	searchForm.style.height = '0';
	btnForm.style.display = 'block';
	btnCloseForm.style.display = 'none';
	searchForm.style.paddingTop = '0';
});
