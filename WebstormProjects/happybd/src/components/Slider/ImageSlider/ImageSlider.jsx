import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'; // Стили для навигации
import 'swiper/css/pagination';
import slides from "./Slides";
import {Navigation} from "swiper/modules";
import './ImageSlider.css'

export default function ImageSlider() {

    return (
        <Swiper
            className="modal-swiper"
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation // Включаем навигацию
            modules={[Navigation]} // Добавляем модули сюда
        >
            {
                slides.map((slide, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <img src={slide.src}
                             alt={`${slide.alt} ${index}`}
                             className="slide-img"
                             style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}}
                        />
                    </SwiperSlide>

                ))
            }
        </Swiper>
    )
}