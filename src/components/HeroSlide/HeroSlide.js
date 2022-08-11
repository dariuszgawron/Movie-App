import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";
import tmdbApi from "../../api/tmdbApi";

import Button from "../Button/Button";

import './HeroSlide.scss';

const HeroSlide = props => {
    let navigate = useNavigate();

    const [details,setDetails] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
            const response = await tmdbApi.getMediaDetails('movie',props.item.id,{params: {}});
            setDetails(response);
        };
        getDetails();
    });

    const backgroundImage = tmdbConfig.imageUrl(imageSize.original, (props.item.backdrop_path || props.item.poster_path));
    const heroSlideClass = props.isActive ? 'hero-slide--active' : '';
    const releaseYear = new Date(props.item.release_date).getFullYear();
    const runtime = `${Math.floor(details.runtime/60) || 0}h ${details.runtime%60 || 0}m`;

    return (
        <div className={`hero-slide ${heroSlideClass}`}>
            <img className="hero-slide__background" src={backgroundImage} alt={`${props.item.title} - background`} />
            <div className="hero-slide__overlay"></div>
            <div className="hero-slide__content container">
                <div className="hero-slide__poster">
                    <img className="hero-slide__poster-image" src={tmdbConfig.imageUrl(imageSize.w500,props.item.poster_path)} alt={`${props.item.title} - poster`} />
                </div>
                <div className="hero-slide__info">
                    <h2 className="hero-slide__title">
                        {props.item.title}
                    </h2>
                    <div className="hero-slide__details">
                        {/* <span className="hero-slide__original-title">
                            {props.item.original_title}
                        </span> */}
                        <span className="hero-slide__release-year">
                            {releaseYear}
                        </span>
                        <span className="hero-slide__runtime">
                            {runtime}
                        </span>
                    </div>
                    
                    <div className="hero-slide__rate">
                        <i className='hero-slide__rate-icon bx bxs-star'></i>
                        <span className="hero-slide__rate-average">
                            {props.item.vote_average}
                        </span>
                        <span className="hero-slide__rate-count">
                            {props.item.vote_count}
                        </span>
                    </div>
                    <div className="hero-slide__description">
                        {props.item.overview}
                    </div>
                    <div className="hero-slide__buttons">
                        <Button onClick={() => navigate(`/movie/${props.item.id}`)}>
                            <i className='button__icon bx bx-show'></i>
                            See more
                        </Button>
                        <Button 
                            className="button--danger"
                            onClick={() => navigate(`/movie/${props.item.id}`)} 
                        >
                            <i className='button__icon bx bx-play-circle'></i>
                            Watch trailer
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroSlide;