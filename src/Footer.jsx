import React from "react";
import Topnav from "./Responavbar";

const Footer = () => {
  return (
    <>
   
      <div className="bg-blue-500 text-white h-52 pl-11 pr-11  ">
        <div className="">
          <div className="pb-0">
            <h2 className="flex justify-center align-middle text-3xl">
              Brandzi.live
            </h2>

            <ul className="flex justify-center align-middle">
              <li>
                <i className="fa-brands fa-facebook-f  pls-8"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram  pl-8"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter  pl-8"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube  pl-8"></i>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="">
          <div className="flex justify-evenly pt-5  align">
            <p className="text-2xl align-middle">Copyright © Brands.live All Right Reserved.</p> 
            <p className="text-2xl align-middle">Privacy Policy | Terms & Conditions</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
