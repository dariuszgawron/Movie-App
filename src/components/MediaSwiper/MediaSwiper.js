import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
 
import 'swiper/css';
import 'swiper/css/navigation';

import tmdbApi from '../../api/tmdbApi';
// import axiosConfig from '../../api/axiosConfig';
// import tmdbConfig, {imageSize} from '../../api/tmdbConfig';

import MediaCard from '../MediaCard/MediaCard';

import './MediaSwiper.scss';

const MediaSwiper = props => {
    const [media, setMedia] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
        const getMedias = async () => {
            let response = null;
            const queryParams = {};

            if(props.mediaCategory !== 'similar') {
                response = await tmdbApi.getMediaList(props.mediaType,props.mediaCategory, {queryParams});
            } else {
                response = await tmdbApi.getSimilarMedia(props.mediaType, props.mediaId);
            };

            setMedia(response.results);
        };
        getMedias();

    }, []);

    return (
        <div className='media-swiper'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView={'auto'}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
            >
            {
                media.map((item,index) => (
                    <SwiperSlide key={index}>
                        <MediaCard item={item} mediaType={props.mediaType} />
                    </SwiperSlide>
                ))
            }
                <div className="media-swiper__navigation media-swiper__navigation--prev" ref={navigationPrevRef}>
                    <i class='media-swiper__navigation-icon bx bx-chevron-left'></i>
                </div>
                <div className="media-swiper__navigation media-swiper__navigation--next" ref={navigationNextRef}>
                    <i class='media-swiper__navigation-icon bx bx-chevron-right'></i>
                </div>
            </Swiper>
        </div>
    )
};

MediaSwiper.propTypes = {
    mediaType: PropTypes.string.isRequired,
    mediaCategory: PropTypes.string.isRequired
}

export default MediaSwiper;