import React from 'react';
import {Link} from 'react-router-dom';

import {mediaTypes,movieCategories,tvCategories} from '../api/tmdbApi';

import MediaSwiper from '../components/MediaSwiper/MediaSwiper';

const Home = () => {
    return (
        <main className='main'>
            <div className='main__container'>
                {/* POPULAR MOVIES */}
                <div className='section'>
                    <div className='section__header'>
                        <h2 className='section__title'>
                            Popular movies
                        </h2>
                        <Link to='/movie'>
                            View more
                        </Link>
                    </div>
                    <MediaSwiper mediaType={mediaTypes.movie} mediaCategory={movieCategories.popular}/>
                </div>
                {/* TOP RATED MOVIES */}
                <div className='section'>
                    <div className='section__header'>
                        <h2 className='section__title'>
                            Top rated movies
                        </h2>
                        <Link to='/movie'>
                            View more
                        </Link>
                    </div>
                    <MediaSwiper mediaType={mediaTypes.movie} mediaCategory={movieCategories.top_rated}/>
                </div>
                {/* POPULAR TV SHOWS */}
                <div className='section'>
                    <div className='section__header'>
                        <h2 className='section__title'>
                            Popular tv shows
                        </h2>
                        <Link to='/tv'>
                            View more
                        </Link>
                    </div>
                    <MediaSwiper mediaType={mediaTypes.tv} mediaCategory={tvCategories.popular}/>
                </div>
                {/* TOP RATED TV SHOWS */}
                <div className='section'>
                    <div className='section__header'>
                        <h2 className='section__title'>
                            Top rated movies
                        </h2>
                        <Link to='/tv'>
                            View more
                        </Link>
                    </div>
                    <MediaSwiper mediaType={mediaTypes.tv} mediaCategory={tvCategories.top_rated}/>
                </div>
            </div>
        </main>
    )
};

export default Home;