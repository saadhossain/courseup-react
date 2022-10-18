import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
const CourseSingle = ({ course }) => {
    const { image, name, price, tutor, rating } = course;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt={name} className='w-full rounded-t' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name.length > 30 ? name.slice(0, 30) : name}</h2>
                    <h2 className="card-title">Price: ${price}</h2>
                    <p>Tutor: {tutor}</p>
                    <span className='flex justify-between'>
                        Ratings: <StarIcon className='text-[#F1DD69] w-5'></StarIcon>
                        <p> {rating.rate}</p>
                        <p>Total:({rating.total})</p>
                    </span>
                    <div className="card-actions justify-center my-5">
                        <button className="btn btn-primary w-full">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSingle;