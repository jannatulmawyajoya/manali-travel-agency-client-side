import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import FeaturedTours from '../FeaturedTours/FeaturedTours';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedTours></FeaturedTours>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;