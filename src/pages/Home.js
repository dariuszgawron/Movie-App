import React from 'react';
import {Link} from 'react-router-dom';

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
                        <link to='/movie'>
                            View more
                        </link>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Home;