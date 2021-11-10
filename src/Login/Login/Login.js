import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <section className="container mt-5 pt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 bg-dark px-5 rounded  mt-5 pb-4">
                        <div className="row">
                            <div className="card-header bg-dark mt-4">
                                <h1 className="text-white text-uppercase">Please Login</h1>
                                <div className="col-sm-12 border border-bottom border-primary"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 border-right">
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            onChange={handleOnChange}
                                            aria-describedby="emailHelp" placeholder="Email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            onChange={handleOnChange}
                                            placeholder="password" />
                                    </div>
                                    <button type="submit" className="text-white log_btn fs-5 p-1 mt-2 mb-3">Login</button>
                                    <div>
                                        <NavLink
                                            style={{ textDecoration: 'none' }}
                                            to="/register">
                                            <button >New User? Please Register</button>
                                        </NavLink>
                                        {isLoading && <Spinner />}
                                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                        {authError && <Alert severity="error">{authError}</Alert>}
                                    </div>
                                </form>
                                <p>------------------------</p>
                                <button onClick={handleGoogleSignIn} style={{ width: "190px" }} className="text-white log_btn fs-5 mt-2 mb-3"><i className="fab fa-google"></i> Google Sign In</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;