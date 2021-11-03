import React from 'react';
import './Destinations.css';

const Destinations = () => {
    return (
        <div className="destination-container mt-5">
            <h2 className="text-success mb-5">POPULAR DESTINATIONS</h2>
            <div className="row">
                <div className="col-md-6">
                    <img  src="https://i.ibb.co/DkDR1Nj/1-1.jpg" alt="" />
                    <h5>CROATIA</h5>
                    <p>120+ tours</p>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/9g1XSCx/2-1.jpg" alt="" />
                    <h5>ITALY</h5>
                    <p>50+ tours</p>
                    <img src="https://i.ibb.co/KjY0LqH/4.jpg" alt="" />
                    <h5>SINGAPORE</h5>
                    <p>35+ tours</p>
                </div>
            </div>
        </div>
    );
};

export default Destinations;