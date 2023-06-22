import React from 'react-dom'
import Router from 'react-router-dom'
import './sliderItems.css'

const SliderItems = ({ photo, title, subtitle, backgroundColor }) => {
    const itemStyle = {
      backgroundColor: backgroundColor // Используем значение backgroundColor из пропсов
    };
    return(
    <div className='slider-item' style={itemStyle}>
        <img className='slider-item-img' src={photo} alt=''></img>
        <h3 className='slider-item-text slider-item-h3'>{title}</h3>
        <p className='slider-item-text slider-item-p'>{subtitle}</p>
    </div>)
}

export default SliderItems;