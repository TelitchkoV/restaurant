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
