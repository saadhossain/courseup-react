import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { courseData } from '../../Context/courseData';
import Courses from '../Courses/Courses';
import ErrorPage from '../Error/ErrorPage';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import Login from '../Login/Login';
import Offer from '../Offer/Offer';
import Register from '../Register/Register';
import PrivateRouter from './PrivateRouter';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/', loader:courseData, element:<Home></Home>},
            {path:'/home', element:<Home></Home>},
            {
                path:'/courses', 
                loader:courseData, 
                element:<PrivateRouter><Courses></Courses></PrivateRouter>},
            {path:'/offer', element:<Offer></Offer>},
            {path:'/login', element:<Login></Login>},
            {path:'/register', element:<Register></Register>}
        ],
        errorElement:<ErrorPage></ErrorPage>
    }
])
