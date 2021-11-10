import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <section className="container mt-5 pt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 bg-dark px-5 rounded  mt-5 pb-4">
                        <div className="row">
                            <div className="card-header bg-dark mt-4">
                                <h1 className="text-white text-uppercase">Please Register</h1>
                                <div className="col-sm-12 border border-bottom border-primary"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 border-right">
                                {!isLoading && <form onSubmit={handleLoginSubmit}>
                                    <div>
                                        <label for="exampleInputText" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="exampleInputText"
                                            aria-describedby="textHelp"
                                            onBlur={handleOnBlur}
                                            placeholder="Your Name" />
                                    </div>
                                    <div className="">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            onBlur={handleOnBlur}
                                            placeholder="Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            onBlur={handleOnBlur}
                                            placeholder="password" />
                                    </div>
                                    <button type="submit" className="text-white log_btn fs-5 p-1 mt-2 mb-3">Register</button>
                                    <div>
                                        <NavLink
                                            style={{ textDecoration: 'none' }}
                                            to="/login">
                                            <Button >Already Registered? Please Login</Button>
                                        </NavLink>
                                    </div>

                                </form>}
                                {isLoading && <Spinner />}
                                {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;