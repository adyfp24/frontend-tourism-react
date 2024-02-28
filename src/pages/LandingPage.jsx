import React from "react";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";
import cloud1 from "../assets/images/landingpage/parallax/cloud1.png";
import cloud2 from "../assets/images/landingpage/parallax/cloud2.png";
import cloud3 from "../assets/images/landingpage/parallax/cloud3.png";
import mountain1 from "../assets/images/landingpage/parallax/mountain 1.png";
import mountain2 from "../assets/images/landingpage/parallax/mountain 2.png";
import mountain3 from "../assets/images/landingpage/parallax/mountain 3.png";
import tree from "../assets/images/landingpage/parallax/tree.png";
import bird from "../assets/images/landingpage/parallax/bird.png";
import ground from "../assets/images/landingpage/parallax/ground.png";


function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <section
        id="parallax"
        className="relative flex items-center justify-center pb-96  h-screen bg-custom-100"
      >
        <h1 className="font-bold text-center ">
          <span className="text-4xl md:text-8xl lg:text-4xl font-bold text-custom-300">
            WONDERFUL OF
          </span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-custom-300">
            M A L A N G
          </span>
        </h1>
        {/* <img src={bg} className="absolute -z-2 left-0" /> */}
        <img src={bird} className="absolute w-auto h-12 left-1/4 top-96" />
        <img src={cloud1} className="absolute  w-1/3  h-34 left-96 top-96" />
        <img src={cloud2} className="absolute  w-1/3 top-96  h-34 right-80" />
        <img src={cloud3} className="absolute  w-64 top-56 h-34 right-0 " />
        <img src={mountain3} className="absolute top-80  left-0" />
        <img src={mountain2} className="absolute bottom-32 left-0" />
        <img src={mountain1} className="absolute -bottom-8 left-0" />
        <img src={tree} className="absolute -bottom-24 left-0" />
        <img src={ground} className="absolute -bottom-24  left-0" />
      </section>
    
      <div className="bg-custom-300 pt-32">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde
          labore aspernatur corporis velit, alias voluptate. Architecto magni
          dolor qui, temporibus veniam ipsam? Error numquam nulla dicta officia
          commodi consectetur?
        </p>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
