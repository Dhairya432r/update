import React from "react";

const Contactus = () => {
  return (
    <>
     
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />
      <div className=" pl-11  pr-11">
        <div className="">
          <div className="flex justify-center align-middle">
            <h1 className="text-5xl">Contact Us</h1>
          </div>
        </div>
        <br />
        <br />
        <div  className="lg:flex md:flex sm:space-y-5 bg-slate-300 sm:inline-block justify-evenly align-middle border-4 pt-6 pb-6 rounded-2xl">
          <div className="">
            <ul className="lg:ml-0 ml-12 lg:mb-0 mb-6">
              <li>
                <i className="fa-sharp fa-solid fa-location-dot text-3xl lg:pl-0 pl-4"></i>
                <b className=" text-3xl sm:pl-4  lg:pr-3">Location</b>
                <br />

                <p className="lg:mr-16">
                  Office No 27, <br />
                  RAAMA EMPERRO, <br />
                  4th Floor, near Shell Petrol Pump, <br />
                  Vadodara, <br />
                  Gujarat 390011
                </p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="lg:ml-0 ml-12 lg:mb-0 mb-6">
              <li>
                <i className="fa-regular fa-envelope text-3xl pr-3"></i>
                <b className="text-3xl">Email</b>
                <br />
                <p>
                  info@mamotechnolabs.com
                  <br /> Career
                  <br /> hr@mamotechnolabs.com
                </p>
              </li>
            </ul>
          </div>
          <div>
            <ul className="lg:ml-0 ml-12 ">
              <li>
                <i className="fa-solid fa-phone text-3xl pr-3"></i>
                <b className="text-3xl ">Phone</b>
                <br />

                <p>
                  +91(9823338928)
                  <br /> +91(9923707097)
                  <br /> +91(9325910095) - HR
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Contactus;
