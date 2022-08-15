import React from "react";
import PropTypes from 'prop-types';

import './InputSearch.scss';

const Search = props => {
    return (
        <input
            className="input-search"
            type={props.type || 'search'}
            placeholder={props.placeholder || ''}
            value={props.value || ''}
            onchange={props.onChange ? (event) => props.onChange(event) : null}
        />
    )
};

Search.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Search;