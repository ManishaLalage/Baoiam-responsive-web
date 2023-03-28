

// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.openMenu');
// const menu_items = document.querySelectorAll('navbar .mainMenu li a');




// openMenu.addEventListener('click',show);
// closeMenu.addEventListener('click',close);

// // close menu when you click on a menu item 
// menu_items.forEach(item => {
//     item.addEventListener('click',function(){
//         close();
//     })
// })

// function show(){
//     mainMenu.style.display = 'flex';
//     mainMenu.style.top = '0';
// }
// function close(){
//     mainMenu.style.top = '-100%';
// }



// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 10,
    slidesPerView:1,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    }
    ,
        pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var swiper = new Swiper(".mySwiperr", {
    slidesPerView: "auto",
    slidesPerView:3,
    loop: true,
    spaceBetween: 20,
    autoplay:{
      delay:2500,
      disableOnInteraction:false,
      loop: true,

  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // swiper3

  var swiper = new Swiper(".mySwiperrr", {});
