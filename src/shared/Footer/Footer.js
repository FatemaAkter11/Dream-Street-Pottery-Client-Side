import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container py-5">
                <div className="row pt-3 align-items-center">
                    <div className="col-md-9 col-12 ">
                        <p className="text-white p-text">
                            <span className="px-2"> DownloadNow </span>
                            <span className="px-2"> License</span>
                        </p>
                        <div>
                            <p className="text-white">
                                <span className="px-2">About</span>
                                <span className="px-2">Features</span>
                                <span className="px-2">Pricing</span>
                                <span className="px-2">Careers</span>
                                <span className="px-2">Help</span>
                                <span className="px-2">Privacy Policy</span>
                            </p>
                        </div>

                    </div>
                    <div className="col-md-3 col-12">
                        <p className="text-white">Get The App</p>
                        <i className="text-white fab fa-twitter"></i>
                        <i className="text-white fab fa-facebook ps-2"></i>
                        <i className="text-white fab fa-linkedin ps-2"></i>
                    </div>
                    <p className="text-white px-2 pt-3">© 2021 Dream street pottery. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;