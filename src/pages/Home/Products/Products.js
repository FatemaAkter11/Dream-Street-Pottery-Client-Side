import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dry-waters-74800.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Container className="py-5">
                <Row>
                    {products?.map((product) => (
                        <Product
                            products={product}
                            key={product.id}
                        >
                        </Product>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;