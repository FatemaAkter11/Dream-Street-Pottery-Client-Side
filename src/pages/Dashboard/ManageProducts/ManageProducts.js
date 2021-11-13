import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dry-waters-74800.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleDelete = id => {
        const url = `https://dry-waters-74800.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                alert('Product deleted');
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
    }

    return (
        <div>
            <h2 className="mt-5">Manage Products</h2>
            <hr />
            <Container className="py-5 my-5">
                {
                    products?.map((product) => <Card className="my-5 shadow-lg" style={{ backgroundColor: 'honeydew' }} key={product.id}>
                        <div className="py-5">
                            <img className="w-25" src={product.img} alt="" />
                            <h3>{product.title}</h3>
                            <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
                        </div>
                    </Card>)
                }
            </Container>
        </div>
    );
};

export default ManageProducts;