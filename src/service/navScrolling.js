const header = document.querySelector('#header');
const detail = document.querySelector('#detail');
const user = document.querySelector('#user');
const open = document.querySelector('#open');
const search = document.querySelector('#search');
const search2 = document.querySelector('#search2');
const cart = document.querySelector('#cart');
const cart2 = document.querySelector('#cart2');
const home = document.querySelector('#a-home');
const about = document.querySelector('#a-about');
const contact = document.querySelector('#a-contact');
const services = document.querySelector('#a-services');
const pages = document.querySelector('#a-pages');
const news = document.querySelector('#a-news');

window.onscroll = ()=> {
  if(document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    header.classList.add('header-scroll');
    detail.classList.add('title-scroll');
    user.classList.add('title-scroll');
    open.classList.add('title-scroll');
    search.classList.add('title-scroll');
    search2.classList.add('title-scroll');
    cart.classList.add('title-scroll');
    cart2.classList.add('title-scroll');
    home.classList.add('title-scroll');
    about.classList.add('title-scroll');
    contact.classList.add('title-scroll');
    services.classList.add('title-scroll');
    pages.classList.add('title-scroll');
    news.classList.add('title-scroll');
  } else {
    header.classList.remove('header-scroll');
    open.classList.remove('title-scroll');
    detail.classList.remove('title-scroll');
    user.classList.remove('title-scroll');
    search.classList.remove('title-scroll');
    search2.classList.remove('title-scroll');
    cart.classList.remove('title-scroll');
    cart2.classList.remove('title-scroll');
    home.classList.remove('title-scroll');
    about.classList.remove('title-scroll');
    contact.classList.remove('title-scroll');
    services.classList.remove('title-scroll');
    pages.classList.remove('title-scroll');
    news.classList.remove('title-scroll');
  }

  // ==scroll to top of the page==
  // if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
  //   topScroll.classList.add("show-link");
  // } else {
  //   topScroll.classList.remove("show-link");
  // }

  console.log(document.body.scrollTop);
}
