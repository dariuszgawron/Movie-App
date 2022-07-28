import React from "react";

import './Search.scss';

const Search = props => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onchange={props.onChange ? (event) => props.onChange(event) : null}
        />
    )
};

export default Search;