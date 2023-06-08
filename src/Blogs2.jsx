import React from 'react'
import Contactus from './Contactus'
import Footer from './Footer'

import How from './How'
import Navbar2 from './Navbar2'

const Blogs2 = () => {
    return (
        <>
        <Navbar2/>
                       <div className=' flex lg:mt-10 justify-center bg-sky-400  top-40'>
                <div className=' h-62 mt-24'>
                    <h1 className='lg:text-5xl  text-6xl text-white lg:pl-72 sm:pl-14 lg:ml-0 ml-16 w-[80%%]'>More than 100,000+ Creative Marketing <br /> Images</h1>
                    <p className='text-white lg:text-xl text-2xl w-3/4 lg:pl-72 sm:pl-14 pb-4 lg:ml-0 ml-10 mt-10'>Whether you have a small and medium business, get all required marketing stuff in a few clicks. Easiest way to promote your business.</p>
                    <button className='bg-white text-sky-400 ml-24 rounded-full mb-10 pb-4 pl-2 pr-6 mt-10 pt-5 lg:pt-2 lg:pb-2 lg:ml-72 lg:rounded-3xl lg:pl-6 lg:pr-6'>Download Free Post Now</button>
                </div>
                <div className='hidden lg:block lg:mt-10'>
                    <img className='h-[88%] w-[80%]' src="https://brands.live/public/front/assets/img/background/new/bg2.png" alt="" />
                </div>
            </div>
            <How />

            

            <Contactus />
            <Footer />
        </>

    );
};
export default Blogs2;