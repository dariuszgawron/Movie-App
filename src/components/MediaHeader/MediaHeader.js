import React from "react";

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";

import "./MediaHeader.scss";

const MediaHeader = props => {
    const item = props.item;
    const runtime = item.runtime || item.episode_run_time;
    const releaseDate = new Date(item.release_date || item.first_air_date);

    return (
        <div className="media-header">
            <div className="media-header__rate">
                {`${item.vote_average.toFixed(1)}`}
            </div>
            <img className="media-header__background" src={tmdbConfig.imageUrl(imageSize.original,item.backdrop_path || item.poster_path)} alt='' />
            <div className="media-header__content">
                <div className="media-header__poster">
                    <img className="media-header__poster-image" src={tmdbConfig.imageUrl(imageSize.original,item.poster_path || item.backdrop_path)} alt='' />
                </div>
                <div className="media-header__info">
                    <div className="media-header__type">
                        {props.mediaType==='tv' ? 'series' : 'movie'}
                    </div>
                    <div className="media-header__title">
                        <h1 className="media-header__title-text">{item.title || item.name}</h1>
                    </div>
                    <div className="media-header__genres">
                    {
                        item.genres && item.genres.map((genre,index) => (
                            <span className="media-header__genres-item" key={index}>{genre.name}</span>
                        ))
                    }
                    </div>
                    <div className="media-header__group">
                        <div className="media-header__publish-date">
                            {releaseDate.getFullYear() || '-'}
                        </div>
                        <div className="media-header__runtime">
                            {`${Math.floor(runtime/60) || 0}h ${runtime%60 || 0}m`}
                        </div>
                    </div>
                    
                    <p className="media-header__overview">
                        {item.overview}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default MediaHeader;