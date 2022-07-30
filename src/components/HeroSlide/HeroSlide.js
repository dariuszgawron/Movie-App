import React from "react";
import {useNavigate} from "react-router-dom";

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";

import Button from "../Button/Button";

import './HeroSlide.scss';

const HeroSlide = props => {
    let navigate = useNavigate();

    const backgroundImage = tmdbConfig.imageUrl(imageSize.original, (props.item.backdrop_path || props.item.poster_path));
    const heroSlideClass = props.isActive ? 'hero-slide--active' : '';

    return (
        <div className={`hero-slide ${heroSlideClass}`}>
            <img className="hero-slide__background" src={backgroundImage} alt='' />
            <div className="hero-slide__content">
                <div className="hero-slide__poster">
                    <img src={tmdbConfig.imageUrl(imageSize.w500,props.item.poster_path)} alt='' />
                </div>
                <div className="hero-slide__info">
                    <h2 className="hero-slide__title">
                        {props.item.title}
                    </h2>
                    {props.item.original_title}

                    {props.item.release_date}
                    {props.item.vote_average}
                    {props.item.vote_count}
                    {props.item.overview}

                    <Button onClick={() => navigate(`/movie/${props.item.id}`)}>
                        See more
                    </Button>
                    <Button onClick={() => navigate(`/movie/${props.item.id}`)}>
                        Watch trailer
                    </Button>
                </div>
                
            </div>
        </div>
    )
};

export default HeroSlide;