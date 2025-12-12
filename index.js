document.addEventListener("DOMContentLoaded", () => {
  const servicesButtons = document.querySelectorAll(".service__item");
  const serviceDetails = document.querySelector(".services__right");

  const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    if (!details) return; // safety check

    serviceDetails.innerHTML = `
      <h3>${details.title}</h3>
      ${details.description.map(p => `<p>${p}</p>`).join('')}
    `;
  };

  const removeActiveClass = () => {
    servicesButtons.forEach(button => button.classList.remove('active'));
  };

  servicesButtons.forEach((item) => {
    item.addEventListener("click", () => {
      removeActiveClass();
      const serviceClass = Array.from(item.classList).find(cls => cls !== "service__item" && cls !== "active");
      getService(serviceClass);
      item.classList.add('active');
    });
  });

  // Optionally, initialize with the first item
  const firstCategory = Array.from(servicesButtons[0].classList).find(cls => cls !== "service__item" && cls !== "active");
  getService(firstCategory);
});





//==================MIXITUP
const containerEl = document.querySelector('.projects__container')
var mixer = mixitup(containerEl, {
  animation: {
    enable: false
  }
});

mixer.filter('*');






//================================SWIPER(TESTIMONIALS)==================
const swiper = new Swiper('.swiper', {
 slidesPerView:1,
 spaceBetween:30,
pagination:{
    el:".swiper-pagination",
    clickable:true,
},
 breakpoints:{
  600:{
    slidesPerView:2
  },
  1024:{
  slidesPerView:3
  }
 }
});


//==========================NAVBAR TOOGLE(small screen)======
const navMenu  = document.querySelector('.nav__menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav__toggle-close')


const openNavHandler = ()=>{
  navMenu.style.display = 'flex';
  navOpenBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline-block'
}

const closeNavHandler = ()=>{
  navMenu.style.display = 'none';
  navOpenBtn.style.display = 'inline-block';
  navCloseBtn.style.display = 'none'
}




navOpenBtn.addEventListener('click', openNavHandler)
navCloseBtn.addEventListener('click', closeNavHandler)


//close nav menu on click of nav link on small screen
const navItems = navMenu.querySelectorAll('a')
if(window.innerWidth < 768){
  navItems.forEach(item => {
    item.addEventListener('click', closeNavHandler)
  })
}

//================================THEME TOGGLE(lIGHT & dark mode)
const themeBtn = document.querySelector('.nav__theme-btn');
themeBtn.addEventListener('click', () => {
  let bodyClass = document.body.className;
  if(!bodyClass){
    bodyClass = 'dark';
    document.body.className = bodyClass;
    //change toggle icon
    themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
    //save theme to localstorage
     window.localStorage.setItem('theme', bodyClass);
  }else{
    bodyClass = '';
    document.body.className = bodyClass;
    themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
    //save theme to localstorage
    window.localStorage.setItem('theme', bodyClass);
  }

});


//load theme on load
window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme');
});
