// (() =>{
  const searchButton = document.getElementById('search-btn-v');
  const searchButton2 = document.getElementById('search-btn-v2');

  const openNavMenu = document.querySelector('.open-nav-menu'),
  closeNavMenu = document.querySelector('.close-nav-menu'),
  closeModalButton = document.getElementById('close-modal-v'),
  closeModalButton2 = document.getElementById('close-modal-v2'),
  searchModalContainer = document.getElementById('search-modal-container-v'),
  searchModal = document.getElementById('search-modal-v'),
  navMenu = document.querySelector('.nav-menu'),
  menuOverlay = document.querySelector('.menu-overlay'),
  mediaSize = 991;

  let modalStatus = false;

  function openSearchModal() {
    searchModalContainer.classList.add("search-modal-container-active");
    // alert('hi')
  }

  function closeSearchModal() {
    searchModalContainer.classList.remove("search-modal-container-active");
  }

  searchButton.addEventListener('click', openSearchModal);
  searchButton2.addEventListener('click', openSearchModal);
  closeModalButton.addEventListener("click", closeSearchModal);
  closeModalButton2.addEventListener("click", closeSearchModal);
  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  
  // searchModal.addEventListener("click", ()=> {
  //   modalStatus = false;
  //   closeSearchModal();
  // });

  // searchModalContainer.addEventListener("click", ()=> {
  //   modalStatus = true;
  //   closeSearchModal();
  // });
  
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }
  
  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

// })();

