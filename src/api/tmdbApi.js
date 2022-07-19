import axiosConfig from './axiosConfig';

export const mediaTypes = {
    'movie': 'movie',
    'tv': 'tv'
};

export const movieCategories = {
    'popular': 'popular',
    'top_rated': 'top_rated',
    'upcoming': 'upcoming',
    'latest': 'latest',
    'now_playing': 'now_playing'
};

export const tvCategories = {
    'popular': 'popular',
    'top_rated': 'top_rated',
    'on_the_air': 'on_the_air',
    'latest': 'latest',
    'airing_today': 'airing_today'
};

const tmdbApi = {
    getMediaList: (mediaType,mediaCategory,queryParams) => {
        const category = (mediaType==='movie' ? movieCategories[mediaCategory] : tvCategories[mediaCategory]);
        const url = `${mediaTypes[mediaType]}/${category}`;
        return axiosConfig.get(url, queryParams);
    },
    getMediaVideos: (mediaType,mediaId) => {
        const url = `${mediaTypes[mediaType]}/${mediaId}/videos`;
        return axiosConfig.get(url, {params: {}});
    },
    getMediaImages: (mediaType, mediaId) => {
        const url = `${mediaTypes[mediaType]}/${mediaId}/images`;
        return axiosConfig.get(url, {params: {}});
    },
    searchMedia: (mediaType, queryParams) => {
        const url = `search/${mediaTypes[mediaType]}`;
        return axiosConfig.get(url, queryParams);
    },
    getMediaDetails: (mediaType, mediaId, queryParams) => {
        const url = `${mediaTypes[mediaType]}/${mediaId}`;
        return axiosConfig.get(url, queryParams);
    },
    getMediaCredits: (mediaType, mediaId) => {
        const url = `${mediaTypes[mediaType]}/${mediaId}/credits`;
        return axiosConfig.get(url, {params: {}});
    },
    getSimilarMedia: (mediaType, mediaId) => {
        const url = `${mediaTypes[mediaType]}/${mediaId}/similar`;
        return axiosConfig.get(url, {params: {}});
    }
}

export default tmdbApi;