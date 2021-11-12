import React, { useEffect, useState } from 'react';
import Review from '../../Dashboard/Review/Review';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
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
            <div>
                <h2>Users Review</h2>
            </div>

            <Feedback />
        </div>
    );
};

export default Home;