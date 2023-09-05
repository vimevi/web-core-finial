// Находим элементы кнопки и модального окна
var showModalButton = document.getElementById('showModalFeedback');
var modal = document.getElementById('modal-feedback');
var closeModalButton = document.querySelector('.modal-feedback__burger');
var body = document.querySelector('body');

// Открываем модальное окно при клике на кнопку
showModalButton.addEventListener('click', function () {
	modal.style.display = 'block';
	body.style.overflowY = 'hidden';
});

// Закрываем модальное окно при клике на кнопку закрытия или вне модального окна
closeModalButton.addEventListener('click', function () {
	modal.style.display = 'none';
	body.style.overflowY = 'auto';
});

window.addEventListener('click', function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
		body.style.overflowY = 'auto';
	}
});
