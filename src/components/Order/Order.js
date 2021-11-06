import React, { useEffect, useState } from "react";
// import './Order';
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../hooks/useFirebase";


const Order = () => {
    const {orderId } = useParams();
    console.log(orderId);
    const [service, setService] = useState({});

    const {user} = useFirebase();
    // const {email} =user;
    // const email = sessionStorage.getItem("email");
    useEffect(() => {
        fetch(`https://quiet-fortress-20035.herokuapp.com/order/${orderId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, [service]);

    console.log(service);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = user.email;
        data.status = "pending";

        fetch("https://quiet-fortress-20035.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    const placeOrder = () => {
        alert('Order confirmed');
    }

    return (
        <div>
            <h1>Place an order</h1>

            <div className="booking-container">
                <div className="row container">
                    <div className="col-md-6">
                        <div className="details-img">
                            <img className="w-75" src={service?.image} alt="" />
                        </div>
                        <h2>{service?.name}</h2>
                        <p className="text-start">{service?.description}</p>
                        <h1>{service?.price}</h1>
                        
                    </div>
                    <div className="col-md-6">
                        {/* <h1>booking Form</h1> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("user-name")}
                                defaultValue={user?.displayName}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("user-email")}
                                defaultValue={user.email}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            
                            <input
                                {...register("name")}
                                defaultValue={service?.name}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            
                            {/* <input
                                {...register("address")}
                                placeholder="Address"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br /> */}
                            {/* <input
                                {...register("phone")}
                                placeholder="Phone"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br /> */}

                            {/* <input
                                {...register("price", { required: true })}
                                defaultValue={service?.price}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br /> */}
                            <input
                                {...register("price", )}
                                defaultValue={service?.price}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description", )}
                                defaultValue={service?.description}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", )}
                                defaultValue={service?.image}
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("address")}
                                placeholder="Address"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("phone")}
                                placeholder="Phone"
                                className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            

                            {/* {errors.exampleRequired && <span>This field is required</span>} */}

                            <input 
                                onClick = {()=>placeOrder()}
                                type="submit" 
                                value="Order Now"
                                className="btn btn-info w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;