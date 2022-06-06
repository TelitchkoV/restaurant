// Скролл окна
var headerM = document.getElementById("headerM");
ScrollCheck();



function ScrollCheck(){
  Header__Style(window.scrollY);
  Header__Tabs(window.scrollY);

  window.addEventListener("scroll", (event) => {
    Header__Style(this.scrollY);
    Header__Tabs(this.scrollY);
  });
}
// Затемнение хедера при скролле вниз
function Header__Style(scroll){
  if (scroll > 0) {
    // Скорость затемнения хедера
    var temp = scroll/160;

    if (temp < 0.9) headerM.style.backgroundColor = "rgba(0, 0, 0, " + temp + ")";
    else headerM.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  }
  else headerM.style.backgroundColor = "rgba(0, 0, 0, 0)";
}
// Вкладки хедера при скролле вниз
function Header__Tabs(scroll){
  var anchor1 = document.getElementById("anchor1").getBoundingClientRect();
  var anchor2 = document.getElementById("anchor2").getBoundingClientRect();
  var anchor3 = document.querySelector('footer').getBoundingClientRect();
  var tabsList = document.getElementsByClassName("header__pageTab");
  var headerHeight = document.querySelector('header').getBoundingClientRect().height;

  function Header__TabsUpdate(target){
    for (let index = 0; index < tabsList.length; index++) {
      tabsList[index].classList = "header__pageTab";
    }
    tabsList[target].classList = "header__pageTab active";
  }

  if (scroll > anchor3.bottom + scroll - window.innerHeight - headerHeight) {
    Header__TabsUpdate(3);
  }
  else if (scroll >= anchor2.top + scroll - headerHeight - 1) {
    Header__TabsUpdate(2);
  }
  else if (scroll >= anchor1.top + scroll - headerHeight - 1) {
    Header__TabsUpdate(1);
  }
  else if (scroll < anchor1.top + scroll - headerHeight - 1) {
    Header__TabsUpdate(0);
  }
}


// Вкладки хедера
Header__TabsBtns();
function Header__TabsBtns(){
  var btnTab1 = document.getElementById("BtnTab1");
  var btnTab2 = document.getElementById("BtnTab2");
  var btnTab3 = document.getElementById("BtnTab3");
  var btnTab4 = document.getElementById("BtnTab4");

  btnTab1.addEventListener('click', (event) => {
    document.querySelector("main").scrollIntoView({behavior: "smooth"});
  })
  btnTab2.addEventListener('click', (event) => {
    window.scrollTo({
      top: document.getElementById("anchor1").getBoundingClientRect().top + window.scrollY - document.querySelector('header').getBoundingClientRect().height,
      left: 0,
      behavior: 'smooth'
    });
  })
  btnTab3.addEventListener('click', (event) => {
    window.scrollTo({
      top: document.getElementById("anchor2").getBoundingClientRect().top + window.scrollY - document.querySelector('header').getBoundingClientRect().height,
      left: 0,
      behavior: 'smooth'
    });
  })
  btnTab4.addEventListener('click', (event) => {
    document.querySelector('footer').scrollIntoView({behavior: "smooth"});
  })
}




// --------------------------------------------------------

// Кнопка

const modalBtns = document.querySelectorAll('._modal-open');
const modals = document.querySelectorAll('._modal');

const body = document.body;

function openModal(elem) {
	elem.classList.add('_active');
	body.classList.add('_locked')

  // Важный фикс !!!!
  updateTablesScheme();
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





// карта

// // Изменение цвета когда мышка над названием магазина.
// $('.scheme-item').hover(
//   function() {
//       $('.scheme rect[id=' + $(this).data('id') + ']').attr('class', 'hover');
//   },
//   function() {
//       $('.scheme rect[id=' + $(this).data('id') + ']').attr('class', 'defaultStol');
//   }
// );

// Клик по названию ресторана - открывается подсказка.
// $('.scheme-item').on('click', function() {
//   $('.scheme-popup').hide();
//   // $('.scheme rect[id=' + $(this).data('id') + ']').attr('class', 'active');

//   var popup = $(this).find('.scheme-popup');
//   $(popup).css('top', '-' + ($(popup).outerHeight(true) + 10) + 'px');
//   $(popup).css('left', '-' + (($(popup).outerWidth(true) / 4) - ($(this).outerWidth(true) / 2)) + 'px');
//   // $('.scheme rect[id=' + $(this).data('id') + ']').attr('class', 'active');
//   $(popup).show();
// });

// Клик по полигону ресторана - также открывается подсказка.
// $('.scheme rect').click(function() {
//   $('.scheme-popup').hide();
//   $('.scheme-item[id=' + $(this).data('id') + ']').trigger('click');
// });

// Клик вне карты всё закрывает.
// $("body").click(function(e) {
//   if ($(e.target).closest(".scheme rect, .scheme-item").length == 0) {
//       $(".scheme-popup").hide();
//       // $('.scheme rect').attr('class', 'defaultStol');
//   }
// });








var tables = document.querySelectorAll('.defaultStol');
var popups = document.querySelectorAll(".scheme-popup");
var selectedTable = 0;

createTableMenu();



function createTableMenu(){
  for (let i = 0; i < tables.length; i++) {

    // Добавить номер стола
    var tableNumber = document.createElement("p");
    tableNumber.innerText = tables[i].id.replace("stol", "");
    tableNumber.classList = "scheme-tableNumber";
    tableNumber.id = "tableNumber" + tables[i].id.replace("stol", "");
    document.querySelector(".scheme").appendChild(tableNumber);

    // Вставить номер стола
    var tempRect = tables[i].getBoundingClientRect();
    // Положение модального окна относительно основного
    var ModalOffset = document.querySelector(".modal-body").getBoundingClientRect();

    tableNumber.style.top = tempRect.top
    - ModalOffset.top - tableNumber.getBoundingClientRect().height
    +'px';
    tableNumber.style.left = tempRect.left
    - ModalOffset.left + (tempRect.width / 2) - (tableNumber.getBoundingClientRect().width / 2)
    +'px';

    // Показать инфо при ховере
    tables[i].addEventListener('mouseover', (e) => {
      var tempID = tables[i].id.replace("stol", "");
      var tempPopup = document.getElementById('popup' + tempID);
      // Положение внутри модального окна
      tempPopup.style.display = "block";
      // Положение модального окна относительно основного
      var tempModalOffset = document.querySelector(".modal-body").getBoundingClientRect();

      var rect = tables[i].getBoundingClientRect();

      tempPopup.style.top = rect.top
        + (rect.height) + 5
        - tempModalOffset.top
      +'px';
      tempPopup.style.left = rect.left
        + (rect.width / 2) - (tempPopup.getBoundingClientRect().width / 2)
        - tempModalOffset.left
      +'px';
    });

    // Убрать инфо при ховере
    tables[i].addEventListener('mouseout', (e) => {
      var tempID = tables[i].id.replace("stol", "");
      var tempPopup = document.getElementById('popup' + tempID);

      if (!tables[i].classList.contains("active")) {
        tempPopup.style.display = "none";
      }
    });

    // Показать инфо при клике
    // Сохранить выбранный стол в переменную
    tables[i].addEventListener('click', (e) => {
      var tempID = tables[selectedTable].id.replace("stol", "");
      var tempPopupOld = document.getElementById('popup' + tempID);
      tempPopupOld.style.display = "none";
      tables[selectedTable].classList = "defaultStol";

      tables[i].classList.add('active');
      selectedTable = i;
    });
  }

  for (let j = 0; j < popups.length; j++) {
    popups[j].addEventListener('click', (e) => {
      popups[j].style.display = "none";
    });
  }

  // Реакция на смену размера окна
  window.addEventListener('resize', (e) => {
    updateTablesScheme();
  });
}

function updateTablesScheme(){
  var tempModalOffset = document.querySelector(".modal-body").getBoundingClientRect();

  for (let i = 0; i < tables.length; i++){
    var rect = tables[i].getBoundingClientRect();
    var tempID = tables[i].id.replace("stol", "");
    var tableNumber = document.getElementById("tableNumber" + tempID);
    var tempPopup = document.getElementById('popup' + tempID);

    tempPopup.style.top = rect.top
    + (rect.height) + 5
    - tempModalOffset.top
    +'px';
    tempPopup.style.left = rect.left
    + (rect.width / 2) - (tempPopup.getBoundingClientRect().width / 2)
    - tempModalOffset.left
    +'px';

    tableNumber.style.top = rect.top
    - tempModalOffset.top - tableNumber.getBoundingClientRect().height
    +'px';
    tableNumber.style.left = rect.left
    - tempModalOffset.left + (rect.width / 2) - (tableNumber.getBoundingClientRect().width / 2)
    +'px';
  }
}
