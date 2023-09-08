const moreBtnDevices = document.querySelector('.devices .more-btn');
const textMoreDevices = moreBtnDevices.querySelector('span');
const btnArrowDevices = moreBtnDevices.querySelector('span::before');

let itemsDevices = 4;
let isExpandedDevices = false; // Переменная для отслеживания состояния списка

moreBtnDevices.addEventListener('click', () => {
	const array = Array.from(document.querySelector('.devices__items').children);

	if (isExpandedDevices) {
		// Если список был развернут, сворачиваем его
		array.forEach((el) => el.classList.remove('is-visible'));
		textContentBtn.textContent = 'Скрыть';

		isExpandedDevices = false;
	} else {
		// Если список был свернут, разворачиваем его
		items += 5;
		const visItems = array.slice(0, items);
		visItems.forEach((el) => el.classList.add('is-visible'));

		isExpandedDevices = true;
	}
});
// Обработчик событий для стрелки в кнопке
moreBtnDevices.addEventListener('click', function () {
	moreBtn.classList.toggle('more-btn---rotate');
});
