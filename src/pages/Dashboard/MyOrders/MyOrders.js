import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/deleteOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert('Are you sure order deleted?');
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            })
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        // console.log(id);
    };


    return (
        <div>
            <h2 className="mt-5">My Orders : {orders.length}</h2>
            <hr />
            <Container className="py-5 mt-3">
                {
                    orders?.map((order) => <Card className="my-5" style={{ backgroundColor: 'honeydew' }} key={order.id}>
                        <div className="py-5">
                            <h1>Title: {order.title}</h1>
                            <h3>Product Id: {order._id}</h3>
                            <h3>User Name: {order.name}</h3>
                            <button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Delete</button>
                            <br />
                            <br />

                            <button onChange={handleStatus} className="btn btn-danger"
                            >{order.status}</button>
                        </div>

                    </Card>)
                }

            </Container>
        </div>
    );
};

export default MyOrders;