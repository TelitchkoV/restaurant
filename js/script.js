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
