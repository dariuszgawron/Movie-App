import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { mediaTypes} from "../../api/tmdbApi";

import './MediaSearch.scss';

const MediaSearch = props => {
    const navigate = useNavigate();
    const { category } = useParams();
    const [keyword,setKeyword] = useState(props.keyword ? props.keyword : '');
    const [mediaType,setMediaType] = useState(category ? mediaTypes[category] : 'movie');
    const mediaTypeClass = props.mediaTypeClass;

    const searchKeyword = useCallback(
        () => {
            if(keyword.trim().length > 0) {
                // navigate(`/${mediaTypes[props.mediaType]}/search/${keyword}`);
                navigate(`/${mediaType}/search/${keyword}`);
            }
        },
        [keyword, mediaType, navigate]
    );

    useEffect(() => {
        const handleEnter = (event) => {
            event.preventDefault();
            if(event.keyCode === 13) {
                searchKeyword();
            }
        };
        document.addEventListener('keyup', handleEnter);
        return () => {
            document.removeEventListener('keyup', handleEnter);
        }
    }, [keyword, searchKeyword])

    return (
        <div className="media-search">
            <input
                className="media-search__input"
                type='search'
                placeholder="Search media"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
            />
            <select
                className={`media-search__select ${mediaTypeClass}`}
                placeholder="Choose media type"
                value={mediaType}
                onChange={event => setMediaType(event.target.value)}
            >
                <option className="media-search__select-option" value="movie">movie</option>
                <option className="media-search__select-option" value="tv">series</option>
            </select>
            <button className="media-search__button" onClick={searchKeyword}>
                <i className='media-search__button-icon bx bx-search' ></i>
            </button>
        </div>
    )
};

export default MediaSearch;