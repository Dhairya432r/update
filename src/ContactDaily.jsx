import React from "react";
// import Dailypic from "./Dailypic";
const Contactdaily = () => {
  return (
    <>
      <div className="pl-11 pr-11 pb-24">
        <div className="">
          <div className="flex justify-center align-middle">
            <h1 className="text-5xl">Contact Us</h1>
          </div>
        </div>
        <br /><br />
        <div className="lg:flex sm:pl-8 lg:ml-0 md:flex  sm:inline- justify-evenly align-middle border-2 pt-6 pb-6 rounded-2xl bg-slate-300">
          <div>
            <ul>
              <li>
                <i className="fa-regular fa-envelope text-3xl pr-3"></i
                ><b className="text-3xl">Email</b><br />
                <p>
                  info@mamotechnolabs.com<br />
                  Career

                  <br />
                  hr@mamotechnolabs.com
                </p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <i className="fa-solid fa-phone text-3xl pr-3"></i
                ><b className="text-3xl">Phone</b><br />

                <p>
                  +91(9823338928)<br />
                  +91(9923707097) <br />
                  +91(9325910095) - HR
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contactdaily;