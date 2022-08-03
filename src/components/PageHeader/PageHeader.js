import React from "react";

import './PageHeader.scss';

const PageHeader = props => {
    return (
        <div className="page-header container">
            <h2 className="page-header__title page-header__title--center">
                {props.children}
            </h2>

        </div>
    )
};

export default PageHeader;