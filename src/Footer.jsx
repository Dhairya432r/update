import React from "react";


const Footer = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
      />

      <div className="bg-blue-500 text-white lg:h-28 h-56 pl-11 pr-11  ">
        <div className="">
          <div className="">
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
          <div className="flex justify-evenly">
            <p className="text-2xl align-middle">Copyright © Brands.live All Right Reserved.</p>
            <p className="text-2xl align-middle">Privacy Policy | Terms & Conditions</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;