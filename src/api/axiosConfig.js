import axios from 'axios';
// import queryString from 'query-string';

import tmdbConfig from './tmdbConfig';

const axiosConfig = axios.create({
    baseURL: tmdbConfig.baseApiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    // paramsSerializer: (params) => queryString.stringify(params, {'api_key': tmdbConfig.apiKey})
});

axiosConfig.interceptors.request.use(config => config);

axiosConfig.interceptors.response.use(
response => {
    if(response && response.data) {
        return response.data;
    }
    return response;
},
error => {
    throw error;
});

export default axiosConfig;