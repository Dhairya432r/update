import React from 'react'
import Contactus from './Contactus'
import Footer from './Footer'
import Features from './Features'
import How from './How'
import Navbar2 from './Navbar2'
import Patel from './Patel'
import Yash from './Yash'
import Mehta from './Mehta'
const Blogs2 = () =>{
    return(
        <>
        <Navbar2 />
        
        <div className=' flex justify-center bg-sky-400  top-0'>
            <div className=' h-62 mt-24'>
                <h1 className='lg:text-5xl  sm:text-7xl text-white lg:pl-72 sm:pl-14 w-[80%%]'>More than 100,000+ Creative Marketing <br/> Images</h1>
                <p className='text-white text-xl w-3/4 lg:pl-72 sm:pl-14 pb-4 mt-10'>Whether you have a small and medium business, get all required marketing stuff in a few clicks. Easiest way to promote your business.</p>
                <button className='bg-white text-sky-400  pt-2 pb-2 ml-72 rounded-3xl pl-6 pr-6'>Download Free Post Now</button>
            </div>
            <div className='sm:hidden lg:block md:block '>
                <img className='h-[88%] w-[80%]' src="https://brands.live/public/front/assets/img/background/new/bg2.png"  alt="" />
            </div>
        </div>
        <How />
        <Yash />
        <Features />
        <Yash/>

        <Contactus />
        <Footer />
        </>

    );
};
export default Blogs2;