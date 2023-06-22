import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

/* import images */

import image from './img/brownCosmetics.jpg';
import image2 from './img/greenCosmetics2.jpg';
import image3 from './img/brownWoman.jpg';
/* import image4 from './img/greenCosmetics.jpg'; */
import image5 from './img/Cosmetics.jpg';
/* import image6 from './img/greenCosmetics3.jpg'; */
import SliderItems from './sliderItems/sliderItems';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import './sliders.css'


export default () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    loop={true}
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, stopOnLastSlide: false, disableOnInteraction:false }}
    >
      <SwiperSlide>
            <SliderItems photo={image} title={'Досконалість матового покриття'} subtitle={'Створіть неповторний образ, виглядайте бездоганно та відчувайте себе впевнено '} backgroundColor={'#F7E1AE'} />
      </SwiperSlide>
      <SwiperSlide>
            <SliderItems photo={image2} title={'Відкрийте новий шлях до краси'} subtitle={'Даруйте вашій шкірі тільки найкраще: інноваційні формули для бездоганного догляду'} backgroundColor={'#A0D8B3'} />
      </SwiperSlide>
      <SwiperSlide>
            <SliderItems photo={image3} title={'Знайдіть досконалість у кожній деталі'} subtitle={'Перетворіть свої вії на витвір мистецтва з нашою високоякісною тушшю'} backgroundColor={'#83764F'} />
      </SwiperSlide>
      <SwiperSlide>
            <SliderItems photo={image5} title={'Освіження та баланс для вашої шкіри'} subtitle={'Даруйте вашій шкірі почуття свіжості та зволоження з нашим тоніком'} backgroundColor={'#C38154'} />
      </SwiperSlide>

    </Swiper>
  );
};