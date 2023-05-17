import React from 'react';

import About from "./About";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom'
import Daily from "./Daily";
import Blogs from "./Blogs";
import Days from "./Days";
import Festivals2 from "./Festivals2";
import Businesscategories from "./Businesscategories";
import Signup from "./Signup";
import Afterlogin from "./Afterlogin";
import Blogs2 from "./Blogs2";



function App() {
  return (
    <>

      {/* <Home/> */}
   
      <Routes>
      <Route path="home" element={<Home/>}></Route> 
      <Route path="about" element={<About/>}></Route>
      <Route path="Daily" element={<Daily/>}></Route>
      <Route path="Days" element={<Days/>}></Route>
      <Route path="Festivals2" element={<Festivals2/>}></Route>
      <Route path="Businesscategories" element={<Businesscategories/>}></Route>
      <Route path="Blogs" element={<Blogs/>}></Route>
   
      <Route path="Signup" element={<Signup/>}></Route>
      <Route path="Afterlogin" element={<Afterlogin/>}></Route>
      <Route path="Blogs2" element={<Blogs2/>}></Route>
      </Routes>   
      </> 
  );
};

export default App;
