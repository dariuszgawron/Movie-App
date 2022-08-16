import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import { mediaTypes} from "../../api/tmdbApi";

import './MediaSearch.scss';

const MediaSearch = props => {
    const navigate = useNavigate();
    const { type } = useParams();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const searchKeyword = useCallback(
        () => {
            console.log(type);
            if(keyword.trim().length > 0) {
                navigate(`/${mediaTypes[type]}/search/${keyword}`);
            }
        },
        [navigate, type, keyword]
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
            <button className="media-search__button" onClick={searchKeyword}>
                <i className='media-search__button-icon bx bx-search' ></i>
            </button>
        </div>
    )
};

MediaSearch.propTypes = {
    keyword: PropTypes.string,
    mediaTypeClass: PropTypes.string
};

export default MediaSearch;