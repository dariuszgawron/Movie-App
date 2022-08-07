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
    // const runtime = (type==='movie') ? item.runtime : item.episode_run_time;

    useEffect(() => {
        const getDetails = async () => {
            let response = await tmdbApi.getMediaDetails(type,id,{params: {}} );
            setItems(response);
            window.scrollTo(0,0);
        };
        getDetails();
    }, [type,id]);

    return (
        <div className="media-details">
            {
                item && (
                    <>
                        <div className="media-details__header container">
                            <div className="media-details__header-rate">
                                {`${item.vote_average.toFixed(1)}`}
                            </div>
                            <img className="media-details__header-background" src={tmdbConfig.imageUrl(imageSize.original,item.backdrop_path || item.poster_path)} alt='' />
                            <div className="media-details__header-content">
                                <div className="media-details__poster">
                                    <img className="media-details__poster-image" src={tmdbConfig.imageUrl(imageSize.original,item.poster_path || item.backdrop_path)} alt='' />
                                </div>
                                <div className="media-details__info">
                                    <div className="media-details__type">
                                        {'TV SHOW'}
                                    </div>
                                    <div className="media-details__title">
                                        <h1 className="media-details__title-text">{item.title || item.name}</h1>
                                    </div>
                                    <div className="media-details__genres">
                                        {
                                            item.genres && item.genres.map((genre,index) => (
                                                <span className="media-details__genres-item" key={index}>{genre.name}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="media-details__group">
                                        <div className="media-details__publish-date">
                                            {new Date(item.release_date || item.first_air_date).getFullYear() || '-'}
                                        </div>
                                        <div className="media-details__runtime">
                                            {`${Math.floor(item.runtime/60) || 0}h ${item.runtime%60 || 0}m`}
                                            
                                        </div>
                                    </div>
                                    
                                    <p className="media-details__overview">
                                        {item.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="media-details__casts container">
                            <div className="section__header">
                                <h2 className="section__title">Cast</h2>
                            </div>
                            <CastSwiper />
                        </div>
                        
                        <div className="media-details__images container">
                            <div className="section__header">
                                <h2 className="section__title">Images</h2>
                            </div>
                            <ImageSwiper />
                        </div>

                        <div className="media-details__trailers container">
                            <div className="section__header">
                                <h2 className="section__title">Trailers</h2>
                            </div>
                            {/* <VideoSwiper /> */}
                        </div>

                        <div className="media-details__similar container">
                            <div className="section">
                                <div className="section__header">
                                    <h2 className="section__title">Similar</h2>
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