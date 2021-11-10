import React from 'react';

const Feedback = () => {
    return (
        <div>
            {/* extra feedback part  */}
            <section className="container mt-5 pt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 bg-dark px-5 rounded  mt-5 pb-4">
                        <div className="row">
                            <div className="card-header bg-dark mt-4">
                                <h1 className="text-white text-uppercase">Feedback Us</h1>
                                <div className="col-sm-12 border border-bottom border-primary"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 border-right">
                                <form>
                                    <div className="">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Email" />
                                        <div id="emailHelp" className="form-text text-white">We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                            placeholder="password" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <textarea className="form-control" aria-label="With textarea"
                                            placeholder="Message"></textarea>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label text-white" for="exampleCheck1">I am not a
                                            Robot</label>
                                    </div>
                                    <button type="submit" className="btn btn-warning">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;