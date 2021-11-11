import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            {/* products area*/}
            <div className="row">
                <h1 className="fw-bold fs-1 mb-5">Our All products Area</h1>
                <div className="col-md-12">
                    {/* product data load */}
                    <div className="row ms-4">
                        {
                            products?.map(product => <Product
                                key={product.id}
                                product={product}
                            >
                            </Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;