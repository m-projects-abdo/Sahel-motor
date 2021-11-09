// for product scrolling
$(".products").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bxs-left-arrow'></i>",
    "<i class='bx bxs-right-arrow'></i>"
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
});