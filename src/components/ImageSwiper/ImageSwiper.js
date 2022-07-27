import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";
import tmdbApi from "../../api/tmdbApi";

import './ImageSwiper.css';

const ImageSwiper = () => {
    const {type,id} = useParams();
    const [images,setImages] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const response = await tmdbApi.getMediaImages(type,id);
            console.log(response.backdrops);
            setImages(response.backdrops);
        };
        getImages();
    },[type,id]);
    
    return (
        <div className="image-swiper">
            {
                images.map((image,index) => (
                    <img className="image-card" key={index} src={tmdbConfig.imageUrl(imageSize.original,image.file_path)} alt='' />
                ))
            }
        </div>
    )
};

export default ImageSwiper;