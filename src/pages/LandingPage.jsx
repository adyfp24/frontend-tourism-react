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
import starempat from "../assets/images/landingpage/rate 4.png";
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
      className="relative flex items-center justify-center pb-96 h-screen bg-custom-100"
    >
      <img
        src={bird}
        className="absolute w-auto h-12 left-1/4 top-96 parallax"
        data-speed="0.6"
        alt="Bird"
      />
      <img
        src={cloud1}
        className="absolute w-1/3 h-34 left-96 top-96 parallax"
        data-speed="0.1"
        alt="Cloud 1"
      />
      <img
        src={cloud2}
        className="absolute w-1/3 h-34 top-96 right-80 parallax"
        data-speed="0.2"
        alt="Cloud 2"
      />
      <img
        src={cloud3}
        className="absolute w-64 h-34 top-64 right-0 parallax"
        data-speed="0.4"
        alt="Cloud 3"
      />
      <img
        src={mountain3}
        className="absolute top-80 left-0 parallax z-10"
        data-speed="0.1"
        alt="Mountain 3"
      />
      <img
        src={mountain2}
        className="absolute bottom-32 left-0 parallax z-10"
        data-speed="0.2"
        alt="Mountain 2"
      />
      <img
        src={mountain1}
        className="absolute -bottom-8 left-0 parallax z-10"
        data-speed="0.2"
        alt="Mountain 1"
      />
      <img
        src={tree}
        className="absolute -bottom-24 left-0 parallax z-10"
        data-speed="0.2"
        alt="Tree"
      />
      <img
        src={ground}
        className="absolute -bottom-24 left-0 parallax z-10"
        data-speed="0.1"
        alt="Ground"
      />
      <div className="flex flex-col pt-36 w-full h-full  ">
        <h1 className="font-bold text-center text-custom-300  ">
          <span className="text-4xl md:text-8xl lg:text-4xl absolute left-1/3 pl-52  font-bold parallax2" data-speed="0.8">
            WONDERFUL OF
          </span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-8xl absolute  left-1/3 pl-20 pt-10 font-bold parallax2" data-speed="0.8">
            M A L A N G
          </span>
        </h1>
      </div>
    </section>
  );
};

const FaQItem = () => {
  return (
    <div className="w-full p-10">
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
      <p id="jawaban" className={showAnswer ? "mt-3 pl-4" : "hidden mt-3"}>
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
      {/* <section
        id="parallax"
        className="relative flex items-center justify-center pb-96  h-screen bg-custom-100"
      >
        <img src={bird} className="absolute w-auto h-12 left-1/4 top-96" />
        <img src={cloud1} className="absolute  w-1/3  h-34 left-96 top-96" />
        <img src={cloud2} className="absolute  w-1/3 top-96  h-34 right-80" />
        <img src={cloud3} className="absolute  w-64 top-56 h-34 right-0 " />
        <img src={mountain3} className="absolute top-80  left-0" />
        <img src={mountain2} className="absolute bottom-32 left-0" />
        <img src={mountain1} className="absolute -bottom-8 left-0" />
        <img src={tree} className="absolute -bottom-24 left-0" />
        <img src={ground} className="absolute -bottom-24  left-0" />
        <h1 className="font-bold text-center ">
          <span className="text-4xl md:text-8xl lg:text-4xl font-bold text-custom-300">
            WONDERFUL OF
          </span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-custom-300">
            M A L A N G
          </span>
        </h1>
      </section> */}

      <div className="body parallax bg-custom-300 pt-32 flex flex-col items-center ">
        <div id="body 1" className=" p-6 w-11/12">
          <div id="tentang malang" className=" flex h-80 rounded-lg">
            <div className="bg-custom-100 rounded-xl flex relative ">
              <img
                src={bromohead}
                alt="bromo"
                className="relative h-96 left-10 bottom-7"
              />
              <img
                src={malanghead}
                alt="kota malang"
                className="relative h-96 left-20 bottom-7"
              />
              <img
                src={playicon}
                alt=""
                className="relative right-10 top-36 w-10 h-10 "
              />
            </div>
            <div className="bg-custom-100 rounded-xl pl-20 flex flex-col justify-center text-start">
              <p className="text-4xl font-semibold pb-3">Tentang Malang</p>
              <p className="text-xl pb-3">
                Kota Malang adalah sebuah kota yang terletak di provinsi Jawa
                Timur, Indonesia,
                <br /> Kota terbesar kedua di Jawa Timur setelah Surabaya, dan
                kota terbesar ke-12 di Indonesia.
                <br /> Kota ini didirikan pada masa Pemerintahan Belanda pada
                tanggal 1 April 1914 dengan E.K Broeveldt sebagai wali kota
                pertama.
              </p>
              <p className="bg-custom-200 w-2/12 p-4 text-center rounded-full text-white font-semibold">
                Selengkapnya
              </p>
            </div>
          </div>
          <div id="mulai petualangan" className="pt-56 mb-10">
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
          <div id="card" className=" p-5 grid grid-cols-4 gap-6">
            <img src={satu} alt="" className="" />
            <div className="">
              <img src={frame} alt="" />
              <p className="relative bottom-36 left-8 text-white font-semibold text-5xl">
                Wonderful
              </p>
            </div>
            <img src={dua} alt="" />
            <img src={tiga} alt="" />
            <img src={empat} alt="" />
            <img src={lima} alt="" />
            <div className="">
              <img src={frame} alt="" />
              <p className="relative bottom-36 left-8 text-white font-semibold text-5xl">
                Malang
              </p>
            </div>
            <img src={enam} alt="" />
          </div>
          <div className=" h-10 text-center text-white flex justify-center mb-20">
            <p className="font-medium bg-custom-200 w-36 rounded-full p-2">
              Jelajahi
            </p>
          </div>
          <div className="bg-custom-100 shadow-xl rounded-xl flex justify-between">
            <div className=" justify-center w-full relative left-20 flex flex-col">
              <p className="font-semibold text-5xl">Hai, Aku Jaka</p>
              <p className="mt-5 text-3xl">
                Chatbot yang akan membantumu menjelajahi Malang. <br />
                Tanyakan apapun padaku untuk mengetahui Malang lebih banyak
              </p>
              <p className="bg-custom-200 w-fit text-white rounded-full p-3 mt-10">
                Coba chatbot
              </p>
            </div>
            <div>
              <img src={bot2} className="" />
            </div>
          </div>
        </div>
        <div
          id="masmas"
          className="flex flex-col mb-10"
        >
          <p className="text-white relative top-96 text-8xl ml-40 font-semibold mb-10">
            Tips Berkunjung ke <br />
            Malang{" "}
          </p>
          <p className="text-white relative top-96 text-3xl ml-40 font-semibold">
            Khawatir untuk segala petualanganmu di Malang? Berikut tips yang
            bisa <br /> kamu lakukan untuk mendapatkan pengalaman terbaik{" "}
          </p>
          <img src={masmas} className="pt-10" />
        </div>

        <div id="card section" className="w-11/12">
          <div className="flex justify-between">
            <div className="text-white font-semibold text-2xl ">
              <p>Terbaru dari kami</p>
            </div>
            <div className="flex w-10 h-10 gap-4 mr-16">
              <img src={left} alt="" />
              <img src={right} alt="" />
            </div>
          </div>
          <section id="card" className="flex justify-around gap-5 mt-8">
            <div>
              <img src={sunset} alt="" />
              <div className="bg-white p-5 rounded-xl">
                <p className="font-normal">baca 3 menit</p>
                <p className="font-bold">
                  Pecinta sunset? Ayo kunjungi tempat ini!
                </p>
                <p className="font-semibold">
                  Sunset adalah saat dimana matahari akan segera tenggelam dan
                  justru banyak orang...
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
            <div>
              <img src={santerra} alt="" />
              <div className="bg-white p-5 rounded-xl">
                <p className="font-normal">baca 2 menit</p>
                <p className="font-bold">
                  Wisata Baru! Santerra De Laponte Siap Dikunjungi
                </p>
                <p className="font-semibold">
                  Malang memang tak pernah habis soal wisatanya. Kali ini,
                  Pemerintah Malang baru saja meresmikan...
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
            <div>
              <img src={angkot} alt="" />
              <div className="bg-white p-5 rounded-xl">
                <p className="font-normal">baca 4 menit</p>
                <p className="font-bold">Liburan? Museum Angkut, Yuk </p>
                <p className="font-semibold">
                  Museum Angkut adalah salah satu destinasi wisata yang
                  menampilkan berbagai perkem...
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <p className="text-custom-200">Lebih lanjut</p>
                  <img src={arrow} className="w-6 h-4" />
                </div>
              </div>
            </div>
          </section>
          <div className="justify-center flex">
            <p className="bg-custom-200 w-fit text-white rounded-full p-3 mt-10">
              Selengkapnya
            </p>
          </div>
        </div>
        <div
          id="FaQ"
          className="bg-custom-100  w-full mt-10 flex justify-around"
        >
          <div className="bg-custom-100 w-full p-10">
            <p className="text-6xl font-semibold">
              Fraquently Asked <br /> Question
            </p>
            <p className="mt-5 text-xl">
              Berikut beberapa jawaban yang segera membantu pertanyaanmu dan
              jika tidak ada, tanyakan pada admin di bawah ini ya!
            </p>
            <p className="bg-custom-200 w-fit text-white rounded-full px-8 py-4 mt-10 text-xl">
              Tanya
            </p>
          </div>
          <div className=" w-full p-10">
            <FaQItem />
          </div>
        </div>
        <div id="komentar" className="w-11/12 mt-10">
          <div id="card section" className="w-11/12">
            <div className="flex justify-between">
              <div className="text-white font-semibold text-2xl ">
                <p>Terbaru dari kami</p>
              </div>
              <div className="flex w-10 h-10 gap-4 mr-16">
                <img src={left} alt="" />
                <img src={right} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-16 justify-around mt-5">
            <div className="bg-custom-100 p-5 rounded-2xl flex flex-col gap-5">
              <p className="font-bold text-2xl">"Tempatnya bagus.sejuk"</p>
              <p className="text-lg">
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
            <div className="bg-custom-100 p-5 rounded-2xl flex flex-col gap-5">
              <p className="font-bold text-2xl">"bagus poll"</p>
              <p className="text-lg">
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
            <div className="bg-custom-100 p-5 rounded-2xl flex flex-col gap-5">
              <p className="font-bold text-2xl">“Keluarga pada happy”</p>
              <p className="text-lg">
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
