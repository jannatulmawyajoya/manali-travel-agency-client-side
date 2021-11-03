import React from 'react';
import './FeaturedTours.css';

const FeaturedTours = () => {
    return (
      
        <div className="featured-tour-container mt-5">
            <h2 className= "text-success mb-5">Featured Tours</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://i.ibb.co/ftFGZcJ/1.jpg" alt="" />
                    <h2>Week At Sunny Beach</h2>
                    <p className="p-5">The three great elemental sounds in nature are the sound of rain, the sound of wind in a primeval wood, and the sound of outer ocean on a beach.
                        Luxury is anything that feels special. I mean, it can be a moment, it can be a walk on the beach, it could be a kiss from your child, or it could be a beautiful picture frame, a special fragrance. I think luxury doesn't necessarily have to mean expensive.
                        
                       </p>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/8zqSfHx/2.jpg" alt="" />
                    <h2>Travel Along The hilly Roads</h2>
                    <img src="https://i.ibb.co/74GcCj3/3.jpg" alt="" />
                    <h2>Enjoy the Beautiful Mountain Views</h2>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTours;