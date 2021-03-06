import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const ManageOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);
    const [status, setStatus] = useState("");
    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
        fetch("https://dry-waters-74800.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [control]);

    // const status = "apporved";
    const handleUpdate = (id) => {
        fetch(`https://dry-waters-74800.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })

        console.log(id);
    };

    //delete
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you Sure,you want to delete?");
        if (proceed) {
            fetch(`https://dry-waters-74800.herokuapp.com/deleteOrder/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(!control);
                        alert("deleted Successfully");
                    }
                });
            console.log(id);
        }
    };

    return (
        <div className="container manage">
            <h1>Total orders : {orders.length}</h1>
            <div className="row">
                <col-12>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>By</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {orders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order.name}</td>
                                    <td>$ {order.price}</td>
                                    <td>{order.email}</td>

                                    <td>
                                        <input
                                            onChange={handleStatus}
                                            type="text"
                                            defaultValue={order.status}
                                        />
                                    </td>
                                    <button onClick={() => handleDelete(order?._id)} className="btn bg-danger text-white p-2">Delete</button>
                                    <button
                                        onClick={() => handleUpdate(order._id)}
                                        className="btn bg-success text-white p-2"
                                    >
                                        Update
                                    </button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </col-12>
            </div>


        </div>
    );
};

export default ManageOrder;
