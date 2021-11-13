import React from "react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center" >
            <div className="text-center my-5">
                <h1 style={{ fontSize: "100px", color: "red" }}>404</h1>
                <h4 className="text-black">OPPS! PAGE NOT FOUND</h4>
                <NavLink to="/home">
                    <button className="btn btn-primary">Return to Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;