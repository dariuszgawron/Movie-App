import React from "react";
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";
import { mediaTypes } from "../../api/tmdbApi";

import './MediaCard.css';

const MediaCard = props => {
    const linkUrl = `/${mediaTypes[props.mediaType]}/${props.item.id}`;
    const movieCover = tmdbConfig.imageUrl(imageSize.w500,props.item.poster_path || props.item.backdrop_path);
    return (
        <div className="media__card">
            <Link className="media__card-link" to={linkUrl}>
                <div className="media__card-cover">
                    <img className="media__card-img" src={movieCover} alt="" />
                </div>
                <div className="media__card-data">
                    <h3 className="media__card-title">
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
