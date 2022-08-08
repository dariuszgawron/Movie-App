import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useParams } from 'react-router-dom';
 
import 'swiper/css';
import 'swiper/css/navigation';

import tmdbApi from '../../api/tmdbApi';

import MediaCard from '../MediaCard/MediaCard';

import './MediaSwiper.scss';

const MediaSwiper = props => {
    const [media, setMedia] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const { type, id } = useParams();

    useEffect(() => {
        const getMedias = async () => {
            let response = null;
            const queryParams = {};

            if(props.mediaCategory !== 'similar') {
                response = await tmdbApi.getMediaList(props.mediaType,props.mediaCategory, {queryParams});
            } else {
                response = await tmdbApi.getSimilarMedia(type,id);
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
                slidesPerView={2}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
                breakpoints= {{
                    578: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 5
                    },
                    1200: {
                        slidesPerView: 6
                    }
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
                    <i className='media-swiper__navigation-icon bx bx-chevron-left'></i>
                </div>
                <div className="media-swiper__navigation media-swiper__navigation--next" ref={navigationNextRef}>
                    <i className='media-swiper__navigation-icon bx bx-chevron-right'></i>
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