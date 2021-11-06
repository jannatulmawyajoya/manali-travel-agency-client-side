import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import FeaturedTours from '../FeaturedTours/FeaturedTours';
import Offerings from '../Offerings/Offerings';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offerings></Offerings>
            <FeaturedTours></FeaturedTours>
            <Destinations></Destinations>
        </div>
    );
};

export default Home;