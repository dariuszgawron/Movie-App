import React from "react";

import MediaSearch from "../MediaSearch/MediaSearch";

import "./MediaFilter.scss";

const MediaFilter = props => {
    return (
        <div className="media-filter">
            <div className="media-filter__search">
                <MediaSearch mediaType={props.mediaType} keyword={props.keyword} />
            </div>
        </div>
    )
};

export default MediaFilter;