import React, { useState } from 'react';
import SliderItems from '../sliders/sliderItems/sliderItems';
import './sliders.css';
import ImagePreload from '../imagePreload/preload';

import image from './img/brownCosmetics.jpg';
import image2 from './img/greenCosmetics2.jpg';
import image3 from './img/brownWoman.jpg';
import image4 from './img/greenCosmetics.jpg';
import image5 from './img/Cosmetics.jpg';
import image6 from './img/greenCosmetics3.jpg';

const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length - 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const slides = [
    { photo: image, title: 'Досконалість матового покриття', subtitle: 'Створіть неповторний образ, виглядайте бездоганно та відчувайте себе впевнено у будь-якій ситуації.', backgroundColor: '#F7E1AE' },
    { photo: image2, title: 'Відкрийте новий шлях до краси', subtitle: 'Даруйте вашій шкірі тільки найкраще: інноваційні формули для бездоганного догляду', backgroundColor: '#A0D8B3' },
    { photo: image3, title: 'Знайдіть досконалість у кожній деталі', subtitle: 'Перетворіть свої вії на витвір мистецтва з нашою високоякісною тушшю', backgroundColor: '#83764F' },
    { photo: image4, title: 'Відновлення та сяйво у кожному кроці догляду', subtitle: "Забезпечте вашому волоссю здоров'я, силу та неперевершений блиск з нашим кондиціонером та шампунем.", backgroundColor: '#FDCEDF' },
    { photo: image5, title: 'Освіження та баланс для вашої шкіри', subtitle: 'Даруйте вашій шкірі почуття свіжості та зволоження з нашим тоніком', backgroundColor: '#C38154' },
    { photo: image6, title: 'Краса із турботою про планету', subtitle: 'Наші продукти не тільки перетворюють, а й піклуються про навколишнє середовище – дізнайтесь про нашу програму утилізації', backgroundColor: '#7FBB6C' },
  ];

  const visibleSlides = slides.slice(currentSlide, currentSlide + 2);

  return (
    <>
      <div className="slider-container">
        <div className="slider">
          <button onClick={handlePrevSlide} className="prev-button">&#x003C;</button>
          {visibleSlides.map((slide, index) => (
            <React.Fragment key={index}>
              {/* Предзагрузка изображения */}
              <ImagePreload src={slide.photo} />
              <SliderItems
                photo={slide.photo}
                title={slide.title}
                subtitle={slide.subtitle}
                backgroundColor={slide.backgroundColor}
              />
            </React.Fragment>
          ))}
          <button onClick={handleNextSlide} id="nextBtn">&#x003E;</button>
        </div>
      </div>
    </>
  );
};

export default Sliders;
