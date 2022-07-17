import React, {useState, useEffect} from 'react';
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

            if(props.category === 'movie') {
                switch(props.type) {
                    case 'popular':
                        response = await tmdbApi.getPopularMovies({queryParams});
                        break;
                    default:
                        break;
                }
            } else {
                switch(props.type) {
                    case 'popular':
                        response = await tmdbApi.getPopularTvShows({queryParams});
                        break;
                    default:
                        break;
                }
            };

            setMedias(response.results);
        }
        

    }, []);

    return (
        <diV>

        </diV>
    )
};

export default MediaSwiper;