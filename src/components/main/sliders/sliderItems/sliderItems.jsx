import React from 'react-dom'
import Router from 'react-router-dom'

const SliderItems = ({photo, title, subtitle, link}) =>{
    return(
    <div className='slider-item'>
        <img src={photo} alt=''></img>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p></p>
    </div>)
}

export default SliderItems;