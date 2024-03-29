import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";
import { mediaTypes } from "../../api/tmdbApi";

import './MediaCard.scss';

const MediaCard = props => {
    const linkUrl = `/${mediaTypes[props.mediaType]}/${props.item.id}`;
    const movieCover = tmdbConfig.imageUrl(imageSize.w500, props.item.poster_path || props.item.backdrop_path);
    const reloadImage = async (event) => {
        event.onerror = null;
        const imageSrc = tmdbConfig.imageUrl(imageSize.w500, event.target.getAttribute('data-filepath').substring(1));
        event.target.setAttribute('src', imageSrc);
    };

    return (
        <div className="media-card swiper-slide">
            <Link className="media-card__link" to={linkUrl}>
                {
                    (props.item.poster_path!==null | props.item.backdrop_path!==null) ? (
                        <img className="media-card__poster" src={movieCover} alt={`${props.item.title || props.item.name}`} data-filepath={props.item.poster_path || props.item.backdrop_path} onError={reloadImage} />
                    ) : (
                        <div className="media-card__backdrop">
                            <i className='media-card__backdrop-icon bx bx-image'></i>
                        </div>
                    )
                }
                <div className="media-card__data">
                    <div className="media-card__rate">
                        <i className='media-card__rate-icon bx bxs-star'></i>
                        <span className="media-card__rate-text">
                            {props.item.vote_average.toFixed(1)}
                        </span>
                    </div>
                    <h3 className="media-card__title">
                        {props.item.title || props.item.name}
                    </h3>
                </div>
            </Link>
        </div>
    )
}

MediaCard.propTypes = {
    mediaType: PropTypes.string.isRequired,
    item: PropTypes.object.isRequired
};

export default MediaCard;