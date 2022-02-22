import React from 'react'
import {Route, Routes, Navigate, Outlet} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Error from './Error';
import Courses from './Courses';
import Contact from './Contact';

const RouterComponent = () => {
    return (
        <>
        {/* <Switch /> */}
            {/* <h1>Hello</h1> */}
            <Routes>
                <Route exact path='/home' element={<Home/>} >
                    {/* <Route path='/home' element={<Navigate replace to="/about"/>} /> */}
                    <Route exact path='about' element={<About/>} />
                    <Route exact path='courses' element={<Courses/>} />
                    <Route exact path='contact' element={<Contact/>} />
                </Route>
                <Route path='*' element={<Error/>} />
            </Routes>
            {/* <Home />
            <About /> */}
        </>
    );
}

export default RouterComponent;