import React, { Component } from "react";
import Festivals from "./Festivals";
import Categories from "./Categories";
import Templates from "./Templates";
import Video from "./Video";
import Features from "./Features";
import Contactus from "./Contactus";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Dhairya from "./Dhairya"
import Patel from "./Patel"

const Home = () => {




  return (
    <>
      <Navbar />


      <div className=" mt-0 lg:mt-20 bottom-0 bg-blue-500 sm:flex pl-11 pr-11 text-white ">
        <div className=" pt-10 font-bold">
          <h4 className="text-lg">WE HELP YOUR BUSINESS BECOME A BRAND</h4>
          <br />
          <h1 className="text-4xl">
            Personlized Bussiness posts in
            <br /> just 10 seconds
          </h1>
          <br />
          <h4 className="text-xl">
            10000+Permimum posts for every bussiness to 10x its growth
          </h4>
          <div className="flex sm:align-middle">

            <img src="./assets/images/Download_on_the_App_.png" className="pt-10 h-24 w-48 pr-4" />
            <img
              src="./assets/images/Logo-app-Instalcion-Google-Play-Store.png"
              className="pt-10 h-24 w-48 "
            />

          </div>

          <br />
        </div>


        <div className="">

          <div className=" lg:flex sm:flex">

            <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" h-80 w-80  pt-5 pb-5 pl-4"
              alt=""
            />
            {/* <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" h-80 w-80  pt-5 pb-5 pl-4"
              alt=""
            /> */}



          </div>

        </div>


      </div>

      <br />

      <br />



      <Categories />
      <Festivals />
      <Templates />
      <Dhairya/>
      <Features />
      <Patel/>
      <Video/>
      <Contactus />
      <Footer />

    </>
  );


};
export default Home;
