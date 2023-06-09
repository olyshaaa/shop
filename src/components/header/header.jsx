import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from './img/shopping-basket.png';


import './header.css';

const Header = () => {
  useEffect(() => {
    const basketButton = document.querySelector('.header-button.basket');
    const basketPage = document.querySelector('.basket-page');
    const basketPageClose = document.querySelector('.basket-page-close');

    basketButton.addEventListener('click', () => {
      basketPage.style.display = 'block';
      setTimeout(() => {
        basketPage.classList.add('show');
      }, 10);
    });

    basketPageClose.addEventListener('click', () => {
      basketPage.classList.remove('show');
      setTimeout(() => {
        basketPage.style.display = 'none';
      }, 300);
    });



  }, []);

  return (
    <>

    <header>
      {/* logo name and link */}
      <Link to="/" className="logo-link">
        <h2 className="logo-name">CharmVie</h2>
      </Link>
      {/* searcher and region selector */}
      <input className="header-search" type="search" placeholder="Введіть пошуковий запит" />
      <input className="region-selector" type="button" value="Україна" />
      {/* buttons */}
      <button className="header-button login">
        <i className="header-icons login-icon fas fa-solid fa-user"></i>
        <p>Увійти</p>
      </button>
      <button className="header-button favourites">
        <i className="header-icons favourites-icon fas fa-heart"></i>
        <p>Бажане</p>
      </button>
      <button className="header-button basket">
        <i className="header-icons basket-icon fas fa-sharp fa-cart-shopping"></i>
        <p>Кошик</p>
      </button>

    </header>
    {/* basket-screen */}
    <div className="basket-page">
        <p>Кошик</p>
        <img src={image}/>

        <p>В кошику немає товарів</p>
        <button className="basket-page-close">За покупками</button>
      </div>
    </>
  );
};

export default Header;
