import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login to Your Account!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/forget' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Don't Have Account? Register</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;