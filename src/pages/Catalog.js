import React from "react";
import { useParams } from "react-router";

import {mediaTypes} from '../api/tmdbApi';

import PageHeader from "../components/PageHeader/PageHeader";
import MediaFilter from "../components/MediaFilter/MediaFilter";
import MediaList from "../components/MediaList/MediaList";

const Catalog = () => {
    const {type, keyword} = useParams();

    return (
        <main className="main container">
            <PageHeader>
                {(type===mediaTypes.movie) ? 'Movies' : 'Series'}
            </PageHeader>
            <MediaFilter mediaType={type} keyword={keyword} />
            <div className="section">
                <MediaList mediaType={type} keyword={keyword} />
            </div>
        </main>
    )
};

export default Catalog;