import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = props => {
    const buttonClass = props.className || '';
    const onClickEvent = props.onClick ? () => props.onClick() : null;
    return (
        <button className={`button ${buttonClass}`} onClick={onClickEvent}>
            {props.children}
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func
};

export default Button;