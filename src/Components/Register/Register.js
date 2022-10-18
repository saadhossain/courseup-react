import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const {userRegister, verifyEmail} = useContext(AuthContext);
    const [message, setMessage] = useState('')
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userRegister(email, password)
        .then((result)=>{
            setMessage('Registration completed successfully...')
            //Send Email Verification Link
            verifyEmail()
            .then(()=>{

            })
            toast.success('Email Verification has been Sent', {autoClose:1000})
            form.reset()
        })
        .catch(err => {
            console.error(err)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Register Your Account!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <p className='text-green-600'>{message}</p>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already Have an Account? Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;