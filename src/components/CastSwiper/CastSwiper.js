import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

import tmdbApi from "../../api/tmdbApi";
import tmdbConfig, { imageSize } from "../../api/tmdbConfig";

import './CastSwiper.scss';

const CastSwiper = () => {
    const {type, id} = useParams();
    const [casts,setCasts] = useState([]);

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
                spaceBetween={15}
                slidesPerView={'auto'}
            >
            {
                casts.map((cast,index) => (
                    <SwiperSlide key={index}>
                        <div className="casts__item" key={index}>
                            <img className="casts__item-image" src={tmdbConfig.imageUrl(imageSize.w500,cast.profile_path || '')} alt='' />
                            <p className="casts__item-name">{cast.name}</p>
                            <p className="casts__item-character">{cast.character}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>
            
        </div>
    )
};

export default CastSwiper;