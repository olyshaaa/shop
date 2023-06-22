import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from './img/shopping-basket.png';
/* import json file */
/* import regionsData from './regionSelector/regions.JSON' */

import './header.css';
import './basket.css'

const Header = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const regionsData = require('./regionSelector/regions.JSON');
    const fetchData = async () => {
      try {
        const response = await fetch(regionsData);
        const data = await response.json();
        setData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();


    const basketButton = document.querySelector('.header-button.basket');
    const basketPage = document.querySelector('.basket-page');
    const basketPageClose = document.querySelector('.basket-page-close');
    /* region-selector */
    const regionSelectorButton = document.querySelector('.region-selector')
    const regionSelectorPage = document.querySelector('.region-selector-page')
    const regionSelectorClose = document.querySelector('.region-selector-close')
    /* getting data from json */



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
    /* region selector */
    regionSelectorButton.addEventListener('click', ()=>{
      regionSelectorPage.style.display = 'block';
    })

    regionSelectorClose.addEventListener('click', ()=>{
      regionSelectorPage.style.display = 'none';
    })

    return () => {
      basketButton.removeEventListener('click', () => {});
      basketPageClose.removeEventListener('click', () => {});

    };


}, []);

  return (
    <>
      <header>
        <Link to="/" className="logo-link">
          <h2 className="logo-name">CharmVie</h2>
        </Link>
        <input className="header-search" type="search" placeholder="Введіть пошуковий запит" />
        <button className="region-selector" type="button">Україна</button>
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
      {/* basket's page */}
      <div className="basket-page">
        <p>Кошик</p>
        <img src={image} alt="basket" />
        <div id="overlay"></div>
        <p>В кошику немає товарів</p>
        <button className="basket-page-close">За покупками</button>
      </div>
      {/* region selector's page */}
      <div className='region-selector-page'>
        <p>Україна</p>
        <button className='region-selector-close'>×</button>
        <span>Обравши регіон, ми покажемо орієнтовний термін доставки при пошуку товарів</span>
        <ul>
          {data &&
            data.map((region, index) => (
              <li className='region-name' key={index}>
                <button className='region-name-button' disabled>
                {region.regionName}
                </button>
                <ul>
                  {Object.keys(region)
                    .filter((key) => key.startsWith('region-city'))
                    .map((cityKey, cityIndex) => (
                      <>

                      <li className='region-city' key={cityIndex}>
                        <button className='region-city-button'>{region[cityKey]}</button>
                        </li>
                        </>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
      <hr className="line" />


    </>
  );
  };

export default Header;
