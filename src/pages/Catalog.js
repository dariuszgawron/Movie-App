import React from "react";
import { useParams } from "react-router";

import {mediaTypes} from '../api/tmdbApi';

import PageHeader from "../components/PageHeader/PageHeader";
import MediaList from "../components/MediaList/MediaList";

const Catalog = () => {
    const {type} = useParams();

    return (
        <>
            <PageHeader>
                {(type===mediaTypes.movie) ? 'Movies' : 'Tv Shows'}
            </PageHeader>
            <div className="container">
                <div className="section">
                    <MediaList mediaType={type}/>
                </div>
            </div>
        </>
    )
};

export default Catalog;