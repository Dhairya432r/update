import React from "react";
import Dailypic from "./Dailypic";
import ContactDaily from "./ContactDaily";
import Footer2 from "./Footer2";
import Navbar  from "./Navbar";

const Daily = () => {
  return (
    <>
     <Navbar/>
     <div className="bg-blue-500  text-white pt-6 lg:pl-32 lg:mt-20">
            <h1 className="text-5xl font-bold lg:ml-0 ml-10">Daily Categories</h1>
            <br />
            <p className="text-2xl pb-16 lg:ml-0 ml-10">Home / Daily Categories</p>
            </div>
       <Dailypic />
       <ContactDaily />
       <Footer2 />
       
    </>
  );
};

export default Daily;