import React from "react";
import PropTypes from 'prop-types';

import MediaSearch from "../MediaSearch/MediaSearch";

import "./MediaFilter.scss";

const MediaFilter = props => {
    return (
        <div className="media-filter">
            <div className="media-filter__search">
                <MediaSearch mediaType={props.mediaType} keyword={props.keyword} mediaTypeClass="media-search__select--hidden"/>
            </div>
        </div>
    )
};

MediaFilter.propTypes = {
    mediaType: PropTypes.string.isRequired,
    keyword: PropTypes.string
};

export default MediaFilter;