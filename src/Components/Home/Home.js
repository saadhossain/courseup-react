import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSingle from '../Courses/CourseSingle';
import homebanner from './home-banner.jpg'
const Home = () => {
    const courses = useLoaderData()
    console.log(courses);
    return (
        <div>
            <div>
                <img src={homebanner} alt="" />
            </div>
            <div className='w-10/12 mx-auto grid md:grid-cols-4 gap-5 py-5'>
                {courses.map(course => <CourseSingle key={course.id} course={course}></CourseSingle>)}
            </div>
        </div>
    );
};

export default Home;