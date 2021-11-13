import React, { useEffect, useState } from 'react';
import Review from '../../Dashboard/Review/Review';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Product from '../Product/Product';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    const [products, setProducts] = useState([])
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://dry-waters-74800.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    useEffect(() => {
        fetch('https://dry-waters-74800.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
    return (
        <div>
            <Banner />
            {/* products area*/}
            <div className="row">
                <h1 className="fw-bold fs-1 mb-5">Our products</h1>
                <div className="col-md-12">
                    {/* product data load */}
                    <div className="row ms-4">
                        {
                            products.slice(0, 6)?.map(product => <Product
                                key={product.id}
                                product={product}
                            >
                            </Product>)
                        }
                    </div>
                </div>
            </div>
            {/* review */}
            <div className="row">
                <h1 className="fw-bold fs-1 mb-5">Users Review</h1>
                <div className="col-md-12">
                    {/* review data load */}
                    <div className="row ms-4">
                        {
                            review?.map(review => <UserReview
                                key={review.id}
                                review={review}
                            >
                            </UserReview>)
                        }
                    </div>
                </div>
            </div>

            <Feedback />
        </div>
    );
};

export default Home;