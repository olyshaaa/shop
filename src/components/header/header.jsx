import React from 'react'
import './header.css'

const Header = () =>{
    return (
        <header>
            <h2 className='logo-name'>CharmVie</h2>
            <input className='header-search' type="search" placeholder='Введіть пошуковий запит' />
            <input className='region-selector' type='button' value='Україна' />
            <button className='header-button login'>
                <i className='header-icons login-icon fas fa-solid fa-user'></i>
                <p>Увійти</p>
            </button>
            <button className='header-button favourites'>
            <i className="header-icons favourites-icon fas fa-heart"></i>
                <p>Бажане</p>
            </button>
            <button className='header-button basket'>
            <i className='header-icons basket-icon fas fa-sharp fa-cart-shopping'></i>
                <p>Кошик</p>
            </button>
        </header>
    )
}

export default Header;