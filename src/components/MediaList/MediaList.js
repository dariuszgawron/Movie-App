import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import tmdbApi, { mediaTypes, movieCategories, tvCategories } from "../../api/tmdbApi";

import MediaCard from "../MediaCard/MediaCard";
import MediaSearch from "../MediaSearch/MediaSearch";
import Button from "../Button/Button";

import './MediaList.scss';

const MovieList = props => {
    const [media,setMedia] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1);

    const {keyword} = useParams();

    useEffect(() => {
        const getMedia = async () => {
            let response = null;
            let queryParams = {};
            if(keyword===undefined) {
                const mediaCategory = (props.mediaType===mediaTypes.movie) ? movieCategories.popular : tvCategories.popular;
                response = await tmdbApi.getMediaList(props.mediaType, mediaCategory, {queryParams});
            } else {
                queryParams = {
                    query: keyword
                };
                response = await tmdbApi.searchMedia(props.mediaType, {params: queryParams});
            }
            setMedia(response.results);
            setTotalPages(response.total_pages);
        };
        getMedia();
    }, [props.mediaType,keyword]);

    const loadMore = async () => {
        let response = null;
        const queryParams = {
            page: currentPage+1
        };
        if(keyword===undefined) {
            const mediaCategory = (props.mediaType===mediaTypes.movie) ? movieCategories.popular : tvCategories.popular;
            response = await tmdbApi.getMediaList(props.mediaType, mediaCategory, {params: queryParams});
        } else {
            queryParams.query = keyword;
            response = await tmdbApi.searchMedia(props.mediaType, {params: queryParams});
        }
        setMedia([...media,...response.results]);
        setCurrentPage(currentPage+1);
    }

    return (
        <>
            <div className="media-section">
                <MediaSearch mediaType={props.mediaType} keyword={keyword} />
            </div>
            <div className="media-list">
                {
                    media.map((item, index) => {
                        return <MediaCard mediaType={props.mediaType} item={item} key={index} />
                    })
                }
            </div>
            {
                (currentPage<totalPages)
                ? (
                    <div className="media-button">
                        <Button onClick={loadMore}>Load more</Button>
                    </div>
                )
                : null
            }
        </>
    )
};

export default MovieList;