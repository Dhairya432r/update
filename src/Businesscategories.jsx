import React from 'react'
import Dailypic from './Dailypic';
import Contactdaily from './ContactDaily';
import Footer2 from './Footer2';
import Navbar  from "./Navbar";
const Businesscategories=()=>{
    return (
        <>
        <Navbar/>
         <div className="bg-blue-500  text-white pl-32 mt-20">
            <h1 className="text-5xl font-bold ">Business Categories</h1>
            <br />
            <p className="text-2xl pb-16">Home / Business Categories</p>
            </div>
            
            <Dailypic />
            <Contactdaily />
            <Footer2 />

        </>
    );
};
export default Businesscategories;