import React from 'react'
import {
   Carousel,
   initTE,
 } from "tw-elements";
const Imageslogin = () =>{
   initTE({ Carousel });
    return(
        <>
        {/* <div className='pl-10 pr-10 pb-14'>
            <div className='mt-7'>
               <h1 className='text-2xl  font-bold'>Earthquake In Meghalaya</h1><br />
               <div className='flex justify-evenly align-middle'>
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               </div>

            </div>
            <div className='mt-7'>
               <h1 className='text-2xl  font-bold'>Earthquake In Meghalaya</h1><br />
               <div className='flex justify-evenly align-middle'>
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               </div>

            </div>
            <div className='mt-7'>
               <h1 className='text-2xl  font-bold'>Earthquake In Meghalaya</h1><br />
               <div className='flex justify-evenly align-middle'>
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64'  alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64'  alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64'  alt="" />
               </div>

            </div>
            <div className='mt-7'>
               <h1 className='text-2xl  font-bold'>Earthquake In Meghalaya</h1><br />
               <div className='flex justify-evenly align-middle'>
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"  className='h-64 w-64'alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               </div>

            </div>
            <div className='mt-7'>
               <h1 className='text-2xl  font-bold'>Earthquake In Meghalaya</h1><br />
               <div className='flex justify-evenly align-middle'>
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               <img src="https://th.bing.com/th/id/OIP.4n-JdJdN0nSGO8wyWRhOzgHaEF?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-64 w-64' alt="" />
               </div>

            </div>
        </div> */}
        <div>
        <div
            id="carouselExampleControls1"
            className="relative pb-20"
            data-te-carousel-init
            data-te-carousel-slide>
            
            <div
                className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                  <h1 className='text-2xl pt-20 pl-10 font-bold'>Earthquake In Meghalaya</h1><br />
             
                <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active>
                <div className='flex justify-evenly' >
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                </div>
                </div>
                
                <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div className='flex justify-evenly'>
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                </div>
                </div>
               
                <div
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div className='flex justify-evenly'>
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                 <img
                    src="./assets/images/brandzi app icon-01.png"
                    className="block w-52 h-52"
                    alt="Wild Landscape" />
                </div>
                </div>
            </div>

           
            <button
                className=" absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black hover:text-blue-700 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls1"
                data-te-slide="prev">
                <span className="inline-block h-8 w-8 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </span>
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Previous</span>
                
            </button>
           
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black hover:text-blue-700 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]  hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls1"
                data-te-slide="next">
                <span className="inline-block h-8 w-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </span>
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span>
                
            </button>
            </div>
           
        </div>
        


        
         
        </>

    );
};
export default Imageslogin;