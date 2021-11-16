const infoTab = document.getElementById('infoTab');
const detailsTab = document.getElementById('detailsTab');
const detailsTabContent = document.getElementById('detailsTabContent');
const infoTabContent = document.getElementById('infoTabContent');

window.onload = () => {
  if(infoTab.classList.contains('tab-button-active')) {
    detailsTab.classList.remove('tab-button-active');
    detailsTabContent.classList.remove('div-tab-content-active');
    infoTabContent.classList.add('div-tab-content-active');
    infoTab.classList.add('tab-button-active');   
  }
}

infoTab.addEventListener('click', ()=> {
  detailsTab.classList.remove('tab-button-active');
  detailsTabContent.classList.remove('div-tab-content-active');
  infoTabContent.classList.add('div-tab-content-active');
  infoTab.classList.add('tab-button-active');
})
detailsTab.addEventListener('click', ()=> {
  detailsTab.classList.add('tab-button-active');
  infoTab.classList.remove('tab-button-active');
  detailsTabContent.classList.add('div-tab-content-active');
  infoTabContent.classList.remove('div-tab-content-active');
})