import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const {userSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'; 

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const userEmail = form.email.value;
        const userPassword = form.password.value;

        userSignIn(userEmail, userPassword)
        .then(result => {
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login to Your Account!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Enter Password" className="input input-bordered" />
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