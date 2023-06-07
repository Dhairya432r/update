import React from "react";
import ReactPlayer from 'react-player'
const Video = () => {
  return (
    <>

      <div className="flex justify-center bg-blue-400 pt-6 pb-6">


        <ReactPlayer  url={'https://youtu.be/orbkg5JH9C8'} controls={true} /> 

      </div>
      <br />
      <br />
    </>
  );
};

export default Video;