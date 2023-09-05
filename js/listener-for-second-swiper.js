const moreBtnDevices = document.querySelector('.more-btn-devices');
const textMoreDevices = moreBtnDevices.querySelector('span');
const btnArrowDevices = moreBtnDevices.querySelector('span::before');

let itemsDevices = 6;
let isExpandedDevices = false; // Переменная для отслеживания состояния списка

moreBtnDevices.addEventListener('click', () => {
	const arrayDevices = Array.from(
		document.querySelector('.devices__items').children
	);

	if (isExpandedDevices) {
		// Если список был развернут, сворачиваем его
		arrayDevices.forEach((el) => el.classList.remove('is-visible'));
		textMoreDevices.textContent = 'Показать все'; // Обновляем текст кнопки
		moreBtnDevices.classList.remove('expanded');
		isExpandedDevices = false;
	} else {
		// Если список был свернут, разворачиваем его
		itemsDevices += 5;
		const visItemsDevices = arrayDevices.slice(0, itemsDevices);
		visItemsDevices.forEach((el) => el.classList.add('is-visible'));
		textMoreDevices.textContent = 'Скрыть'; // Обновляем текст кнопки
		moreBtnDevices.classList.add('expanded');
		isExpandedDevices = true;
	}
});
