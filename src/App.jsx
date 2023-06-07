import React from 'react';
import Catogaries from "./catogaries";
import About from "./About";
import Home from "./Home";
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Daily from "./Daily";
import Blogs from "./Blogs";
import Days from "./Days";
import Festivals2 from "./Festivals2";
import Businesscategories from "./Businesscategories";
import Signup from "./Signup";
import Afterlogin from "./Afterlogin";
import Blogs2 from "./Blogs2";
import Imageslider from './Imageslider';
import Imageslider2 from './Imageslider2';
// import Slider from './Slider';
import Slider2 from './Slider2';
import Businessform from './Businessform';
// import Editor from './Editor';


function App() {
  return (
    <>

      {/* <Home/> */}
<BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>}></Route>
      <Route  path="/Daily" element={<Daily/>}></Route>
      <Route  path="/Days" element={<Days/>}></Route>
      <Route  path="/Festivals2" element={<Festivals2/>}></Route>
      <Route  path="/Businesscategories" element={<Businesscategories/>}></Route>
      <Route  path="/Blogs" element={<Blogs/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Afterlogin" element={<Afterlogin/>}></Route>
      <Route path="/Blogs2" element={<Blogs2/>}></Route>
      <Route path='/Imageslider' element={<Imageslider/>}></Route>
      <Route path='/Imageslider2' element={<Imageslider2/>}></Route>
      {/* <Route path='/Slider' element={<Slider/>}></Route> */}
      <Route path='/Slider2' element={<Slider2/>}></Route>
      <Route path='/Businessform' element={<Businessform/>}></Route>
      <Route path='/Catogaries' element={<Catogaries/>}></Route>
      {/* <Route path='/Editor' element={<Editor/>}></Route> */}
      </Routes> 
      </BrowserRouter>  
      </> 
  );
};

export default App;
