import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="row not-found-div">
            <div className="col-lg-12 ">
                <img className="page-not-found img-fluid" src="https://tse2.explicit.bing.net/th?id=OIP.heeZQ84fzkgUzWydY8ZmPwHaC2&pid=Api&P=0&w=438&h=169" alt="" />
                <div>  <Link to="/"><button className="btn btn-success mb-3">Go Back</button></Link></div>

            </div>
        </div>
    );
};

export default NotFound;