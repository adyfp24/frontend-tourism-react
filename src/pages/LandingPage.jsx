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
    <div className="bg-custom-300">
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

      <div className="body parallax bg-custom-300 pt-32 flex flex-col items-center ">
        <div id="body 1" className=" p-6 w-11/12">
          <div id="tentang malang" className=" flex h-80 rounded-lg">
            <div className="bg-custom-100 rounded-xl flex relative ">
              <img src={bromohead} alt="bromo" className="relative h-96 left-10 bottom-7"/>
              <img src={malanghead} alt="kota malang" className="relative h-96 left-20 bottom-7"/>
              <img src={playicon} alt="" className="relative right-10 top-36 w-10 h-10 " />
            </div>
            <div className="bg-custom-100 rounded-xl pl-20 flex flex-col justify-center text-start">
              <p className="text-4xl font-semibold pb-3">Tentang Malang</p>
              <p className="text-xl pb-3">Kota Malang adalah sebuah kota yang terletak di provinsi Jawa Timur, Indonesia,<br/> Kota terbesar kedua di Jawa Timur setelah Surabaya, dan kota terbesar ke-12 di Indonesia.<br/> Kota ini didirikan pada masa Pemerintahan Belanda pada tanggal 1 April 1914 dengan E.K Broeveldt sebagai wali kota pertama.</p>
              <p className="bg-custom-200 w-2/12 p-4 text-center rounded-full text-white font-semibold">Selengkapnya</p>
            </div>
          </div>
          <div id="mulai petualangan" className="pt-56 bg-red-300">
            <div className="flex text-white font-bold text-6xl justify-center gap-20">
              <p>MULAI TEMUKAN</p>
              <img src={mulai} className="w-auto h-16" />
              <p>PETUALANGAN</p>
            </div>
            <div className="flex text-white font-bold text-6xl justify-center gap-16 pt-4">
              <p>NIKMATI</p>
              <img src={nikmati} className="w-auto h-16" />
              <p>PENGALAMAN MENAKJUBKAN</p>
            </div>
          </div>
          <div id="card" className="bg-blue-500 p-5 grid grid-cols-4 gap-6">
            <div>
              <img src={love} alt="" className=""/>
              <img src={satu} alt="" />
            </div>
            <img src={frame} alt="" />
            <img src={dua} alt="" />
            <img src={tiga} alt="" />
            <img src={empat} alt="" />
            <img src={lima} alt="" />
            <img src={frame} alt="" />
            <img src={enam} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
