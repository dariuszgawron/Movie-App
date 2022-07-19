import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import tmdbApi from '../../api/tmdbApi';
import axiosConfig from '../../api/axiosConfig';

import './MediaSwiper.css';

const MediaSwiper = props => {
    const [medias, setMedias] = useState([]);

    useEffect(() => {
        const getMedias = async () => {
            let response = null;
            const queryParams = {};

            if(props.mediaCategory !== 'similar') {
                response = await tmdbApi.getMediaList(props.mediaType,props.mediaCategory, {queryParams});
            } else {
                response = await tmdbApi.getSimilarMedia(props.mediaType, props.mediaId);
            };

            setMedias(response.results);
        };
        getMedias();

    }, []);

    return (
        <div className='media-swiper'>
            {
                medias.map((media,index) => (
                    <div>
                        'test'
                    </div>
                ))
            }
        </div>
    )
};

MediaSwiper.propTypes = {
    type: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default MediaSwiper;