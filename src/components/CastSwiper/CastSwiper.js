import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

import tmdbApi from "../../api/tmdbApi";
import tmdbConfig, { imageSize } from "../../api/tmdbConfig";

import './CastSwiper.scss';

const CastSwiper = () => {
    const {type, id} = useParams();
    const [casts,setCasts] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
        const getCasts = async () => {
            const response = await tmdbApi.getMediaCredits(type,id);
            setCasts(response.cast.slice(0,20));
        };
        getCasts();
    }, [type,id]);

    return (
        <div className="casts">
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={7}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
            >
            {
                casts.map((cast,index) => (
                    <SwiperSlide key={index}>
                        <div className="casts__item" key={index}>
                            <img className="casts__item-image" src={tmdbConfig.imageUrl(imageSize.w500,cast.profile_path || '')} alt='' />
                            <p className="casts__item-name">{cast.name}</p>
                            <p className="casts__item-character">{cast.character}</p>
                            {/* {cast.popularity} */}
                        </div>
                    </SwiperSlide>
                ))
            }
                <div className="casts__navigation casts__navigation--prev" ref={navigationPrevRef}>
                    <i className='casts__navigation-icon bx bx-chevron-left'></i>
                </div>
                <div className="casts__navigation casts__navigation--next" ref={navigationNextRef}>
                    <i className='casts__navigation-icon bx bx-chevron-right'></i>
                </div>
            </Swiper>
            
        </div>
    )
};

export default CastSwiper;