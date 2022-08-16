import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
 
import 'swiper/css';
import 'swiper/css/navigation';

import tmdbApi from '../../api/tmdbApi';

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
                response = await tmdbApi.getMediaList(props.mediaType, props.mediaCategory, {queryParams});
            } else {
                response = await tmdbApi.getSimilarMedia(props.mediaType, props.mediaId);
            };

            setMedia(response.results);
        };
        getMedias();
    }, [props.mediaType, props.mediaCategory, props.mediaId]);

    return (
        <div className='media-swiper'>
            {
                media && media.length ? (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={15}
                        slidesPerView={2}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        breakpoints= {{
                            578: {
                                slidesPerView: 3
                            },
                            768: {
                                slidesPerView: 4
                            },
                            1100: {
                                slidesPerView: 5
                            },
                            1300: {
                                slidesPerView: 6
                            }
                        }}
                    >
                    {
                        media.map((item, index) => (
                            <SwiperSlide key={index}>
                                <MediaCard item={item} mediaType={props.mediaType} />
                            </SwiperSlide>
                        ))
                    }
                        <div className="media-swiper__navigation media-swiper__navigation--prev" ref={navigationPrevRef}>
                            <i className='media-swiper__navigation-icon bx bx-chevron-left'></i>
                        </div>
                        <div className="media-swiper__navigation media-swiper__navigation--next" ref={navigationNextRef}>
                            <i className='media-swiper__navigation-icon bx bx-chevron-right'></i>
                        </div>
                    </Swiper>
                ) : (
                    <div className="media-swiper__info">
                        <i className='media-swiper__info-icon bx bx-error-circle'></i>
                        <span className="media-swiper__info-text">No similar media for the title</span>
                    </div>
                )
            }
        </div>
    )
};

MediaSwiper.propTypes = {
    mediaType: PropTypes.string.isRequired,
    mediaCategory: PropTypes.string.isRequired,
    mediaId: PropTypes.string
};

export default MediaSwiper;