import React, { useState } from 'react'
import OtpInput from 'otp-input-react'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from './firebsae.config'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { toast, Toaster } from "react-hot-toast";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }

  function onSignup() {
    setShowOTP(true);

    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
       
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);

      });
  }

  function onOTPVerify() {

    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
       
      })
      .catch((err) => {
        console.log(err);
    
      });
  }


  return (
    <>
      <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
      />
      <Navbar />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
        <section className="bg-blue-400 flex items-center justify-center h-screen">
          <div>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id="recaptcha-container"></div>
            {user ? (
              <>
              
              
              <h2 className="text-center text-white font-medium text-2xl">
            Login Success <i class="fa fa-check-circle"></i>
              </h2><br />
              <Link to="/Businessform"><button type="submit" className='ml-10 h-7 w-32 rounded-md text-white bg-blue-500 pl-7 pr-7'>Next<i class="fa-solid fa-arrow-right ml-3"></i></button></Link>
              </>
              
            ) : (
              <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                  Welcome to <br /> BRANDZI
                </h1>
                {showOTP ? (
                  <>

                    <label
                      htmlFor="otp"
                      className="font-bold text-xl text-white text-center"
                    >
                      Enter your OTP
                    </label>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                      className="opt-container "
                    ></OtpInput>
                    <button
                      onClick={onOTPVerify}
                      className="hover:text-blue-500 hover:border-2 hover:border-blue-500 hover:bg-white w-full flex gap-1 items-center justify-center py-2.5 text-white bg-blue-700 rounded"
                    >

                      <span>Verify OTP</span>
                    </button>
                  </>
                ) : (
                  <>

                    <label
                      htmlFor=""
                      className="font-bold text-xl text-white text-center"
                    >
                      Verify your phone number
                    </label>
                    <PhoneInput country={"in"} value={ph} onChange={setPh} />
                    <button
                      onClick={onSignup}
                      className="ml-2 bg-blue-700 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500"
                    >

                      <span>Send code via SMS </span>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
        <Footer />
      </>
    </>
  )

}
export default Signup;