import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const findProducts = products.find((product) => product._id === productId);
    console.log(findProducts);

    const onSubmit = (data) => {
        // data.email = email;
        // data.status = "pending";

        fetch("http://localhost:5000/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('order added successfully');
        console.log(data);
    };

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("title", { required: true })}
                                defaultValue={findProducts?.title}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("name")}
                                defaultValue={user.displayName}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("email")}
                                defaultValue={user.email}
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("price", { required: true })}
                                defaultValue={findProducts?.price}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                type="submit"
                                value="Order Now"
                                className="text-white log_btn fs-5 p-1 mt-2 mb-3 w-50"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <Link className="nav-link active mx-auto text-white log_btn fs-5 p-1 mt-2 mb-3 w-25" aria-current="page" to="/home">Back to Home</Link>
        </div>
    );
};

export default Purchase;