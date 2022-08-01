import React, {useEffect, useState} from "react";
import {useParams} from 'react-router';

import tmdbApi from "../../api/tmdbApi";
import tmdbConfig, {imageSize } from "../../api/tmdbConfig";

import CastSwiper from "../CastSwiper/CastSwiper";
import VideoSwiper from "../VideoSwiper/VideoSwiper";
import MediaSwiper from "../MediaSwiper/MediaSwiper";
import ImageSwiper from "../ImageSwiper/ImageSwiper";

import './Details.scss';

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
                        <div className="media-details__banner">
                            <img className="media-details__banner-image" src={tmdbConfig.imageUrl(imageSize.original,item.backdrop_path || item.poster_path)} alt='' />
                        </div>
                        <div className="media-details__content">
                            <div className="media-details__poster">
                                <img src={tmdbConfig.imageUrl(imageSize.original,item.poster_path || item.backdrop_path)} alt='' />
                            </div>
                            <div className="media-details__info">
                                <div className="media-details__type">
                                    {'TV SHOW'}
                                </div>
                                <div className="media-details__title">
                                    <h1>{item.title || item.name}</h1>
                                </div>
                                <div className="media-details__group">
                                    <div className="media-details__genres">
                                        {
                                            item.genres && item.genres.map((genre,index) => (
                                                <span className="media-details__genres-item" key={index}>{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="media-details__publish-date">
                                        {item.publish_date}
                                    </div>
                                    <div className="media-details__runtime">
                                        {item.runtime}
                                    </div>
                                </div>
                                
                                <p className="media-details__overview">
                                    {item.overview}
                                </p>
                                
                            </div>
                        </div>

                        <div className="media-details__casts">
                            <div className="cast__header">
                                <h2>Cast</h2>
                            </div>
                            <CastSwiper />
                        </div>
                        

                        <div className="media-details__images">
                            <div className="section">
                                <ImageSwiper />
                            </div>
                        </div>

                        <div className="media-details__trailers">
                            <div className="section">
                                {/* <VideoSwiper /> */}
                            </div>
                        </div>

                        <div className="media-details__similar">
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