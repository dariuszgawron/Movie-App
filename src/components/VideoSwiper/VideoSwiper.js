import React, {useState, useEffect, useRef} from "react";
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import tmdbApi from "../../api/tmdbApi";

import VideoCard from "../VideoCard/VideoCard";

import './VideoSwiper.scss';

const VideoSwiper = () => {
    const {type,id} = useParams();
    const [videos,setVideos] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getMediaVideos(type,id);
            setVideos(response.results);
        };
        getVideos();
    },[type,id]);

    return (
        <div className="trailers">
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
                    videos && videos.map((video, index) => (
                        <SwiperSlide>
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
        </div>
    )
};

export default VideoSwiper;