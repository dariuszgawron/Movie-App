import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import tmdbApi from "../../api/tmdbApi";

import VideoCard from "../VideoCard/VideoCard";

import './VideoSwiper.css';

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
        <>
            {
                videos && videos.map((video, index) => (
                    <VideoCard key={index} item={video}/>
                ))
            }
        </>
    )
};

export default VideoSwiper;