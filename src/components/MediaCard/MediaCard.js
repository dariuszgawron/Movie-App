import React from "react";
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";
import { mediaTypes } from "../../api/tmdbApi";

import './MediaCard.scss';

const MediaCard = props => {
    const linkUrl = `/${mediaTypes[props.mediaType]}/${props.item.id}`;
    const movieCover = tmdbConfig.imageUrl(imageSize.w500,props.item.poster_path || props.item.backdrop_path);
    return (
        <div className="media-card swiper-slide">
            <Link className="media-card__link" to={linkUrl}>
                <img className="media-card__img" src={movieCover} alt="" />
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
    mediaType: PropTypes.string.isRequired
};

export default MediaCard;
