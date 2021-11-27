import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetch("https://dry-waters-74800.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [control]);

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
        <div className="myorder">
            <h1 className="order">Orders of {user.displayName} </h1>
            <div className="orders">
                <div className="row container mx-auto ">
                    {products?.map((order) => (
                        <div className="col-md-4">
                            <div className="order border border p-3 order-card">
                                <h6>Name:{order?.name}</h6>
                                <h5 className="text-danger"> Price :{order?.price}$</h5>
                                <p>Email:{order?.email}</p>
                                <p>Title:{order?.title}</p>
                                <p className="text-danger">Status:{order?.status}</p>
                                <button
                                    onClick={() => handleDelete(order?._id)}
                                    className="btn"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;