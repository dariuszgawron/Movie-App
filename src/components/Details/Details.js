import React, {useEffect, useState} from "react";
import {useParams} from 'react-router';

import tmdbApi from "../../api/tmdbApi";
import tmdbConfig, {imageSize } from "../../api/tmdbConfig";

import CastSwiper from "../CastSwiper/CastSwiper";

import './Details.css';

const Details = () => {
    const {type,id} = useParams();
    const [item,setItems] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            let response = await tmdbApi.getMediaDetails(type,id,{params: {}} );
            setItems(response);
        };
        getDetails();
    }, [type,id]);

    return (
        <div className="details">
            {
                item && (
                    <>
                        <img src={tmdbConfig.imageUrl(imageSize.original,item.backdrop_path || item.poster_path)} alt='' />
                        <div className="details__poster">
                            <img src={tmdbConfig.imageUrl(imageSize.original,item.poster_path || item.backdrop_path)} alt='' />
                        </div>
                        <div className="details__info">
                            <div className="title">
                                <h1>{item.title || item.name}</h1>
                            </div>
                            <div className="genres">
                                {
                                    item.genres && item.genres.map((genre,index) => (
                                        <span key={index}>{genre.name}</span>
                                    ))
                                }
                            </div>
                            <p className="overview">
                                {item.overview}
                            </p>
                            <div className="cast">
                                <div className="cast__header">
                                    <h2>Cast</h2>
                                </div>
                                <CastSwiper />
                            </div>
                        </div>
                        
                    </>
                )
            }
            
            
        </div>
    )
};

export default Details;