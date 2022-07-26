import React, { useEffect, useRef } from "react";

import tmdbConfig from "../../api/tmdbConfig";

import './VideoCard.css';

const VideoCard = props => {
    const video = props.item;
    const iframeRef = useRef(null);

    useEffect(() => {
        const iframeHeight = `${iframeRef.current.offsetWidth * 9 / 16} px`;
        iframeRef.current.setAttribute('height',iframeHeight);
    });

    return (
        <div className="trailer">
            <iframe 
                src={tmdbConfig.videoUrl(video.key)}
                ref={iframeRef}
                title={video.name}
            >
            </iframe>
            <div className="iframe__title">
                {video.name}
            </div>
        </div>
    )
};

export default VideoCard;