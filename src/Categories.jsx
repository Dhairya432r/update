import React from "react";
import {
  Carousel,
  initTE,
} from "tw-elements";
import Navbar  from "./Navbar";
const Categories = () => {
  initTE({ Carousel });
  return (
    <>
    


      <div>
        <div
          id="carouselExampleControlscategories"
          className="mt-16"
          data-te-carousel-init
          data-te-carousel-slide>
          <h1 className="text-4xl pl-10">Business Categories</h1>

          <div
            className="mt-7  w-full overflow-hidden after:clear-both after:block after:content-['']">

            <div
              className=" float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item
              data-te-carousel-active>
              <div className="flex justify-evenly">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
              </div>
            </div>

            <div
              className=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item>
              <div className="flex justify-evenly">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
              </div>
            </div>

            <div
              className=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-te-carousel-item>
              <div className="flex justify-evenly">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  className="block w-40 h-40"
                  alt="Wild Landscape" />
              </div>
            </div>
          </div>

          
        </div>

      </div>

    </>
  );
};

export default Categories;
