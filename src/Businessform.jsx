import React, { useRef } from 'react'
import { db } from './firebsae.config.js'
import { useState, useEffect } from 'react'
import { app } from './firebsae.config'
import { addDoc, collection } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { storage } from './firebsae.config'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom'
const Businessform = () => {


    const [businessname, setName] = useState();
    const [Username, setUsername] = useState();
    const [mobile, setMobile] = useState();
    const [mobile2, setMobile2] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState();
    const [City, setCity] = useState();
    const [Facebook, setFacebook] = useState();
    const [Instagram, setInstagram] = useState();
    const [Website, setWebsite] = useState();
    const emailRef = useRef()
    const passwordRef = useRef()
    const [Image, setImage] = useState('');



    const userCollection = collection(db, "Brandzi")
    const auth = getAuth(app);
    const handlesubmit = async () => {

        addDoc(userCollection, {
            businessname: businessname,
            Username: Username,
            mobile: mobile,
            mobile2: mobile2,
            email: email,
            password: password,
            address: address,
            City: City,
            Facebook: Facebook,
            Instagram: Instagram

        }).then(() => {
            alert("Form Submitted")

        }).catch((e) => {
            alert("error")
            console.log(e)
        })


        // Authentication
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;

                // ..
            });
        // Upload Image
        if (Image == null)
            return;
        const imageref = storage.ref('/images/' + Image.name).put(Image)
            .on("state_changed")
        imageref()

    }





    return (
        <>
            <Navbar />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className='mt-24 grid justify-center lg:ml-0 ml-44 mb-16 '>

                <h1 className='text-5xl lg:ml-8 mb-12'>Business Details</h1>
                <form action="">
                    <label htmlFor="" className='text-xl'>Please Upload Your Company logo</label><br />
                    <input type="file" className='h-10  lg:pr-7  m-0 block lg:w-full w-92 min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding lg:px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary' onChange={(e) => {
                        setImage(e.target.files[0])
                    }} name="" id="" /> <br />

                    <i class="fa fa-line-chart"></i><input type="text" className='ml-4 mb-5 pr-52 pl-3 h-10 rounded-lg' name='businessname' placeholder='Enter Your Business Name'
                        onChange={(event) => {
                            setName(event.target.value)

                        }} /><br />


                    <i class="fa fa-user-circle-o"></i><input type="text" name='username' className='ml-4 mb-5 pr-52 pl-4 h-10 rounded-lg' placeholder='Enter Your Your Name'
                        onChange={(event) => {
                            setUsername(event.target.value)

                        }} /><br />



                    <i class="fa fa-mobile" aria-hidden="true"></i><input type="number" name='mobile' className='ml-4 mb-5 pr-52 pl-6 h-10 rounded-lg' placeholder='Enter Your Mobile Number' onChange={(event) => {
                        setMobile(event.target.value)
                    }} /><br />


                    <i class="fa fa-mobile" aria-hidden="true"></i><input type="number" name='mobile2' className='ml-4 mb-5 pr-52 pl-6 h-10 rounded-lg' placeholder='Enter Your Mobile Two' onChange={(event) => {
                        setMobile2(event.target.value)

                    }} /><br />

                    <i class="fa fa-envelope"></i><input type="text" ref={emailRef} name='email' className='ml-4  mb-5 pr-52 pl-4 h-10 rounded-lg' placeholder='Enter Your Email' onChange={(event) => {
                        setEmail(event.target.value)
                    }} /><br />



                    <i class="fa fa-unlock-alt" aria-hidden="true"></i><input type="password" ref={passwordRef} name="password" className='ml-4 mb-5 pr-52 pl-5 h-10 rounded-lg' id="" placeholder='Enter your Password' onChange={(event) => {
                        setPassword(event.target.value)
                    }} /> <br />

                    <i class="fa fa-envelope"></i><input type="" name='Website' className='ml-4 mb-5 pr-52 pl-4 h-10 rounded-lg' placeholder='Website'
                        onChange={(event) => {
                            setWebsite(event.target.value)

                        }} /><br />


                    <i class="fa fa-location-arrow" aria-hidden="true"></i><textarea name="address" className='ml-4 mb-5 pt-2 pr-52 pl-6 h-10 rounded-lg' placeholder='Your Address' id="" cols="30" rows="10" onChange={(event) => {
                        setAddress(event.target.value)
                    }}></textarea><br />

                    <i class="fa fa-signal" ></i><input type="text" className='ml-4 mb-5 pr-52 pl-5 h-10 rounded-lg' name='City' placeholder='Enter Your City'
                        onChange={(event) => {
                            setCity(event.target.value)

                        }} /><br />



                    <i class="fa fa-facebook-official" aria-hidden="true"></i><input type="" className='ml-4 mb-5 pr-52 pl-6 h-10 rounded-lg' name='Facebook' placeholder='Facebook Link'
                        onChange={(event) => {
                            setFacebook(event.target.value)

                        }} /><br />



                    <i class="fa fa-instagram" aria-hidden="true"></i><input type="text" className='ml-4 mb-5 pr-52 pl-6 h-10 rounded-lg' name='Instagram' placeholder='Instagram Link'
                        onChange={(event) => {
                            setInstagram(event.target.value)

                        }} /><br />


                </form>
                <a href='/Editor'><button type="submit" className='bg-blue-500 rounded-md pt-1 pb-1 text-white hover:text-blue-500 hover:bg-white  hover:border-2 hover:border-blue-500 w-32 ml-32 text-lg mt-6 ' onClick={handlesubmit}>Submit</button></a>
            </div >
            <Footer />

        </>
    )
}


export default Businessform;