import React from "react";
import PropTypes from 'prop-types';

import './PageHeader.scss';

const PageHeader = props => {
    return (
        <div className="page-header">
            <h2 className="page-header__title page-header__title--center">
                {props.children}
            </h2>
        </div>
    )
};

PageHeader.propTypes = {
    children: PropTypes.string.isRequired
};

export default PageHeader;