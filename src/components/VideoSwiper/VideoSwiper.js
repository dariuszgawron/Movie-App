import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import PropTypes from 'prop-types';

import "swiper/css";
import "swiper/css/navigation";

import tmdbApi from "../../api/tmdbApi";

import VideoCard from "../VideoCard/VideoCard";

import './VideoSwiper.scss';

const VideoSwiper = props => {
    const [videos, setVideos] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getMediaVideos(props.mediaType, props.mediaId);
            setVideos(response.results);
        };
        getVideos();
    }, [props.mediaType, props.mediaId]);

    return (
        <div className="trailers">
        {
            videos && videos.length ?
            (
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
                        882: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {
                        videos && videos.map((video, index) => (
                            <SwiperSlide key={index}>
                                <VideoCard key={index} item={video}/>
                            </SwiperSlide>
                        ))
                    }
                    <div className="trailers__navigation trailers__navigation--prev" ref={navigationPrevRef}>
                        <i className='trailers__navigation-icon bx bx-chevron-left'></i>
                    </div>
                    <div className="trailers__navigation trailers__navigation--next" ref={navigationNextRef}>
                        <i className='trailers__navigation-icon bx bx-chevron-right'></i>
                    </div>
                </Swiper>
            ) : (
                <div className="trailers__info">
                    <i className='trailers__info-icon bx bx-error-circle'></i>
                    <span className="trailers__info-text">No trailers for the title</span>
                </div>
            )}
        </div>
    )
};

VideoSwiper.propTypes = {
    mediaType: PropTypes.string.isRequired,
    mediaId: PropTypes.string.isRequired
};

export default VideoSwiper;