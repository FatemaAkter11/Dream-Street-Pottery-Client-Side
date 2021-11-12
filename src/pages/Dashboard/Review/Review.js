import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const [review, setReview] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/review', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('review added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2 className="my-4">Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })}
                    defaultValue={user.displayName} />
                <input {...register("email", { required: true })}
                    defaultValue={user.email} />
                <textarea {...register("message")} placeholder="message" />

                <input className="text-white log_btn fs-5 p-1 mt-2 mb-3" type="submit" />
            </form>
        </div>
    );
};

export default Review;