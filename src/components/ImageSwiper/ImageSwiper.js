import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';
import PropTypes from 'prop-types';

import "swiper/css";
import "swiper/css/navigation";

import tmdbConfig, {imageSize} from "../../api/tmdbConfig";
import tmdbApi from "../../api/tmdbApi";

import './ImageSwiper.scss';

const ImageSwiper = props => {
    const [images, setImages] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
 
    useEffect(() => {
        const getImages = async () => {
            const response = await tmdbApi.getMediaImages(props.mediaType, props.mediaId);
            setImages(response.backdrops);
        };
        getImages();
    }, [props.mediaType, props.mediaId]);
    
    return (
        <div className="images">
            {
                images.length>0 ?
                (
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={15}
                        slidesPerView={2}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current
                        }}
                        breakpoints= {{
                            786: {
                                slidesPerView: 3
                            },
                            1200: {
                                slidesPerView: 4
                            }
                        }}
                    >
                    {
                        images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img className="images__card" key={index} src={tmdbConfig.imageUrl(imageSize.original, image.file_path)} alt={`${props.title} - gallery`} />
                            </SwiperSlide>
                        ))
                    }
                        <div className="images__navigation images__navigation--prev" ref={navigationPrevRef}>
                            <i className='images__navigation-icon bx bx-chevron-left'></i>
                        </div>
                        <div className="images__navigation images__navigation--next" ref={navigationNextRef}>
                            <i className='images__navigation-icon bx bx-chevron-right'></i>
                        </div>
                    </Swiper>
                ) : (
                    <div className="images__info">
                        <i className='images__info-icon bx bx-error-circle'></i>
                        <span className="images__info-text">No images for the title</span>
                    </div>
                )
            }
            
        </div>
    )
};

ImageSwiper.propTypes = {
    mediaType: PropTypes.string.isRequired,
    mediaId: PropTypes.string.isRequired,
    title: PropTypes.string
};

export default ImageSwiper;