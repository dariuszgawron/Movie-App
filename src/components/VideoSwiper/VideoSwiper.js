import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

import tmdbApi from "../../api/tmdbApi";

import './VideoSwiper.css';

const VideoSwiper = () => {
    const {type,id} = useParams();
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const response = tmdbApi.getMediaVideos(type,id);
            setVideos(response.results);
        };
        getVideos();
    },[type,id]);

    return (
        <>
            {
                // videos.map((video, index) => (
                //     <Video key={index} />
                // ))
            }
        </>
    )
};

export default VideoSwiper;