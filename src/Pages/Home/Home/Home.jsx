import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import Collection from '../Collection/Collection';
import PopularMenu from '../PopularMenu/PopularMenu';
import PeralaxBanner from '../PeralaxBanner/PeralaxBanner';
import BannerFeature from '../BannerFeature/BannerFeature';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Slideshow/>
            <Collection/>
            <PeralaxBanner/>
            <PopularMenu/>
            <BannerFeature/>
            <Testimonial/>
        </div>
    );
};

export default Home;