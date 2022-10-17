import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSingle from '../Courses/CourseSingle';

const Offer = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
        <div className='w-10/12 mx-auto py-10'>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    courses.map(course => <CourseSingle key={course.id} course={course}></CourseSingle>)
                }
            </div>
        </div>
    );
};

export default Offer;