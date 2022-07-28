import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import tmdbConfig, { imageSize } from "../../api/tmdbConfig";

import './CastSwiper.scss';

const CastSwiper = () => {
    const {type, id} = useParams();
    const [casts,setCasts] = useState([]);

    useEffect(() => {
        const getCasts = async () => {
            const response = await tmdbApi.getMediaCredits(type,id);
            setCasts(response.cast.slice(0,20));
        };
        getCasts();
    }, [type,id]);

    return (
        <div className="casts">
            {
                casts.map((cast,index) => (
                    <div className="casts__item" key={index}>
                        <img src={tmdbConfig.imageUrl(imageSize.w500,cast.profile_path || '')} alt='' />
                        <p className="casts__item-name">{cast.name}</p>
                        <p className="casts__item-character">{cast.character}</p>
                    </div>
                ))
            }
        </div>
    )
};

export default CastSwiper;