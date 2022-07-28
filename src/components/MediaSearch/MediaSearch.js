import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { mediaTypes} from "../../api/tmdbApi";

import './MediaSearch.scss';

const MediaSearch = props => {
    const navigate = useNavigate();

    const [keyword,setKeyword] = useState(props.keyword ? props.keyword : '');

    const searchKeyword = useCallback(
        () => {
            if(keyword.trim().length > 0) {
                navigate(`/${mediaTypes[props.mediaType]}/search/${keyword}`);
            }
        },
        [keyword,props.mediaType,navigate]
    );

    useEffect(() => {
        const handleEnter = (event) => {
            event.preventDefault();
            if(event.keyCode === 13) {
                searchKeyword();
            }
            
        };
        document.addEventListener('keyup',handleEnter);
        return () => {
            document.removeEventListener('keyup',handleEnter);
        }
    }, [keyword,searchKeyword])

    return (
        <div className="media-search">
            <input
                type='text'
                placeholder="Search media"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
            />
            <button className="search-btn" onClick={searchKeyword}>Search</button>
        </div>
    )
};

export default MediaSearch;