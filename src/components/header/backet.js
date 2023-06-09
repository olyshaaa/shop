const basketPage = document.querySelector('.basket-page');
const basketButton = document.querySelector('.header-button-basket');
const basketPageClose = document.querySelector('.basket-page-close');

basketButton.addEventListener('click', () => {
  basketPage.style.display = 'block';
});

basketPageClose.addEventListener('click', () => {
  basketPage.style.display = 'none';
});
