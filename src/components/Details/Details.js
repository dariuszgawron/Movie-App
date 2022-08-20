import React, { useEffect, useState, Suspense } from "react";
import { useParams } from 'react-router';

import tmdbApi from "../../api/tmdbApi";
// import tmdbConfig, {imageSize } from "../../api/tmdbConfig";

import './Details.scss';

// import MediaHeader from "../MediaHeader/MediaHeader";
// import CastSwiper from "../CastSwiper/CastSwiper";
// import ImageSwiper from "../ImageSwiper/ImageSwiper";
// import VideoSwiper from "../VideoSwiper/VideoSwiper";
// import MediaSwiper from "../MediaSwiper/MediaSwiper";
// import ImageModal from "../ImageModal/ImageModal";
const MediaHeader = React.lazy(() => import("../MediaHeader/MediaHeader"));
const CastSwiper = React.lazy(() => import("../CastSwiper/CastSwiper"));
const ImageSwiper = React.lazy(() => import("../ImageSwiper/ImageSwiper"));
const VideoSwiper = React.lazy(() => import("../VideoSwiper/VideoSwiper"));
const MediaSwiper = React.lazy(() => import("../MediaSwiper/MediaSwiper"));
const ImageModal = React.lazy(() => import("../ImageModal/ImageModal"));

const Details = () => {
    const {type, id} = useParams();
    const [item, setItems] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            let response = await tmdbApi.getMediaDetails(type, id, {params: {}} );
            setItems(response);
            window.scrollTo(0, 0);
        };
        getDetails();
    }, [type, id]);

    return (
        <div className="media-details">
            {
                item && (
                    <>
                        <div className="media-details__header container">
                            <Suspense>
                                <MediaHeader item={item} mediaType={type} />
                            </Suspense>
                        </div>

                        <div className="media-details__casts container">
                            <div className="section">
                                <div className="section__header">
                                    <h2 className="section__title">Cast</h2>
                                </div>
                                <div className="section__content">
                                    <Suspense>
                                        <CastSwiper mediaType={type} mediaId={id} />
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                        
                        <div className="media-details__images container">
                            <div className="section">
                                <div className="section__header">
                                    <h2 className="section__title">Images</h2>
                                </div>
                                <div className="section__content">
                                    <Suspense>
                                        <ImageSwiper mediaId={id} mediaType={type} title={item.title || item.name} />
                                    </Suspense>
                                </div>
                                
                            </div>
                        </div>

                        <div className="media-details__trailers container">
                            <div className="section">
                                <div className="section__header">
                                    <h2 className="section__title">Trailers</h2>
                                </div>
                                <div className="section__content">
                                    <Suspense>
                                        <VideoSwiper mediaType={type} mediaId={id}/>
                                    </Suspense>
                                </div>
                            </div>
                        </div>

                        <div className="media-details__similar container">
                            <div className="section">
                                <div className="section__header">
                                    <h2 className="section__title">Similar</h2>
                                </div>
                                <div className="section__content">
                                    <Suspense>
                                        <MediaSwiper mediaType={type} mediaCategory="similar" mediaId={id}/>
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                        <Suspense>
                            <ImageModal item={item}/>
                        </Suspense>
                    </>
                )
            }
        </div>
    )
};

export default Details;