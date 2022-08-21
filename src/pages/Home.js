import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { mediaTypes, movieCategories, tvCategories } from '../api/tmdbApi';

// import HeroSlider from '../components/HeroSlider/HeroSlider';
// import MediaSwiper from '../components/MediaSwiper/MediaSwiper';
const HeroSlider = React.lazy(() => import('../components/HeroSlider/HeroSlider'));
const MediaSwiper = React.lazy(() => import('../components/MediaSwiper/MediaSwiper'));

const sectionsData = [
    {
        title: 'Popular movies',
        linkMore: '/movie',
        mediaType: mediaTypes.movie,
        mediaCategory: movieCategories.popular
    },
    {
        title: 'Popular tv shows',
        linkMore: '/tv',
        mediaType: mediaTypes.tv,
        mediaCategory: tvCategories.popular
    },
    {
        title: 'Top rated movies',
        linkMore: '/movie',
        mediaType: mediaTypes.movie,
        mediaCategory: movieCategories.top_rated
    },
    {
        title: 'Top rated tv shows',
        linkMore: '/tv',
        mediaType: mediaTypes.tv,
        mediaCategory: tvCategories.top_rated
    },
    {
        title: 'Popular movies',
        linkMore: '/movie',
        mediaType: mediaTypes.movie,
        mediaCategory: movieCategories.popular
    },
    {
        title: 'Airing today tv shows',
        linkMore: '/tv',
        mediaType: mediaTypes.tv,
        mediaCategory: tvCategories.airing_today
    }
]

const Home = () => {
    return (
        <main className='main'>
            <div className='main__container'>
                <Suspense>
                    <HeroSlider />
                </Suspense>
                {
                    sectionsData.map((section, index) => (
                        <section className='section container' key={index}>
                            <div className='section__header'>
                                <h2 className='section__title'>
                                    {section.title}
                                </h2>
                                <Link className='section__link' to={section.linkMore}>
                                    View more
                                </Link>
                            </div>
                            <div className='section__content'>
                                <Suspense>
                                    <MediaSwiper mediaType={section.mediaType} mediaCategory={section.mediaCategory}/>
                                </Suspense>
                                
                            </div>
                        </section>
                    ))
                }
            </div>
        </main>
    )
};

export default Home;