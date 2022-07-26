export const imageSize = {
    original: 'original',
    w500: 'w500'
};

const tmdbConfig = {
    baseApiUrl: 'https://api.themoviedb.org/3/',
    apiKey: process.env.REACT_APP_TMDB_API_KEY,
    imageUrl: (imgSize,imgPath) => `https://image.tmdb.org/t/p/${imgSize}/${imgPath}`,
    videoUrl: videoKey => `https://www.youtube.com/embed/${videoKey}`
};

export default tmdbConfig;