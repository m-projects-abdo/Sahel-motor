let webLang;
window.onload = ()=> {
  webLang = localStorage.getItem('lang');
  
  if(webLang == 'rtl') {
    this.webArLang();
  } else {
    this.webEnLang();
  }
}


/*
 * to test element if is working with converter lang
 * testing 1 
 * testing 2
*/
// testing
// const test = document.getElementById('testlang');
// test.addEventListener('click', this.webArLang)
// testing
// const test2 = document.getElementById('testlang2');

/*
 * Global error message, 
 * if the browser not found dcoument element.
*/ 
const ERROR_MESSAGE = "NOT_FOUND"; 

// products in slider 
let product = document.querySelectorAll('.product') || ERROR_MESSAGE;

// Product info and add to cart section 
let productInfo = document.getElementById('productInfo') || ERROR_MESSAGE;

// Header 
let header = document.getElementById('header') || ERROR_MESSAGE;

// Hero section
let heroSection = document.getElementById('heroSection') || ERROR_MESSAGE;

// Footer section
let footer = document.getElementById('footer') || ERROR_MESSAGE;

// footer title section
let title = document.querySelectorAll('.title-ltr') || ERROR_MESSAGE;

// all converter button
const arLang = document.getElementById('ar-lang');
const enLang = document.getElementById('en-lang');

// this to small screen
const arLangSmall = document.getElementById('ar-lang-small');
const enLangSmall = document.getElementById('en-lang-small');

arLang.addEventListener('click', this.webArLang)
arLangSmall.addEventListener('click', this.webArLang)

enLang.addEventListener('click', this.webEnLang)
enLangSmall.addEventListener('click', this.webEnLang)

// test2.addEventListener('click', this.webEnLang)


function webArLang() {
  // Rest localStorage
  localStorage.removeItem('lang');
  // Add new lang to localStorage
  localStorage.setItem('lang', 'rtl');
 
  converter('rtl');
  
  if(title != ERROR_MESSAGE) {
    title.forEach(e => {
      e.classList.add('title-rtl');
    });
  }

} 

function webEnLang() {
  // Rest localStorage
  localStorage.removeItem('lang');
  // Add new lang to localStorage
  localStorage.setItem('lang', 'ltr');
  
  converter('ltr');

  if(title != ERROR_MESSAGE) {
    title.forEach(e => {
      e.classList.remove('title-rtl');
    });
  }

} 

/*
 * take all elements and convert direction
 * lang params this is direction you passing in this function
*/
function converter(lang) {
  // RTL convert product info section and add to cart when you are clicking
  if(productInfo != ERROR_MESSAGE) 
    productInfo.dir = lang;
 
  // RTL convert header when you are clicking
  if(header != ERROR_MESSAGE) 
    header.dir = lang;

  // RTL convert all products when you are clicking
  if(product != ERROR_MESSAGE) 
    product.forEach(e => {
      e.dir = lang;
    })

  // RTL convert footer when are clicking
  if(footer != ERROR_MESSAGE)   
    footer.dir = lang;

 
  // RTL convert hero section when you are clicking
  if(heroSection != ERROR_MESSAGE) 
    heroSection.dir = lang; 
}