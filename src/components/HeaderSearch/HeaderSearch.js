import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

import { mediaTypes} from "../../api/tmdbApi";

import './HeaderSearch.scss';

const HeaderSearch = props => {
    const navigate = useNavigate();
    const { category } = useParams();
    const inputRef = useRef(null);
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const [mediaType, setMediaType] = useState(category ? mediaTypes[category] : 'movie');
    const mediaTypeClass = props.mediaTypeClass || '';

    const searchKeyword = useCallback(
        () => {
            if(keyword.trim().length > 0) {
                navigate(`/${mediaType}/search/${keyword}`);
            }
            // inputRef.current.value='';
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
        <div className="header-search">
            <div className="header-search__box">
                <input
                    className="header-search__input"
                    ref={inputRef}
                    type='search'
                    placeholder="Search media"
                    value={keyword}
                    onChange={(event) => setKeyword(event.target.value)}
                />
                <select
                    className={`header-search__select ${mediaTypeClass}`}
                    placeholder="Choose media type"
                    value={mediaType}
                    onChange={event => setMediaType(event.target.value)}
                >
                    <option className="header-search__select-option" value="movie">movie</option>
                    <option className="header-search__select-option" value="tv">series</option>
                </select>
            </div>
            <button className="header-search__button" onClick={searchKeyword}>
                <i className='header-search__button-icon bx bx-search' ></i>
            </button>
        </div>
    )
};

HeaderSearch.propTypes = {
    keyword: PropTypes.string,
    mediaTypeClass: PropTypes.string
};

export default HeaderSearch;