import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import axiosConfig from '../../api/axiosConfig';

import './MediaSwiper.css';
import tmdbConfig, {imageSize} from '../../api/tmdbConfig';

const MediaSwiper = props => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const getMedias = async () => {
            let response = null;
            const queryParams = {};

            if(props.mediaCategory !== 'similar') {
                response = await tmdbApi.getMediaList(props.mediaType,props.mediaCategory, {queryParams});
            } else {
                response = await tmdbApi.getSimilarMedia(props.mediaType, props.mediaId);
            };

            setMedia(response.results);
        };
        getMedias();

    }, []);

    return (
        <div className='media-swiper'>
            {
                media.map((media,index) => (
                    <div key={index}>
                        <img src={tmdbConfig.imageUrl(imageSize.w500,media.poster_path)} alt='' />
                    </div>
                ))
            }
        </div>
    )
};

MediaSwiper.propTypes = {
    mediaType: PropTypes.string.isRequired,
    mediaCategory: PropTypes.string.isRequired
}

export default MediaSwiper;