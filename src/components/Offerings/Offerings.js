import React from 'react';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Offerings.css';

const Offerings = () => {
    
    const [services, setServices] =useState([]);
    useEffect(()=>{
        fetch('https://quiet-fortress-20035.herokuapp.com/services')
        .then(res=> res.json())
        .then((data)=> setServices(data))
        
    },[]);

    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    
    return (
        <div className="main-container">
            { <h1 className="services-container text-success">Our Services</h1>}
             
            <div className="services">
                <div className="row">
                    {services.map((service) => (
                        <div key={service.key} className="col-md-4">
                            <div className="cart">
                                <div className="cart-img">
                                    <img className="w-50" src={service.image} alt="" />
                                </div>
                                <h2>{service.name}</h2>
                                <p>{service.description}</p>
                                <h5>{service.price}</h5>
                                <Link to={`/order/${service._id
}`}>
                                    <button className="btn btn-success">Place Order</button>
                                </Link>


                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default Offerings;