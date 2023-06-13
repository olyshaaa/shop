import React from 'react-dom'
import Router from 'react-router-dom'
import './sliderItems.css'

const SliderItems = ({ photo, title, subtitle, backgroundColor }) => {
    const itemStyle = {
      backgroundColor: backgroundColor // Используем значение backgroundColor из пропсов
    };
    return(
    <div className='slider-item' style={itemStyle}>
        <img src={photo} alt=''></img>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </div>)
}

export default SliderItems;