import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import tmdbApi from "../../api/tmdbApi";

import VideoCard from "../VideoCard/VideoCard";

import './VideoSwiper.scss';

const VideoSwiper = () => {
    const {type,id} = useParams();
    const [videos,setVideos] = useState([]);

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
                spaceBetween={15}
                slidesPerView={4}
            >
                {
                    videos && videos.map((video, index) => (
                        <SwiperSlide>
                            <VideoCard key={index} item={video}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
};

export default VideoSwiper;