// Затемнение хедера при скролле вниз
var headerM = document.getElementById("headerM");
ScrollCheck();



function ScrollCheck(){
  Header__Style(window.scrollY);

  window.addEventListener("scroll", (event) => {
    Header__Style(this.scrollY);
  });
}
function Header__Style(scroll){
  if (scroll > 0) {
    // Скорость затемнения хедера
    var temp = scroll/160;

    if (temp < 0.9) headerM.style.backgroundColor = "rgba(0, 0, 0, " + temp + ")";
    else headerM.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  }
  else headerM.style.backgroundColor = "rgba(0, 0, 0, 0)";
}



// --------------------------------------------------------

// Кнопка

const modalBtns = document.querySelectorAll('._modal-open');
const modals = document.querySelectorAll('._modal');

const body = document.body;

function openModal(elem) {
	elem.classList.add('_active');
	body.classList.add('_locked')
}

function closeModal(e) {
	if (e.target.classList.contains('modal-bg')) {
		e.target.closest('._modal').classList.remove('_active');
		body.classList.remove('_locked')
	}
}

modalBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let data = e.target.dataset.modalOpen;

		modals.forEach(modal => {
			if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
				openModal(modal)
			}
		})
	})
})

modals.forEach(modal => {
	modal.addEventListener('click', e => closeModal(e))
})

window.addEventListener('keydown', e => {
	modals.forEach(modal => {
		if (e.key === "Escape" && modal.classList.contains('_active')) {
			modal.classList.remove('_active');
			body.classList.remove('_locked');
		}
	})
})




// --------------------------------------------------------

// Кнопка2


var tel = document.getElementById('tel');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(tel, maskOptions);




const modalBtns2 = document.querySelectorAll('._modal-open2');
const modals2 = document.querySelectorAll('._modal2');

const body2 = document.body;

function openModal2(elem) {
	elem.classList.add('_active');
	body2.classList.add('_locked')
}

function closeModal2(e) {
	if (e.target.classList.contains('modal-bg2')) {
		e.target.closest('._modal2').classList.remove('_active');
		body2.classList.remove('_locked')
	}
}

modalBtns2.forEach(btn => {
	btn.addEventListener('click', (e) => {
		let data = e.target.dataset.modalOpen;

		modals2.forEach(modal => {
			if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open2').dataset.modalOpen) {
				openModal2(modal)
			}
		})
	})
})

modals2.forEach(modal => {
	modal.addEventListener('click', e => closeModal2(e))
})

window.addEventListener('keydown', e => {
	modals2.forEach(modal => {
		if (e.key === "Escape" && modal.classList.contains('_active')) {
			modal.classList.remove('_active');
			body2.classList.remove('_locked');
		}
	})
})
