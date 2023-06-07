import React from "react";
import Dailypic from "./Dailypic";
import Contactdaily from "./ContactDaily";
import Footer2 from "./Footer2";
import Navbar from "./Navbar";

const Days = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-blue-500  text-white pt-6 lg:pl-32 lg:mt-20">
            <h1 className="text-5xl font-bold lg:ml-0 ml-10">Days Categories</h1>
            <br />
            <p className="text-2xl pb-16 lg:ml-0 ml-10">Home / Days Categories</p>
            </div>
      <Dailypic />
      <Contactdaily />
      <Footer2 />

    </>
  );
};

export default Days;