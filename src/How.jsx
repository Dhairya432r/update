import React from 'react'
import Topnav2 from './Responavbar2';
import Yash from './Yash';

const How = () =>{
    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
            />
          
           
            <div className='  bg-gray-200 pt-10 relative'>
            
            <div className='mt-10 mb-10'>
                <h1 className='grid justify-center text-5xl mb-10 font-bold'>How Does Brands.Live Works</h1>
            <div className="border-spacing-x-8 lg:flex md:flex  sm:inline-block justify-evenly align-middle">
          <div className=" box-content drop-shadow-xl h-64 w-64 p-4 l">
            <div className=" mb-2 pl-2 text-blue-400 mb-16">
            <i class="fa-sharp fa-solid fa-arrow-up-from-bracket text-5xl ml-36"></i>
            </div>
            <h1 className="font-semibold text-2xl border-spacing-14 rounded-s-full ml-24 border-blue-500 ml-24 ">
              Login/Signup
            </h1>
            <br />
            <p className="w-[80%] ml-24">
            Login to Brands.live portal with your mobile number
            </p>
          </div>
          <div className=" box-content drop-shadow-xl h-64 w-64 p-4 ">
            <div className=" mb-2 pl-2 text-blue-400 mb-16">
            <i class="fa-solid fa-image text-5xl ml-36"></i>
            </div>
            <h1 className=" font-semibold text-2xl border-spacing-14 rounded-s-full border-blue-500 ml-24">
            Select Creatives
            </h1>
            <br />
            <p className="w-[80%] ml-24">
            We have wide range of categories to choose best marketing post
            </p>
          </div>
          <div className="  box-content drop-shadow-xl h-64 w-64 p-4 ">
            <div className=" mb-2 pl-2 text-blue-400 mb-16">
            <i class="fa-solid fa-share text-5xl ml-36"></i>
            </div>
            <h1 className=" font-semibold text-2xl border-spacing-14 rounded-s-full border-blue-500 ml-24">
            Download & Share
            </h1>
            <br />
            <p className="w-[80%] ml-24">
            Download and share it on all your social media/digital platforms
            </p>
          </div>
        </div>

                

                
            </div>
            </div>
            
           
        </>
    )
}
export default How;