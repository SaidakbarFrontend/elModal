const elBtn = document.querySelector('.btn');
const elModal = document.querySelector('.modal');
const elImg = document.querySelector('img')

// MODAL OPEN
elBtn.addEventListener('click', () => {
	elModal.classList.add('open');
	elBtn.classList.add('close');
});

// MODAL CLOSE

elImg.addEventListener(('click'), () => {
	elModal.classList.remove('open');
	elBtn.classList.remove('close')
});

// MODAL CLOSE

elModal.addEventListener(('click'), (e) => {
	if (e.target === elModal) {
		elModal.classList.remove('open');
		elBtn.classList.remove('close');
	}
});

// KEYUP MODAL COSE

windo.addEventListener(('keyup'), e => {
	if (e.key === 'Escape');{
		elModal.classList.remove('open');
		elBtn.classList.remove('close');
	}
});