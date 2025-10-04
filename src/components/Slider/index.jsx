import { Swiper, SwiperSlide } from "swiper/react";
import { Constainer } from "./styles";
import Card from "../Card";

function Slider({info, titleCategory}) {
    if (!Array.isArray(info)) {
        console.error("Slider component: 'info' prop is not an array.", info);
        return null; // ou um fallback UI
    }
    return (
        <Constainer>
            <h2>{titleCategory}</h2>
            <Swiper grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="Swiper">
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Constainer>
    )
}
export default Slider;