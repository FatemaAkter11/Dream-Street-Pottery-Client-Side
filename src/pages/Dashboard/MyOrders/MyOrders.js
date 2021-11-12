import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
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

    return (
        <div>
            <h2 className="mt-5">My Orders</h2>
            <hr />
            <Container className="py-5 my-5">
                {
                    orders?.map((order) => <Card className="my-5" style={{ backgroundColor: 'honeydew' }} key={order.id}>
                        <div className="py-5">
                            <h3>Product Id: {order._id}</h3>
                            <h3>User Name: {order.name}</h3>
                            <button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Delete</button>
                        </div>
                    </Card>)
                }
            </Container>
        </div>
    );
};

export default MyOrders;