import React, { useEffect, useState } from "react";
import SwiperCore, {Autoplay, EffectCoverflow} from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";

import tmdbApi, {mediaTypes, movieCategories} from "../../api/tmdbApi";

import HeroSlide from "../HeroSlide/HeroSlide";

import "./HeroSlider.scss";

const HeroSlider = () => {
    SwiperCore.use([Autoplay]);

    const [slides,setSlides] = useState([]);

    useEffect(() => {
        const getMedia = async () => {
            const response = await tmdbApi.getMediaList(mediaTypes.movie,movieCategories.popular, {params: {}});
            setSlides(response.results.slice(0,3));
        };
        getMedia();
    },[]);

    return (
        <div className="hero-slider container">
            <Swiper
                modules={[Autoplay,EffectCoverflow]} 
                effect="coverflow"
                slidesPerView={1}
                spaceBetween={0}
                grabCursor={true}
                autoplay={{delay: 5000}}
            >
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            {({isActive}) => (
                                <HeroSlide item={slide} isActive={isActive} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
};

export default HeroSlider;