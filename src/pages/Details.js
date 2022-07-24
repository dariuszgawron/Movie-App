import React, {useEffect, useState} from "react";
import {useParams} from 'react-router';

import tmdbApi from "../api/tmdbApi";
import tmdbConfig from "../api/tmdbConfig";

const Details = () => {
    const {type,id} = useParams();

    const [item,setItems] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            let response = await tmdbApi.getMediaDetails(type,id,{params: {}} );
            setItems(response);
        };
        getDetails();
    }, [type,id]);

    return (
        <div>
            Details
        </div>
    )
};

export default Details;