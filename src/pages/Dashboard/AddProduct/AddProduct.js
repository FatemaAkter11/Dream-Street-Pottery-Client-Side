import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2 className="my-4">Please Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="image url" />
                <input {...register("title", { required: true, maxLength: 23 })} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("price")} placeholder="Price" />
                <input className="text-white log_btn fs-5 p-1 mt-2 mb-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;