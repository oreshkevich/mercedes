class SmoothScroll {
  constructor(selector) {
    this.links = document.querySelectorAll(selector);

    this.links.forEach((item) => {
      item.addEventListener('click', (event) => {
        const linkId = event.target.closest('A').getAttribute('href').substr(1);
        window.scrollTo({
          top: document.getElementById(linkId).offsetTop,
          behavior: 'smooth',
        });
        event.preventDefault();
      });
    });
  }
}

new SmoothScroll('.menu-list__link');
new SmoothScroll('.main__scroll');
new SmoothScroll('.header__logo');



// const linksHead = document.querySelectorAll('.menu-list__link');
// const mainScroll = document.querySelector('.main__scroll')
// const newArray = [...linksHead, mainScroll]

// newArray.forEach(link => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault()

//     const ID = event.target.getAttribute('href').substr(1);
//     document.getElementById(ID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// })