import React, {useEffect, useState} from "react";
import {useParams} from 'react-router';

import tmdbApi from "../../api/tmdbApi";
// import tmdbConfig, {imageSize } from "../../api/tmdbConfig";

import './Details.scss';

import MediaHeader from "../MediaHeader/MediaHeader";
import CastSwiper from "../CastSwiper/CastSwiper";
import VideoSwiper from "../VideoSwiper/VideoSwiper";
import MediaSwiper from "../MediaSwiper/MediaSwiper";
import ImageSwiper from "../ImageSwiper/ImageSwiper";

const Details = () => {
    const {type, id} = useParams();
    const [item, setItems] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            let response = await tmdbApi.getMediaDetails(type, id, {params: {}} );
            setItems(response);
            window.scrollTo(0, 0);
        };
        getDetails();
    }, [type, id]);

    return (
        <div className="media-details">
            {
                item && (
                    <>
                        <div className="media-details__header container">
                            <MediaHeader item={item} mediaType={type} />
                        </div>

                        <div className="media-details__casts container">
                            <div className="section">
                                <div className="section__header">
                                    <h2 className="section__title">Cast</h2>
                                </div>
                                <CastSwiper mediaType={type} mediaId={id} />
                            </div>
                        </div>
                        
                        <div className="media-details__images container">
                            <div className="section">
                                <div className="section__header">
                                    <h2 className="section__title">Images</h2>
                                </div>
                                <ImageSwiper mediaId={id} mediaType={type} title={item.title || item.name} />
                            </div>
                        </div>

                        <div className="media-details__trailers container">
                            <div className="section">
                                <div className="section__header">
                                    <h2 className="section__title">Trailers</h2>
                                </div>
                                <VideoSwiper mediaType={type} mediaId={id}/>
                            </div>
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