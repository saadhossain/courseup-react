import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Header from '../Header/Header';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='text-center w-9/12 mx-auto mt-5'>
                <FaceFrownIcon className='flex mx-auto w-60 h-60 text-violet-500'></FaceFrownIcon>
                <h1 className='text-8xl font-bold'>404</h1>
                <h3 className='text-3xl font-bold'>NOT FOUND!</h3>
                <h5 className='text-xl font-semibold'>Something went wrong...</h5>
            </div>
        </div>
    );
};

export default ErrorPage;