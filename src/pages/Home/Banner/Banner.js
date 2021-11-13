import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dry-waters-74800.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (

        <div className="banner">
            <section className="container my-5">
                <div className="row d-flex flex-lg-row align-items-center py-5">
                    <div className="col-lg-6 col-md-5 col-12">
                        <p>Handcrafted Pottery by Fatema Akter</p>
                        <h1 className="pb-2">Dream Street Pottery</h1>
                        <p>I enjoy the satisfaction of throwing and hand-building well designed, functional works for people to use in their daily lives. From my hands to yours, I want you to experience contentedness when you hold a piece of pottery that I made. I strive for my pottery to have elegance and balance in your hands; it should fit into your life, and into your hands in a beautiful, satisfying way.
                        </p>
                        {/* <!-- explore buttons --> */}
                        {/* <button type="button" className="btn text-white p-2 fs-4 rounded" data-bs-toggle="modal"
                        style={{ backgroundColor: '#E76F51', width: '168px' }} data-bs-target="#exampleModal">
                        Explore
                    </button> */}
                        <Link to='/explore'>
                            <button className="btn text-white p-2 fs-4 rounded" style={{ backgroundColor: '#E76F51', width: '168px' }}>Explore</button>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-md-7 col-12">
                        <img className="banner-img" src="https://i.ibb.co/bB0dS2y/banner.png" alt="banner" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;