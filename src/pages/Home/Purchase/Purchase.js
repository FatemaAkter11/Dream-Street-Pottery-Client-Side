import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const findProducts = products.find((product) => product._id === productId);
    console.log(findProducts);

    return (

        <div>
            <div className="row my-5">
                <div style={{ backgroundColor: 'honeydew' }} className="col-lg-6 col-md-12 col-sm-12 w-25 mx-auto card p-3">
                    <img src={findProducts?.img} alt="" />
                    <h2>{findProducts?.title}</h2>
                    <p>{findProducts?.description}</p>
                    <h3>Price:${findProducts?.price}</h3>
                </div>
                <div className="col-lg-6 col-sm-12 w-25 mx-auto card p-3" style={{ backgroundColor: 'honeydew' }}>
                    <div className="mt-5">
                        <h1>Name: {user.displayName}</h1>
                        <h1>Email: {user.email}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;