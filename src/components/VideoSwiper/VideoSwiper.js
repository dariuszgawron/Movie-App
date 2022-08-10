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
        const getVideosTimeout = setTimeout(getVideos(),300);
        clearTimeout(getVideosTimeout);
        // getVideos();
    },[type,id]);

    return (
        <div className="trailers">
        {
            videos.length>0 ?
            (
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={15}
                    slidesPerView={2}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current
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
                    <i class='trailers__info-icon bx bx-error-circle'></i>
                    <span className="trailers__info-text">No trailers for the title</span>
                </div>
            )}
            
        </div>
    )
};

export default VideoSwiper;