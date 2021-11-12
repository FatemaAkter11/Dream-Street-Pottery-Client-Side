import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    // console.log(status);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        // console.log(id);
    };

    return (
        <div className="container">
            <h1>Manage Orders: {orders.length}</h1>

            <Container className="py-5 mt-3">
                {
                    orders?.map((order) => <div className="my-5" style={{ backgroundColor: 'honeydew' }} key={order.id}>
                        <div className="py-5">
                            <h1>Title: {order.title}</h1>
                            <h3>Product Id: {order._id}</h3>
                            <h3>User Name: {order.name}</h3>
                            {/* <input
                                onChange={handleStatus}
                                type="text"
                                defaultValue={orders.status}
                            /> */}
                            <button className="btn btn-danger"
                                onChange={handleStatus} onClick={() => handleUpdate(order._id)}>Pending</button>
                        </div>
                    </div>)
                }
            </Container>
        </div>
    );
};

export default ManageOrder;