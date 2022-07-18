import React from 'react';
import {Link} from 'react-router-dom';

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
                    <MediaSwiper type='movie' category='popular'/>
                </div>
            </div>
        </main>
    )
};

export default Home;