const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('main-nav__bar');
//Slideshow Gallery
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

//Mobile menu
mobileMenu.onclick = function() {
  menu.classList.toggle('active');
  mobileMenu.classList.toggle('close-button');
}

//Button increment/decrement
function minusQuantity(min) {
  document.getElementById("qty").value = parseInt(document.getElementById("qty").value) - 1;
  if (document.getElementById("qty").value <= parseInt(min)) {
    document.getElementById("qty").value = min;
  }
}
function plusQuantity(max) {
  document.getElementById("qty").value = parseInt(document.getElementById("qty").value) + 1;
  if (document.getElementById("qty").value >= parseInt(max)) {
    document.getElementById("qty").value = max;
  }
}

//navtabs for products__infor
function openContent(evt,contentType) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (let index = 0; index < tabcontent.length; index++) {
        tabcontent[index].style.display ="none";
    }
    tablinks = document.getElementsByClassName("pro-content__link");
    for (let index = 0; index < tablinks.length; index++) {
        tablinks[index].className = tablinks[index].className.replace("active","");
    }
    document.getElementById(contentType).style.display = "block";
    evt.currentTarget.className += " active";
}

//header scroll down
window.onscroll = function (){
  if ( document.documentElement.scrollTop > 102){
    document.getElementById('header-scrollBar').className = 'header-scroll';
    document.getElementById('main-nav').className = 'header-scroll main-nav';
    document.getElementById('main-nav__logo').className = 'header-logo';
  }else {
    document.getElementById('header-scrollBar').className = '';
    document.getElementById('main-nav').className = 'main-nav';
    document.getElementById('main-nav__logo').className = '';
  }
}

//amount warning
function limitedAmount() {
  let qty = parseInt(document.getElementById('qty').value);
  if (qty>2) {
    document.getElementById('error').style.display = 'block';
  }
}
function closeError() {
  document.getElementById('error').style.display = 'none';
}

