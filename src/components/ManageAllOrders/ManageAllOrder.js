import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    const [status, setStatus] = useState("");

    const [control, setControl] = useState(false);

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
        fetch("https://quiet-fortress-20035.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);

    // const status = "approved";
    const handleUpdate = (id) => {
        fetch(`https://quiet-fortress-20035.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };


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
        <div className="container">
            <h1>All orders {orders.length}</h1>

            <div>
                <Table responsive='sm'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Title</th>
                            <th>Event description</th>
                            <th>Image Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd?.name}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <td>
                                    <input
                                        onChange={handleStatus}
                                        type="text"
                                        defaultValue={pd.status}
                                    />
                                </td>
                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn bg-danger p-2">Delete</button>
                                <button
                                    onClick={() => handleUpdate(pd._id)}
                                    className="btn bg-success p-2"
                                >
                                    Update
                                </button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>


           

        </div>
    );
};

export default ManageAllOrders;