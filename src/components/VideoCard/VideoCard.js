import React, { useRef } from "react";
import PropTypes from 'prop-types';

import tmdbConfig from "../../api/tmdbConfig";

import './VideoCard.scss';

const VideoCard = props => {
    const video = props.item;
    const iframeRef = useRef(null);

    // useEffect(() => {
    //     const iframeHeight = `${iframeRef.current.offsetWidth * 9 / 16} px`;
    //     iframeRef.current.setAttribute('height', iframeHeight);
    // });

    return (
        <div className="trailer-card">
            <iframe 
                className="trailer-card__video"
                src={tmdbConfig.videoUrl(video.key)}
                ref={iframeRef}
                title={video.name}
                allowFullScreen
            >
            </iframe>
            <div className="trailer-card__title">
                {video.name}
            </div>
        </div>
    )
};

VideoCard.propTypes = {
    item: PropTypes.object
};

export default VideoCard;