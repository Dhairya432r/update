import React from 'react'
import { Link } from "react-router-dom";
import Navbar  from "./Navbar";

const Signup = () => {
   
      return (
        <>
        
        <Navbar />
        <div className='grid justify-center align-middle pt-44 drop-shadow-2xl'>
          <h2>Login Form</h2>
          <form>
            <div id="sign-in-button"></div>
            <input type="number" className='rounded-md' name="mobile" placeholder="Mobile number" required/><br /><br />
            <button type="submit" className='pl-5 pr-5 ml-10 border-2 rounded-2xl bg-blue-500 text-white'>Submit</button>
          </form>
  
          <h2  className='pt-11'>Enter OTP</h2>
          <form>
            <input type="number" className='rounded-md' name="otp" placeholder="OTP Number" required/><br /><br />
            <Link to="/Afterlogin"><button type="submit"  className='align-middle pl-5 pr-5 ml-10 border-2 rounded-2xl bg-blue-500 text-white'>Submit</button></Link>
          </form>
        </div>
        </>
      )
    
  }
  export default Signup;