import React from 'react'
import { Link } from 'react-router-dom';
const Footerlogin = () =>{
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
        />
        <div className=''>
            <div className='pl-10 pt-5 mb-5  sm:inline-block lg:flex justify-start'>
                <h1 className='text-3xl text-blue-500'>Brandzi.live</h1>
                <span className='text-blue-500 bg-white pt-2  border-2 h-11 w-24 border-blue-500 grid justify-center ml-5 hover:text-white hover:bg-blue-500'><Link to="/Blogs2">Blog</Link></span><br/>
                <h2 className='lg:pl-32 lg:ml-10 sm:pl-28 text-3    xl text-black sm:inline-block text-2xl lg:flex'>Download</h2>
                <div className='flex'><img src="./assets/images/Logo-app-Instalcion-Google-Play-Store.png" className='h-10 w-28  ml-4' alt="" />
                <img src="./assets/images/Download_on_the_App_.png" className='h-10 flex w-28' alt="" /></div><br/>
                <h1 className='lg:ml-36 sm:ml-32  text-black text-2xl'>Follow Us:</h1>
                <i className="fa-brands fa-facebook-f  pl-8 mt-2 h-7 w-7 rounded-full  text-blue-500"></i>
                <i className="fa-brands fa-instagram  pl-8  mt-2 text-blue-500"></i>
                <i className="fa-brands fa-twitter  pl-8 mt-2 text-blue-500"></i>
                <i className="fa-brands fa-youtube lg:block md:block sm:hidden pl-8 mt-2 text-blue-500"></i>
            </div>
            <div className=' w-full flex justify-between pl-10  pt-3 mb-0 text-white bg-blue-500 h-16'>
                
                    <h1 className='grid justify-start text-xl'>Copyright © Brands.live All Right Reserved.</h1>
                    <h1 className='grid justify-end text-xl pr-3  align-right'>Terms | Privacy Policy | Refer & Earn</h1>
                
                
            </div>
        </div>
        </>
    )
}
export default Footerlogin;