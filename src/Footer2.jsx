import React from "react";

const Footer2 = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
      />
      <div className="bg-blue-500 text-white h-auto pl-11 pr-11">
        <div className="lg:flex md:flex sm:inline-block lg:text-xl md:text-xl sm:text-4xl  justify-center">
          <div className="pr-32 pt-16 pb-32">
            <h1 className="text-3xl">Brandzi.live</h1>
            <br />
            <p className="text-2xl">
              We allow users to personalise their company’s 
              logo and a digital business card with updated 
              information. We are also providing options for 
              personalised festive images with beautiful 
              quotes and well-animated high-quality videos.
            </p>
          </div>
          <div className="pr-24 pt-16 lg:pb-32 sm:pb-14">
            <h2 className="text-3xl">Quick Links</h2>
            <br />
            <hr />
            <br />
            <p className=" text-2xl cursor-pointer">Good Morning</p>
            <p className=" text-2xl cursor-pointer">Good night</p>
            <p className=" text-2xl cursor-pointer">Birthday</p>
          </div>
          <div className="pr-28 lg:pl-28 pt-16 pb-32">
            <h1 className="text-4xl  ">Company</h1>
            <br/>
            <hr/>
            <br/>
            <p>Mamo Tecnolabs</p>
            <br />
            <br /><br />
            <h1 className="text-4xl sm:pb-2 0">Blog</h1>
            <br/>
            <hr/>
            <br/>
            <div classNameName="sm:flex sm:w-52">
              <i className="fa-brands fa-facebook-f pr-5  cursor-pointer"></i>
              <i className="fa-brands fa-instagram pr-5 cursor-pointer"></i>
              <i className="fa-brands fa-twitter pr-5 cursor-pointer"></i>
              <i className="fa-brands fa-youtube cursor-pointer"></i>
            </div>
          </div>
        </div>
        <hr className="sm:pb-14" />
        <div className="flex justify-evenly align-middle pt-7 pb-7">
          <p className="text-2xl">Copyright © Brands.live All Right Reserved.</p>
          <p className="text-2xl">Privacy Policy | Terms & Conditions</p>
        </div>
      </div>

    </>

  );
};
export default Footer2;