import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';
import "swiper/css";
import "swiper/css/navigation";

import tmdbApi from "../../api/tmdbApi";
import tmdbConfig, { imageSize } from "../../api/tmdbConfig";

import './CastSwiper.scss';

const CastSwiper = props => {
    const [casts, setCasts] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const reloadImage = async (event) => {
        event.onerror = null;
        const imageSrc = tmdbConfig.imageUrl(imageSize.w500, event.target.getAttribute('data-filepath').substring(1));
        event.target.setAttribute('src', imageSrc);
    };

    useEffect(() => {
        const getCasts = async () => {
            const response = await tmdbApi.getMediaCredits(props.mediaType, props.mediaId);
            setCasts(response.cast.slice(0, 20));
        };
        getCasts();
    }, [props.mediaType, props.mediaId]);

    return (
        <div className="casts">
            {
                casts && casts.length ? 
                (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={15}
                        slidesPerView={3}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        breakpoints= {{
                            789: {
                                slidesPerView: 4
                            },
                            922: {
                                slidesPerView: 5
                            },
                            1100: {
                                slidesPerView: 6
                            },
                            1450: {
                                slidesPerView: 7
                            }
                        }}
                    >
                        {
                            casts.map((cast,index) => (
                                <SwiperSlide key={index}>
                                    <div className="casts__item" key={index}>
                                        {
                                            (cast.profile_path!==null) ? (
                                                <img className="casts__item-image" src={tmdbConfig.imageUrl(imageSize.w500, cast.profile_path)} alt={`${cast.name} / ${cast.character}`} data-filepath={cast.profile_path} onError={reloadImage} />
                                            ) : (
                                                <div className="casts__item-backdrop">
                                                    <i className='casts__item-backdrop-icon bx bx-image'></i>
                                                </div>
                                            )
                                        }
                                        <p className="casts__item-name">{cast.name}</p>
                                        <p className="casts__item-character">{cast.character}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <div className="casts__navigation casts__navigation--prev" ref={navigationPrevRef}>
                            <i className='casts__navigation-icon bx bx-chevron-left'></i>
                        </div>
                        <div className="casts__navigation casts__navigation--next" ref={navigationNextRef}>
                            <i className='casts__navigation-icon bx bx-chevron-right'></i>
                        </div>
                    </Swiper>
                ) : (
                    <div className="casts__info">
                        <i className='casts__info-icon bx bx-error-circle'></i>
                        <span className="casts__info-text">No casts for the title</span>
                    </div>
                )
            }
        </div>
    )
};

CastSwiper.propTypes = {
    mediaType: PropTypes.string.isRequired,
    mediaId: PropTypes.string.isRequired
};

export default CastSwiper;