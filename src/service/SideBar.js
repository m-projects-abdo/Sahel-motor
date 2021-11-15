const sideBar = document.getElementById('nav-menu'),
      sideBarClose = document.getElementById('nav-close'),
      sideBarOpen = document.getElementById('nav-toggle');

sideBarOpen.addEventListener('click', ()=> {
  sideBar.classList.add('show');
});

sideBarClose.addEventListener('click', ()=> {
  sideBar.classList.remove('show');
})