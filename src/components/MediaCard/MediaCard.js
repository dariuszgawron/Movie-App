import React from "react";
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";
import { mediaTypes } from "../../api/tmdbApi";

import './MediaCard.css';

const MediaCard = props => {
    const linkUrl = `/${mediaTypes[props.mediaType]}/${props.item.id}`;
    const movieCover = tmdbConfig.imageUrl(props.item.poster_path || props.item.backdrop_path);
    return (
        <Link to={linkUrl}>
            <div className="media-card">
                <h3 className="media-card__title">
                    {/* <img src={tmdbConfig.imageUrl(imageSize.w500,movieCover)} alt='' /> */}
                    {props.item.title || props.item.name}
                </h3>
            </div>
        </Link>
    )
}

MediaCard.propTypes = {
    mediaType: PropTypes.string.isRequired
};

export default MediaCard;
