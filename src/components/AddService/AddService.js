import React from 'react';
// import { Spinner } from 'react-bootstrap';
// import axios from 'axios';
import { useForm } from "react-hook-form";
// import useAuth from '../../hooks/useAuth';

const AddService = () => {
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch(`https://quiet-fortress-20035.herokuapp.com/addService`, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        .then(res=> res.json())
        .then(result=> console.log(result));
        // axios.post('http://localhost:5000/services', data)
        // .then(res => {
        //     console.log(res);
        // })
        alert('Added successfully');
        reset();
        console.log(data);
      
    }
    
    return (
        <div>
            <h1>Please Add a new Service</h1>
            <form className="mb-5  p-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="m-1" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> <br />
                <input className="m-1" {...register("description")} placeholder="Description" />
                <br />
               
                <input className="m-1" type="number" {...register("price")} placeholder="Price"/>
                <br />
                <input className="m-1" {...register("image")} placeholder="Image Url" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;