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
import bromohead from "../assets/images/landingpage/Bromo.png";
import malanghead from "../assets/images/landingpage/malang.png";
import playicon from "../assets/images/landingpage/play.png";
import mulai from "../assets/images/landingpage/mulai.png";
import nikmati from "../assets/images/landingpage/nikmati.png";
import satu from "../assets/images/landingpage/1.png";
import dua from "../assets/images/landingpage/2.png";
import tiga from "../assets/images/landingpage/3.png";
import empat from "../assets/images/landingpage/4.png";
import lima from "../assets/images/landingpage/5.png";
import enam from "../assets/images/landingpage/6.png";
import frame from "../assets/images/landingpage/frame.png";
import love from "../assets/images/landingpage/love.png";
import bot2 from "../assets/images/landingpage/bot2.png";
import masmas from "../assets/images/landingpage/masmas.png";
import left from "../assets/images/landingpage/left.png";
import right from "../assets/images/landingpage/right.png";
import sunset from "../assets/images/landingpage/sunset.png";
import santerra from "../assets/images/landingpage/santerra.png";
import angkot from "../assets/images/landingpage/angkot.png";
import arrow from "../assets/images/landingpage/arrow.png";
import arrowleft from "../assets/images/landingpage/arrowleft.png";
import arrowdown from "../assets/images/landingpage/arrowdown.png";
import starlima from "../assets/images/landingpage/rate 5.png";
import tipsMalang from "../assets/images/tips-malang.png";
import starempat from "../assets/images/landingpage/rate 4.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ParallaxSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed");
        const distance = window.scrollY * speed;

        element.style.transform = `translateY(-${distance}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax2");

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed");
        const distance = window.scrollY * speed;

        element.style.transform = `translateY(${distance}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="parallax"
      className="relative flex items-center justify-center pb-96  sm:relative sm:flex sm:items-center sm:justify-center sm:pb-96 sm:h-screen md:relative md:flex md:items-center md:justify-center md:pb-96 md:h-screen lg:relative lg:flex lg:items-center lg:justify-center lg:pb-96 lg:h-screen xl:relative xl:flex xl:items-center xl:justify-center xl:pb-96 xl:h-screen 2xl:relative 2xl:flex 2xl:items-center 2xl:justify-center 2xl:pb-96 2xl:h-screen bg-custom-100"
    >
      <img
        src={bird}
        className="absolute w-auto h-6 left-1/4 top-96 sm:absolute sm:w-auto sm:h-12 sm:left-1/4 sm:top-80 sm:mt-56 md:absolute md:w-auto md:h-12 md:left-1/4 md:top-96 lg:absolute lg:w-auto lg:h-12 lg:left-1/4 lg:top-96 xl:absolute xl:w-auto xl:h-12 xl:left-1/4 xl:top-96 2xl:absolute 2xl:w-auto 2xl:h-12 2xl:left-1/4 2xl:top-96 parallax "
        data-speed="0.6"
        alt="Bird"
      />
      <img
        src={cloud1}
        className="absolute w-1/4 ml-32 h-34 bottom-16 mb-3 sm:absolute sm:w-1/3 sm:h-34 sm:left-44 sm:top-96 sm:mt-72 md:absolute md:w-1/3 md:h-34 md:mt-48 md:left-44 md:top-96 lg:absolute lg:w-1/3 lg:h-30 lg:left-80 lg:top-96 lg:mt-56 xl:absolute xl:w-1/3 xl:h-34 xl:left-96 xl:top-96 2xl:absolute 2xl:w-1/3 2xl:h-34 2xl:left-96 2xl:ml-96 2xl:top-52 parallax"
        data-speed="0.1"
        alt="Cloud 1"
      />
      <img
        src={cloud2}
        className="absolute w-60 h-24 bottom-8 right-48  sm:absolute sm:w-1/3 sm:h-34 sm:top-96 sm:right-80 sm:mt- md:absolute md:w-1/3 md:h-34 md:mt-48 md:left-24 lg:absolute lg:w-1/3 lg:h-34 lg:top-96 lg:mt-56 lg:right-80 xl:absolute xl:w-1/3 xl:h-34 xl:top-96 xl:right-80 2xl:absolute 2xl:w-1/3 2xl:h-52 2xl:top-52 2xl:right-96 parallax"
        data-speed="0.2"
        alt="Cloud 2"
      />
      <img
        src={cloud3}
        className="absolute w-24 h-20 bottom-32 right-0 sm:absolute sm:w-64 sm:h-34 sm:top-80 sm:mt-80 sm:right-0 md:absolute md:w-64 md:h-34 md:mt-72
         md:right-0 lg:absolute lg:w-64 lg:h-34 lg:top-96 lg:mt-10 lg:right-0 xl:absolute xl:w-64 xl:h-34 xl:top-64 xl:right-0 2xl:absolute 2xl:w-64 2xl:h-48 2xl:right-0 parallax"
        data-speed="0.4"
        alt="Cloud 3"
      />
      <img
        src={mountain3}
        className="absolute bottom-16 left-0 sm:absolute sm:top-96 sm:pt-80 sm:mt-4 sm:left-0 md:absolute md:pt-72 md:left-0 lg:absolute lg:top-56 lg:mt-14 lg:left-0 xl:absolute xl:top-80 xl:left-0 2xl:absolute 2xl:top-0 2xl:left-0 parallax z-10"
        data-speed="0.1"
        alt="Mountain 3"
      />
      <img
        src={mountain2}
        className="absolute bottom-8 left-0 sm:absolute sm:-bottom-3 sm:left-0 md:absolute md:bottom-10 md:left-0 lg:absolute lg:bottom-20 lg:left-0 xl:absolute xl:bottom-32 xl:left-0 2xl:absolute 2xl:bottom-32 2xl:left-0 parallax z-10"
        data-speed="0.1"
        alt="Mountain 2"
      />
      <img
        src={mountain1}
        className="absolute -bottom-9 mb-5 left-0 sm:absolute sm:-bottom-24 sm:left-0 md:absolute md:-bottom-16 md:left-0 lg:absolute lg:-bottom-16 lg:left-0 xl:absolute xl:-bottom-8 xl:left-0 2xl:absolute 2xl:-bottom-8 2xl:left-0 parallax z-10"
        data-speed="0.1 "
        alt="Mountain 1"
      />
      <img
        src={tree}
        className="absolute -bottom-9 left-0 sm:absolute sm:-bottom-24 sm:left-0 md:absolute  md:left-0 lg:absolute lg:-bottom-24 lg:left-0 xl:absolute xl:-bottom-24 xl:left-0 2xl:absolute 2xl:-bottom-24 2xl:left-0 parallax z-10"
        data-speed="0.1"
        alt="Tree"
      />
      <img
        src={ground}
        className="absolute -bottom-10 left-0 sm:absolute sm:-bottom-24 sm:left-0 md:absolute md:-bottom- md:left-0 lg:absolute lg:-bottom-24 lg:left-0 xl:absolute xl:-bottom-24 xl:left-0 2xl:absolute 2xl:-bottom-24 2xl:left-0 parallax z-10"
        data-speed="0.1"
        alt="Ground"
      />
      <div className="flex flex-col pt-36 w-full h-full  ">
        <h1 className="font-bold text-center text-custom-300  ">
          <span
            className="absolute top-36 left-24 text-2xl sm:text-3xl sm:absolute sm:left-12 sm:pl-52 md:text-4xl md:absolute md:left-24 md:pl-72 lg:text-4xl lg:absolute lg:left-1/4 lg:pl-36 xl:text-4xl xl:absolute xl:left-1/3 xl:pl-36 2xl:text-4xl 2xl:absolute 2xl:left-1/3 2xl:pl-52 font-bold parallax2"
            data-speed="0.8"
          >
            WONDERFUL OF
          </span>
          <br />
          <span
            className="absolute left-12 ml-3 top-36 pt-10 text-5xl sm:text-7xl sm:absolute sm:left-72 sm:pl-52  sm:pt-10 md:text-7xl md:absolute md:left-26  md:pl-2 md:pt-10 lg:text-8xl lg:absolute lg:left-1/4 lg:pl-2 lg:pt-10 xl:text-8xl xl:absolute xl:left-1/3 xl:pl-8 xl:pt-10 2xl:text-8xl 2xl:absolute 2xl:left-1/3 2xl:pl-20 2xl:pt-10 font-bold parallax2"
            data-speed="0.8"
          >
            M A L A N G
          </span>
        </h1>
      </div>
    </section>
  );
};

const FaQItem = () => {
  return (
    <div className="w-full sm:p-10">
      <FaQQuestion
        question="Apakah di masa liburan tiket Jatim Park tambah mahal?"
        answer="Untuk segala administrasi termasuk mengenai harga tiket bergantung pada penyelenggara wisata. Namun, untuk saat ini harga tiket masuk Jatim Park tetap di harga Rp80.000,00/orang."
      />
      <FaQQuestion
        question="Apakah sekarang sudah aman untuk pendakian Gunung Semeru?"
        answer="Pendakian Gunung Semeru telah dibuka sejak tanggal 19 September 2023 dan sudah dipastikan untuk pemadaman dan memastikan kondisi kawasan pendakian telah aman"
      />
      <FaQQuestion
        question="Apakah di Santera menyediakan kolam renang?"
        answer="Iya. Selain itu, Santera juga menyediakan berbagai fasilitas, seperti virtual reality, trampolin, house of terror, sepatu roda, ontang anting, istana balon, komedi putar, cinema 7D, bumper car, playground, dan lainnya."
      />
      <FaQQuestion
        question="Apakah boleh membawa makanan di Jatim Park?"
        answer="Tidak diperkenankan untuk membawa makanan dan minuman dari luar kawasan Jatim Park."
      />
    </div>
  );
};

const FaQQuestion = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const buttonAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="bg-white p-5 rounded-lg mt-5">
      <div className="flex justify-between" onClick={buttonAnswer}>
        <p className="cursor-pointer font-medium">{question}</p>
        <img className={showAnswer ? "hidden" : "w-6 h-3"} src={arrowdown} />
        <img
          src={arrowleft}
          className={showAnswer ? "w-3 h-5" : "hidden mt-3"}
        />
      </div>
      <p id="jawaban" className={showAnswer ? "mt-3 pl-4 text-sm" : "hidden mt-3"}>
        {answer}
      </p>
    </div>
  );
};

function LandingPage() {
  return (
    <div className="bg-custom-300">
      <Navbar />
      <ParallaxSection />
      <div className="body parallax bg-custom-300 pt-16 pb-2 xl:pt-32 flex flex-col items-center ">
        <div id="body 1" className=" p-6 w-11/12">
          <div
            id="tentang malang"
            className="sm:flex h-80 rounded-lg sm:justify-normal"
          >
            <div className="bg-custom-100 rounded-xl flex relative ">
              <img
                src={bromohead}
                alt="bromo"
                className="relative h-44 left-10 xl:h-96 xl:left-10 xl:bottom-7 md:h-full 2xl:h-96 2xl:left-10 2xl:bottom-7 transform translate-x-[-20px]"
              />
              <img
                src={malanghead}
                alt="kota malang"
                className="relative h-44 left-16 xl:h-96 xl:left-20 xl:bottom-7 md:h-full 2xl:h-96 2xl:left-20 2xl:bottom-7 transform translate-x-[-20px]"
              />
              <img
                src={playicon}
                alt=""
                className="relative right-5 top-20 w-7 h-7 sm:right-10 sm:top-36 sm:w-10 sm:h-10"
              />
            </div>
            <div className="bg-custom-100 rounded-xl pl-6 md:pl-10   xl:pl-80 2xl:pl-32 mt-2 flex flex-col p-5 sm:p-0 justify-center text-start">
              <p className="lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold pb-3">
                Tentang Malang
              </p>
              <p className="lg:text-xs xl:text-lg 2xl:text-xl mr-3 text-sm text-justify sm:text-base pb-3">
                Kota Malang adalah sebuah kota yang terletak di provinsi Jawa
                Timur, Indonesia. Kota terbesar kedua di Jawa Timur setelah Surabaya, dan
                kota terbesar ke-12 di Indonesia. Kota ini didirikan pada masa Pemerintahan Belanda pada
                tanggal 1 April 1914 dengan E.K Broeveldt sebagai wali kota
                pertama.
              </p>
              <Link to='/about'>
              <p className="bg-custom-200 hover:bg-custom-500 w-fit p-3 lg:p-1 xl:p-2 xl:text-xs 2xl:p-4 text-center rounded-full text-white font-semibold">
                Selengkapnya
              </p>
              </Link>
            </div>
          </div>
          <div
            id="mulai petualangan"
            className="mt-80 sm:mt-0 sm:pt-10 lg:pt-20 xl:pt-48 2xl:pt-48 mb-10"
          >
            <div className="flex text-white font-bold text-xs sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl justify-center gap-3 sm:gap-5 lg:gap-5 xl:gap-10 2xl:gap-20">
              <p>MULAI TEMUKAN</p>
              <img
                src={mulai}
                className="w-auto h-2 hidden sm:block sm:h-10 lg:h-14 xl:h-16"
              />
              <p className="text-custom-500 sm:text-white">PETUALANGAN</p>
            </div>
            <div className="flex text-white font-bold text-xs sm:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl justify-center gap-3 sm:gap-5 lg:gap-5 xl:gap-10 2xl:gap-20 pt-4">
              <p className="text-custom-500 sm:text-white">NIKMATI</p>
              <img
                src={nikmati}
                className="w-auto h-2 hidden sm:block sm:h-10 lg:h-14 xl:h-16"
              />
              <p>PENGALAMAN MENAKJUBKAN</p>
            </div>
          </div>

          <div id="card" className=" p-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <Link to='destinasi/museum-angkut'>
            <div className="relative group">
              <img
                src={satu}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute top-16 left-4 lg:top-44 lg:left-30 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Museum Angkut 
              </div>
            </div>
            </Link>
            <div className="">
              <img src={frame} alt="" />
              <p className="relative bottom-10 left-2 sm:bottom-20 sm:left-4 tex lg:bottom-24 lg:left-4 xl:bottom-36 xl:left-8 text-white font-semibold  lg:text-2xl xl:text-4xl 2xl:text-5xl">
                Wonderful
              </p>
            </div>
            <Link to='/destinasi/coban-rondo'>
            <div className="relative group">
              <img
                src={dua}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute top-16 left-6  lg:top-44 lg:left-14 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100"/>
              <div className="absolute top-16 left-6 lg:top-44 lg:left-12 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Coban Rondo
              </div>
            </div>
            </Link>
            <Link to='/destinasi/jatim-park'>
            <div className="relative group">
              <img
                src={tiga}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute top-16 left-8 lg:top-44 lg:left-30 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Jatim Park 
              </div>
            </div>
            </Link>
            <Link to='/destinasi/tugu-malang'>
            <div className="relative group">
              <img
                src={empat}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute top-16 left-7 lg:top-44 lg:left-30 text-center text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Tugu Malang
              </div>
            </div>
            </Link>
            <Link to='/destinasi/semeru'>
            <div className="relative group">
              <img
                src={lima}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute top-16 left-10 lg:top-44 lg:left-14 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Semeru 
              </div>
            </div>
            </Link>
            <div className="">
              <img src={frame} alt="" />
              <p className="relative bottom-10 left-2 sm:bottom-20 sm:left-4 lg:bottom-24 lg:left-4 xl:bottom-36 xl:left-8 text-white font-semibold lg:text-2xl xl:text-4xl 2xl:text-5xl">
                Malang
              </p>
            </div>
            <Link to='/destinasi/museum-angkut'>
            <div className="relative group">
              <img
                src={enam}
                alt=""
                className="w-full transition-transform duration-500 transform group-hover:brightness-75"
              />
              <div className="absolute top-16 left-5 lg:top-44 lg:left-30 text-white text-xs lg:text-5xl font-semibold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Musem Angkut
              </div>
            </div>
            </Link>
          </div>
          <div className=" h-10 text-center text-white flex justify-center mb-20">
            <Link to='/destinasi'>
            <p className="font-medium bg-custom-200 hover:bg-custom-500 w-36 rounded-full p-2">
              Jelajahi
            </p>
            </Link>
          </div>
          
          <div className="bg-custom-100 shadow-xl rounded-xl flex justify-between">
            <div className="justify-center w-full relative left-5 sm:left-20 flex flex-col">
              <p className="font-semibold text-lg lg:text-xl xl:text-5xl">
                Hai, Aku Jaka
              </p>
              <p className="text-start mt-3 sm:mt-5 text-sm lg:text-xl xl:text-3xl">
                Chatbot AI yang akan membantumu menjelajahi Malang. <br />
                Tanyakan apapun padaku untuk mengetahui Malang lebih banyak
              </p>
              <Link to='/chatbot'>
              <p className="text-justify bg-custom-200 hover:bg-custom-500 w-fit text-white rounded-full text-xs sm:text-lg p-3 mt-4 sm:mt-10">
                Coba Jaka
              </p>
              </Link>
            </div>
            <div>
              <img src={bot2} className="mt-64 " />
            </div>
          </div>
        </div>
        <section
          id="tips"
          className=" sm:mt-14 my-6 mb-0 sm:mb-12 h-full font-sans"
        >
          <div className=" py-6">
            <img className="w-full" src={tipsMalang} alt="" />
          </div>
        </section>

        <div id="card section" className="w-11/12">
          <div className="flex justify-between">
            <div className="text-white font-semibold text-xl pl-4 sm:text-2xl ">
              <p>Terbaru dari kami</p>
            </div>
            <div className=" hidden sm:flex w-10 h-10 gap-4 mr-16">
              <img src={left} alt="" />
              <img src={right} alt="" />
            </div>
          </div>
          <section id="card" className="sm:flex justify-around gap-5 mt-8">
            <div className="my-4 mx-3">
              <img src={sunset} alt="" />
              <div className="bg-white p-5 rounded-b-xl h-52 ">
                <p className="font-normal">baca 3 menit</p>
                <p className="font-bold">
                  Pecinta sunset? Ayo kunjungi tempat ini!
                </p>
                <p className="font-thin text-base xl:text-sm">
                  Sunset adalah saat dimana matahari akan segera tenggelam dan
                  justru banyak orang...
                </p>
                <div className="hidden sm:flex items-center gap-3 mt-4">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
            <div className="my-4 mx-3">
              <img src={santerra} alt="" />
              <div className="bg-white p-5 rounded-b-xl h-52">
                <p className="font-normal">baca 2 menit</p>
                <p className="font-bold">
                  Wisata Baru! Santerra De Laponte Siap Dikunjungi
                </p>
                <p className="font-thin text-base xl:text-sm">
                  Malang memang tak pernah habis soal wisatanya. Kali ini,
                  Pemerintah Malang baru saja meresmikan...
                </p>
                <div className="hidden sm:flex items-center gap-3 mt-4">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
            <div className="my-4 mx-3">
              <img src={angkot} alt="" />
              <div className="bg-white p-5 rounded-b-xl h-52">
                <p className="font-normal">baca 4 menit</p>
                <p className="font-bold">Liburan? Museum Angkut, Yuk </p>
                <p className="font-thin text-base">
                  Museum Angkut adalah salah satu destinasi wisata yang
                  menampilkan berbagai perkem...
                </p>
                <div className="hidden sm:flex items-center gap-3 mt-4">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
          </section>
          <div className="justify-center flex">
            <Link to='/blog'>
            <p className="bg-custom-200 w-fit text-white rounded-full p-3 mt-10">
              Selengkapnya
            </p>
            </Link>
          </div>
        </div>
        <div
          id="FaQ"
          className="bg-custom-100  w-full mt-10 sm:flex justify-around"
        >
          <div className="bg-custom-100 w-full p-10">
            <p className="text-4xl sm:text-6xl font-semibold">
              Fraquently Asked <br /> Question
            </p>
            <p className="mt-5 text-xl">
              Berikut beberapa jawaban yang segera membantu pertanyaanmu dan
              jika tidak ada, tanyakan pada admin di bawah ini ya!
            </p>
            <p className="bg-custom-200 hover:bg-custom-500 w-fit text-white font-semibold rounded-full px-8 py-4 mt-10 text-xl">
              Tanya
            </p>
          </div>
          <div className=" w-full px-10 pb-10">
            <FaQItem />
          </div>
        </div>

        <div id="komentar" className="w-10/12 sm:w-11/12 mt-10">
          <div id="card section" className="w-11/12">
            <div className="flex justify-between">
              <div className="text-white font-semibold text-xl sm:text-2xl ">
                <p>Terbaru dari kami</p>
              </div>
              <div className="hidden sm:flex w-10 h-10 gap-4 mr-4">
                <img src={left} alt="" />
                <img src={right} alt="" />
              </div>
            </div>
          </div>
          <div className=" sm:flex sm:gap-16 justify-around mt-5">
            <div className="bg-custom-100 p-5 rounded-2xl flex flex-col justify-between h-72 sm:mx-3 my-2 gap-5 ">
              <p className="font-bold text-xl sm:text-2xl">"Tempatnya bagus.sejuk"</p>
              <p className="font-thin">
                Tempatnya enak, rapi, sejuk, bagus banget kalo liburan <br />{" "}
                bawa keluarga ke sini ada seluncuran pelangi yang <br /> viral
                itu juga. bagus dehh pokoknya
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Rani</p>
                  <p>Santera</p>
                </div>
                <div>
                  <img src={starlima} className="w-fit h-6" />
                </div>
              </div>
            </div>
            <div className="bg-custom-100 p-5 rounded-2xl flex flex-col justify-between h-72 gap-5 sm:mx-3 my-2">
              <p className="font-bold text-xl sm:text-2xl">"bagus poll"</p>
              <p className="font-thin">
                Udah rencana ke bromo dari tahun kemarin akhirnya
                <br /> sekarang bisa kesana. bagus bangett meskipun paling bagus{" "}
                <br /> kesini pas subuh udah gitu hawanya dingin banget
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Andre</p>
                  <p>Gunung Bromo</p>
                </div>
                <div>
                  <img src={starempat} className="w-fit h-6" />
                </div>
              </div>
            </div>
            <div className="bg-custom-100 p-5 rounded-2xl flex flex-col justify-between h-72 gap-5 sm:mx-3 my-2">
              <p className="font-bold text-xl sm:text-2xl">“Keluarga pada happy”</p>
              <p className="font-thin">
                pas banget buat liburan sekolah soalnya anak-anak juga pada{" "}
                <br /> minta kesini katanya permainannya banyak. eh ternyata{" "}
                <br /> ga cuma permainan ada museumnya juga, bagus
              </p>
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">Darmawah</p>
                  <p>Jatim Park 1</p>
                </div>
                <div>
                  <img src={starlima} className="w-fit h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
