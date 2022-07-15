import axiosConfig from './axiosConfig';

const tmdbApi = {
    // MOVIES
    getPopularMovies: (params) => {
        return axiosConfig.get('movie/popular',params);
    },
    getTopRatedMovies: (params) => {
        return axiosConfig.get('movie/top_rated',params);
    },
    getUpcomingMovies: (params) => {
        return axiosConfig.get('movie/upcoming',params);
    },
    getMovieDetails: (id,params) => {
        return axiosConfig.get(`movie/${id}`,params);
    },
    getMovieCredits: (id,params) => {
        return axiosConfig.get(`movie/${id}/credits`,params);
    },
    getMovieImages: (id,params) => {
        return axiosConfig.get(`movie/${id}/images`,params);
    },
    getMovieVideos: (id,params) => {
        return axiosConfig.get(`movie/${id}/videos`,params);
    },
    getSimilarMovies: (id,params) => {
        return axiosConfig.get(`movie/${id}/similar`,params);
    },
    searchMovies: (params) => {
        return axiosConfig.get('search/movie',params);
    },

    // TV SHOWS
    getPopularTvShows: (params) => {
        return axiosConfig.get('tv/popular',params);
    },
    getTopRatedTvShows: (params) => {
        return axiosConfig.get('tv/top_rated',params);
    },
    getOnTheAirTvShows: (params) => {
        return axiosConfig.get('tv/on_the_air',params);
    },
    getTvShowDetails: (id,params) => {
        return axiosConfig.get(`tv/${id}`,params);
    },
    getTvShowCredits: (id,params) => {
        return axiosConfig.get(`tv/${id}/credits`,params);
    },
    getTvShowImages: (id,params) => {
        return axiosConfig.get(`tv/${id}/images`,params);
    },
    getTvShowVideos: (id,params) => {
        return axiosConfig.get(`tv/${id}/videos`,params);
    },
    getSimilarTvShows: (id,params) => {
        return axiosConfig.get(`tv/${id}/similar`,params);
    },
    searchTvShows: (params) => {
        return axiosConfig.get('search/tv',params);
    }
}

export default tmdbApi;