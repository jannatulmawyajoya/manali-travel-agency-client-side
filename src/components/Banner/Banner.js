import React from 'react';
// import MenuBar from "../MenuBar/MenuBar";
// import Services from '../Services/Services';
import "./Banner.css";
const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    {/* <MenuBar></MenuBar> */}
                    <div className="col-md-6">
                        <h3 className="title text-success">
                           
                            MANALI TRAVEL AGENCY
                        </h3>
                        <h5 className="text-success text-center mt-3">
                            “Travel is never a matter of money, but of courage.”
                        </h5>
                        <button className="mt-3 btn btn-success about-btn">OUR SERVICES</button>
                    </div>
                    <div className="col-md-6">

                    </div>

                </div>
            </div>
            {/* <Services></Services> */}
        </div>

    );
};
export default Banner;