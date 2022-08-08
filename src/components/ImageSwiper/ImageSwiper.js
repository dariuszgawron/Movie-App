import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper'

import "swiper/css";
import "swiper/css/navigation";

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";
import tmdbApi from "../../api/tmdbApi";

import './ImageSwiper.scss';

const ImageSwiper = () => {
    const {type,id} = useParams();
    const [images,setImages] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
 
    useEffect(() => {
        const getImages = async () => {
            const response = await tmdbApi.getMediaImages(type,id);
            setImages(response.backdrops);
        };
        getImages();
    },[type,id]);
    
    return (
        <div className="images">
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={4}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
            >
            {
                images.map((image,index) => (
                    <SwiperSlide key={index}>
                        <img className="images__card" key={index} src={tmdbConfig.imageUrl(imageSize.original,image.file_path)} alt='' />
                    </SwiperSlide>
                ))
            }
                <div className="images__navigation images__navigation--prev" ref={navigationPrevRef}>
                    <i className='images__navigation-icon bx bx-chevron-left'></i>
                </div>
                <div className="images__navigation images__navigation--next" ref={navigationNextRef}>
                    <i className='images__navigation-icon bx bx-chevron-right'></i>
                </div>
            </Swiper>
        </div>
    )
};

export default ImageSwiper;