import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import tmdbApi, { mediaTypes, movieCategories, tvCategories } from "../../api/tmdbApi";

import MediaCard from "../MediaCard/MediaCard";
import Button from "../Button/Button";

import './MediaList.scss';

const MediaList = props => {
    const [media, setMedia] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getMedia = async () => {
            let response = null;
            let queryParams = {};
            if(props.keyword===undefined) {
                const mediaCategory = (props.mediaType===mediaTypes.movie) ? movieCategories.popular : tvCategories.popular;
                response = await tmdbApi.getMediaList(props.mediaType, mediaCategory, {queryParams});
            } else {
                queryParams = {
                    query: props.keyword
                };
                response = await tmdbApi.searchMedia(props.mediaType, {params: queryParams});
            }
            setMedia(response.results);
            setTotalPages(response.total_pages);
        };
        getMedia();
    }, [props.mediaType, props.keyword]);

    const loadMore = async () => {
        let response = null;
        const queryParams = {
            page: currentPage+1
        };
        if(props.keyword===undefined) {
            const mediaCategory = (props.mediaType===mediaTypes.movie) ? movieCategories.popular : tvCategories.popular;
            response = await tmdbApi.getMediaList(props.mediaType, mediaCategory, {params: queryParams});
        } else {
            queryParams.query = props.keyword;
            response = await tmdbApi.searchMedia(props.mediaType, {params: queryParams});
        }
        setMedia([...media,...response.results]);
        setCurrentPage(currentPage+1);
    }

    return (
        <div className="media-list">
            {
                media && media.length ? (
                    <div className="media-list__items">
                    {
                        media.map((item, index) => {
                            return <MediaCard mediaType={props.mediaType} item={item} key={index} />
                        })
                    }
                    </div>
                ) : (
                    <div className="media-list__empty">
                        <i class='media-list__empty-icon bx bx-sad'></i>
                        <p className="media-list__empty-text">
                            Oops, it looks like nothing was found for <span className="media-list__empty-text--important">"{props.keyword}"</span>.<br />
                            Please try to search for something else.
                        </p>
                    </div>
                )
            }
            
            {
                (currentPage < totalPages)
                ? (
                    <div className="media-list__button">
                        <Button onClick={loadMore}>Load more</Button>
                    </div>
                )
                : null
            }
        </div>
    )
};

MediaList.propTypes = {
    mediaType: PropTypes.string.isRequired,
    keyword: PropTypes.string
};

export default MediaList;