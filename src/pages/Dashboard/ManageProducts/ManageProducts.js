import React, { useEffect, useState } from 'react';
import './ManageProducts.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch("https://dry-waters-74800.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [control]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you Sure,you wan to delete?");
        if (proceed) {
            fetch(`https://dry-waters-74800.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(!control);
                        alert("deleted Successfully");
                    }
                });
            console.log(id);
        }
    };

    return (
        <div className="p-3 pottery">
            <h2 className="mb-5">Manage All Products</h2>
            <div className="products">
                <div className="row container mx-auto">
                    {products?.map((product) => (
                        <div className="col-md-4">
                            <div className="product-card border border my-2 p-3">
                                <div className="products-img ">
                                    <img className="w-100" src={product?.img} alt="" />
                                </div>

                                <h6>{product?.ModelName}</h6>

                                <p>{product?.Description}</p>
                                <h3 className="text-danger"> Cost : $ {product?.price}</h3>
                                <button
                                    onClick={() => handleDelete(product?._id)}
                                    className="btn"
                                >
                                    Delete Product
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;