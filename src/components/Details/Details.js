import React, {useEffect, useState} from "react";
import {useParams} from 'react-router';

import tmdbApi from "../../api/tmdbApi";
import tmdbConfig, {imageSize } from "../../api/tmdbConfig";

import CastSwiper from "../CastSwiper/CastSwiper";
import VideoSwiper from "../VideoSwiper/VideoSwiper";
import MediaSwiper from "../MediaSwiper/MediaSwiper";
import ImageSwiper from "../ImageSwiper/ImageSwiper";

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
        <div className="media-details">
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

                        <div className="image__container">
                            <div className="section">
                                <ImageSwiper />
                            </div>
                        </div>

                        <div className="trailer__container">
                            <div className="section">
                                {/* <VideoSwiper /> */}
                            </div>
                        </div>

                        <div className="similar">
                            <div className="section">
                                <div className="section__header">
                                    Similar
                                </div>
                                <MediaSwiper mediaType={type} mediaCategory="similar" mediaId={id}/>
                            </div>
                        </div>
                        
                    </>
                )
            }
            
            
        </div>
    )
};

export default Details;