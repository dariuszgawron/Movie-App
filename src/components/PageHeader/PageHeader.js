import React from "react";

import './PageHeader.scss';

const PageHeader = props => {
    return (
        <div className="page-header">
            <h2 className="page-header__title">
                {props.children}
            </h2>

        </div>
    )
};

export default PageHeader;