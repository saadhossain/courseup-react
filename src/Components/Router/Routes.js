import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Courses from '../Courses/Courses';
import ErrorPage from '../Error/ErrorPage';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import Login from '../Login/Login';
import Offer from '../Offer/Offer';
import Register from '../Register/Register';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/', element:<Home></Home>},
            {path:'/home', element:<Home></Home>},
            {path:'/courses', loader: async () => fetch('courses.json') , element:<Courses></Courses>},
            {path:'/offer', element:<Offer></Offer>},
            {path:'/login', element:<Login></Login>},
            {path:'/register', element:<Register></Register>}
        ],
        errorElement:<ErrorPage></ErrorPage>
    }
])