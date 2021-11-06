import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const MyOrder = () => {
    const {user} = useFirebase();
    const {email} =user;
    console.log(email);
    const [services, setServices] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://quiet-fortress-20035.herokuapp.com/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [control]);

    console.log(services);
    const handleDelete = (id) => {
        fetch(`https://quiet-fortress-20035.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
            alert('Are you sure you want to delete this item?')
        console.log(id);
    };
    return (
        <div>
            <h1>My orders</h1>
            <h5>My Email: {user?.email}</h5>

            <div className="services">
                <div className="row container">
                    {services?.map((service) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={service?.image} alt="" />
                                </div>

                                <h2>{service?.name}</h2>
                                
                                <p>{service?.description}</p>
                                <h3 className="text-danger"> {service?.price}</h3>

                                <button
                                    onClick={() => handleDelete(service?._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;