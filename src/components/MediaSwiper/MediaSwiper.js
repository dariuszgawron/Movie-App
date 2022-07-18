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

            if(props.type === 'movie') {
                switch(props.category) {
                    case 'popular':
                        response = await tmdbApi.getPopularMovies({queryParams});
                        break;
                    case 'topRated':
                        response = await tmdbApi.getTopRatedMovies({queryParams});
                        break;
                    case 'upcoming':
                        response = await tmdbApi.getUpcomingMovies({queryParams});
                        break;
                    default:
                        response = await tmdbApi.getSimilarMovies(props.id);
                        break;
                }
            } else {
                switch(props.category) {
                    case 'popular':
                        response = await tmdbApi.getPopularTvShows({queryParams});
                        break;
                    case 'topRated':
                        response = await tmdbApi.getTopRatedTvShows({queryParams});
                        break;
                    case 'onTheAir':
                        response = await tmdbApi.getOnTheAirTvShows({queryParams});
                        break;
                    default:
                        response = await tmdbApi.getSimilarTvShows(props.id);
                        break;
                }
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