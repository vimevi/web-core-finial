const extraText = document.querySelector('.main__text-hidden');
const moreBtnText = document.querySelector('.more-btn-text');
const textContentBtn = moreBtnText.querySelector('span');
const theSecondParagraph = document.querySelector(
	'main__more-text--size-m:last-child'
);

// Обработчик событий "Читать далее" с текстом

moreBtnText.addEventListener('click', function () {
	extraText.classList.toggle('main__text-hidden');
	moreBtnText.classList.toggle('more-btn-text---rotate');
	if (textContentBtn.textContent === 'Читать далее') {
		textContentBtn.textContent = 'Скрыть';
	} else {
		textContentBtn.textContent = 'Читать далее';
	}
});

const moreBtn = document.querySelector('.more-btn');
// const gridLengthswiper1 = document.querySelectorAll('.brands__item').length;
const textMore = moreBtn.querySelector('span');
const btnArrow = moreBtn.querySelector('span::before');

let items = 6;
let isExpanded = false; // Переменная для отслеживания состояния списка

moreBtn.addEventListener('click', () => {
	const array = Array.from(document.querySelector('.brands__items').children);

	if (isExpanded) {
		// Если список был развернут, сворачиваем его
		array.forEach((el) => el.classList.remove('is-visible'));
		textMore.textContent = 'Показать все'; // Обновляем текст кнопки
		moreBtn.classList.remove('expanded');
		isExpanded = false;
	} else {
		// Если список был свернут, разворачиваем его
		items += 5;
		const visItems = array.slice(0, items);
		visItems.forEach((el) => el.classList.add('is-visible'));
		textMore.textContent = 'Скрыть'; // Обновляем текст кнопки
		moreBtn.classList.add('expanded');
		isExpanded = true;
	}
});
// Обработчик событий для стрелки в кнопке
moreBtn.addEventListener('click', function () {
	moreBtn.classList.toggle('more-btn---rotate');
});
