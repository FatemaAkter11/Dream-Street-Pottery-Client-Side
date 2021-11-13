import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://dry-waters-74800.herokuapp.com/review', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Review added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2 className="my-4">Please Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")}
                    defaultValue={user.displayName}
                />
                <input {...register("email")}
                    defaultValue={user.email} />
                <textarea {...register("message")} placeholder="Message" />
                <input {...register("rating")} placeholder="Rating(0-5)" />
                <input className="text-white log_btn fs-5 p-1 mt-2 mb-3" type="submit" />
            </form>
        </div>
    );
};

export default Review;