import React from "react";
import Navbar from "../../includes/Navbar";
import Footer from "../../includes/Footer";
import cobanImg from "../../assets/images/coban-rondo/coban-rondo.png";
import labirin from "../../assets/images/coban-rondo/labirin.png";
import airTerjun from "../../assets/images/coban-rondo/air-terjun.png";
import penginapanImg from "../../assets/images/coban-rondo/penginapan.png";
import lintasanSepeda from "../../assets/images/coban-rondo/lintasan.png";
import campingGround from "../../assets/images/coban-rondo/camping.png";
import joggingTrack from "../../assets/images/coban-rondo/jogging.png";
import bersepeda from "../../assets/images/coban-rondo/bersepeda.png";
import sensasiJeep from "../../assets/images/sensasi-jeep.png";
import camping from "../../assets/images/camping.png";
import funTobing from "../../assets/images/coban-rondo/fun-tobing.png";
import flyingFox from "../../assets/images/coban-rondo/flying-fox.png";
import berkuda from "../../assets/images/coban-rondo/berkuda.png";
import mapSemeru from "../../assets/images/map-semeru.png";
import reviewApel from "../../assets/images/coban-rondo/review-apel.png";
import reviewKeripik from "../../assets/images/coban-rondo/review-keripik.png";
import reviewLapis from "../../assets/images/coban-rondo/review-lapis.png";
import camera from "../../assets/images/camera.png";
import star from "../../assets/images/star.png";
import destinasi1 from "../../assets/images/des-tugu.png";
import destinasi2 from "../../assets/images/des-angkut.png";
import destinasi3 from "../../assets/images/des-park.png";
import tipsMalang from "../../assets/images/tips-malang.png";
import cuaca1 from "../../assets/images/destinasi/cuaca1.png";
import cuaca2 from "../../assets/images/destinasi/cuaca2.png";
import starKiri from "../../assets/images/destinasi/star-kiri.png";
import starKanan from "../../assets/images/destinasi/star-kanan.png";
import ppReview from "../../assets/images/destinasi/pp-review.png";
import pp2 from "../../assets/images/destinasi/pp2.png";
import pp3 from "../../assets/images/destinasi/pp3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CobanRondo() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-custom-100 h-full font-sans">
      <Navbar />
      <section
        id="head-section"
        className="flex mx-8 sm:mx-16 flex-col-reverse sm:flex-row justify-between pt-14 sm:pt-8 mb-6 sm:mb-12"
      >
        <div className="flex flex-col font-sans w-full sm:w-1/2">
          <div className="font-bold mt-6 sm:mt-14 md:text-8xl text-4xl">
            <h1 className="tracking-wider">COBAN</h1>
            <h1 className="tracking-wider">RONDO</h1>
          </div>
          <div className="font-thin text-xl ml-1 mt-4 text-justify sm:mt-10">
            <p className="">
              Coban Rondo adalah tempat wisata berupa air terjun yang berada di
              Kabupaten Malang, Jawa Timur. Air terjun Coban Rondo memiliki
              ketinggian 84 meter dan berada di ketinggian 1.134 meter di atas
              permukaan laut (mdpl). Coban Rondo dikenal akan keindahan
              wisatanya.
            </p>
          </div>
        </div>
        <div className="flex justify-end w-full sm:w-1/2 sm:px-0">
          <img
            className="animate__animated animate__fadeInRight"
            src={cobanImg}
            alt=""
          />
        </div>
      </section>

      <section
        id="content-section"
        className="mx-8 sm:mx-16 my-3 sm:my-6 font-sans"
      >
        <h3 className="font-medium text-xl sm:text-2xl">
          Apa saja di Coban Rondo?
        </h3>
        <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={airTerjun} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Air Terjun</h1>
                <p className="font-thin">
                  Coban Rondo yang berarti air terjun tentu saja menyajikan
                  pemandangan air terjunnya yang luar biasa
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={penginapanImg} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Penginapan</h1>
                <p className="font-thin">
                  Untuk mengakomodasi kemudahan perjalanan pengunjung, banyak
                  pihak yang menyediakan penginapan bagi pengunjuang
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img
                  className="w-full max-h-full"
                  src={lintasanSepeda}
                  alt=""
                />
              </div>

              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Lintasan Sepeda</h1>
                <p className="font-thin">
                  Pihak Coban Rondo terus berinovasi untuk berbagai fasilitas,
                  termasuk fasilitas lintasan sepeda gunung
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={campingGround} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Camping Ground</h1>
                <p className="font-thin">
                  Selain penginapan, Coban Rondo juga menyediakan camping ground
                  bagi yang ingin merasakan sensasi camping di daerah sekitar
                  air terjun
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={joggingTrack} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Jogging Track</h1>
                <p className="font-thin">
                  Selian untuk sepeda gunung, jalan setapak Coban Rondo cocok
                  bagi yang ingin jogging dengan pemandangan air terjun
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col ">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={labirin} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Taman Labirin</h1>
                <p className="font-thin">
                  wisata Coban Rondo memang terkenal dengan wahana taman labirin
                  yang seru dan menantang. Bahkan rute labirin dapat diubah
                  secara berkala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activity" className="mx-8 sm:mx-16 my-3 sm:my-6 font-sans">
        <h3 className="font-medium text-xl sm:text-2xl">
          Rekomendasi aktivitas di Coban Rondo
        </h3>
        <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={funTobing} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Fun Tubbing</h1>
                <p className="font-thin">
                  Aktivitas satu ini tidak boleh terlewatkan jika ke Coban
                  Rondo. Menaiki pelampung dan menyusuri sepanjang aliran air di
                  Coban Rondo
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={camping} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Bermalam / Camping</h1>
                <p className="font-thin">
                  Dengan bervariasinya penginapan/camping kamu tak perlu
                  khawatir jika ingin menginap di dekat Coban Rondo
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={bersepeda} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Bersepeda</h1>
                <p className="font-thin">
                  Dengan disediakannya lintasan sepeda gunung, kamu bisa
                  menikmati alam Coban Rondo dengan bersepeda santai
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={sensasiJeep} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Offroad Mobil Jeep</h1>
                <p className="font-thin">
                  Menaiki Jeep di daerah bebatuan dan hawa alam yang menyejukkan
                  tentunya sangat menyenangkan
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={berkuda} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Berkuda</h1>
                <p className="font-thin">
                  Coban Rondo juga menghadirkan fasilitas berkuda yang cocok
                  untuk segala usia
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 shadow-md rounded-xl bg-custom-300">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={flyingFox} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold py-4">Flying Fox</h1>
                <p className="font-thin">
                  Flying fox adalah salah satu permainan yang ditawarkan di
                  Coban Rondo dan jangan khawatir, kemanannya telah diuji
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="mx-8 sm:mx-16 py-6 font-sans">
        <div className="flex w-full">
          <div className="flex w-2/3 mr-2 sm:mr-6 rounded-lg">
            <img src={mapSemeru} alt="" />
          </div>
          <div className="flex flex-col w-1/3">
            <div className="h-1/2 bg-custom-300 rounded-lg sm:mb-4 sm:ml-4">
              <img src={cuaca1} alt="" />
            </div>
            <div className="h-1/2 bg-custom-300 rounded-lg mt-2 sm:mt-4 sm:ml-4">
              <img src={cuaca2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="umkm" className="mx-8 sm:mx-16 my-6 h-full font-sans">
        <h3 className="font-medium text-xl  sm:text-2xl">
          Support UMKM sekitar{" "}
        </h3>
        <div className="px-2 sm:px-6">
          <Slider className="w-full py-12 sm:mb-12 px-2" {...settings}>
            <div className="">
              <img className="w-5/6" src={reviewApel} alt="" />
            </div>
            <div className="">
              <img className="w-5/6" src={reviewKeripik} alt="" />
            </div>
            <div className="">
              <img className="w-5/6" src={reviewLapis} alt="" />
            </div>
          </Slider>
        </div>
      </section>

      <section
        id="review"
        className="mx-8 sm:mx-16 sm:my-6 sm:pt-6 h-full font-sans"
      >
        <h3 className="font-medium text-xl sm:text-2xl">Review </h3>
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between py-6">
            <div className="">
              <div className="">
                <div className="flex items-center mb-1 sm:mb-3">
                  <h1 className="text-xl sm:text-2xl  font-bold">4,9</h1>
                  <h4 className="text-xs sm:text-base font-thin ml-2 sm:ml-6">
                    854 Reviews
                  </h4>
                </div>
                <img className="w-2/3 sm:w-full" src={starKiri} alt="" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-end sm:">
                <img
                  className="w-2/3 sm:w-full h-full"
                  src={starKanan}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="w-full h-full sm:h-36 flex mb-4">
              <div className="flex w-4/12 h-full">
                <div>
                  <img className="" src={ppReview} alt="" />
                </div>
                <div className="flex flex-col pl-1 sm:pl-0 sm:mt-2">
                  <img className="w-20" src={starKiri} alt="" />
                  <h3 className="text-sm font-medium">Yurasara</h3>
                  <h6 className="text-xs font-thin">2 Maret 2023</h6>
                </div>
              </div>
              <div className="flex flex-col w-8/12 ml-4  h-full">
                <h3 className="font-semibold text-sm sm:text-lg">
                  Happy bangettt
                </h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  Baguss bangett. Air terjunnya cakepp, terus enak banget ada
                  fun tubingnya, seruu bangett pokoknya kalian kalo ke malang
                  harus kesini, oiya datengnya agak pagian enak biar ga terlalu
                  rame dan lebih sejuk
                </p>
              </div>
            </div>
            <div className="w-full h-0.5 mb-4 bg-gray-300"></div>
            <div className="w-full h-full sm:h-36 flex mb-4">
              <div className="flex w-4/12 h-full">
                <div>
                  <img className="" src={pp2} alt="" />
                </div>
                <div className="flex flex-col pl-1 sm:pl-0 sm:mt-2">
                  <img className="w-20" src={starKiri} alt="" />
                  <h3 className="text-sm font-medium">Sherly</h3>
                  <h6 className="text-xs font-thin">19 Maret 2023</h6>
                </div>
              </div>
              <div className="flex flex-col w-8/12 ml-4  h-full">
                <h3 className="font-semibold text-sm sm:text-lg">
                  Cocok buat family time
                </h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  Coban rondo emang udah jadi planning sekeluarga kalo liburan
                  kesini. bagus banget ternyata, dan pas kesana pas banget ada
                  pelanginya jadi nambah bagus, top deh buat coban rondo
                </p>
              </div>
            </div>
            <div className="w-full h-0.5 mb-4 bg-gray-300"></div>
            <div className="w-full h-full sm:h-36 flex mb-4">
              <div className="flex w-4/12 h-full">
                <div>
                  <img className="" src={pp3} alt="" />
                </div>
                <div className="flex flex-col pl-1 sm:pl-0 sm:mt-2">
                  <img className="w-20" src={starKiri} alt="" />
                  <h3 className="text-sm font-medium">Daniel</h3>
                  <h6 className="text-xs font-thin">2 Agustus 2023</h6>
                </div>
              </div>
              <div className="flex flex-col w-8/12 ml-4  h-full">
                <h3 className="font-semibold text-sm sm:text-lg">
                  Kids really happy
                </h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  kalo liburan enak kesini soalnya murah, permainannya lumayan
                  banyak jadi anak-anak happy, pemandangannya juga bagus, cuma
                  sayang mushola sama toiletnya agak kotor
                </p>
              </div>
            </div>
            <div className="w-full h-0.5 mb-4 bg-gray-300"></div>
          </div>
        </div>
        <div className="flex justify-around items-center w-full h-16 sm:h-24 rounded-full mt-4 bg-custom-400">
          <div className="sm:w-1/12">
            <img
              className="mx-2 sm:mx-6 h-10 w-10 sm:w-3/6 hover:cursor-pointer"
              src={camera}
              alt=""
            />
          </div>
          <div className="text-gray-400 font-light text-xs sm:text-2xl z-10 w-8/12 ml-4 sm:ml-0 sm:w-7/12">
            <input
              type="text"
              id="name"
              placeholder="Bagikan pengalamanmu"
              name="name"
              className="sm:px-8 h-16 sm:h-24 bg-custom-400 w-full"
            />
          </div>
          <div className="flex w-3/12 sm:w-4/12 items-center">
            <div className="sm:flex h-full hidden items-center">
              <img className="hover:cursor-pointer" src={star} alt="" />
              <img className="hover:cursor-pointer" src={star} alt="" />
              <img className="hover:cursor-pointer" src={star} alt="" />
              <img className="hover:cursor-pointer" src={star} alt="" />
              <img className="hover:cursor-pointer" src={star} alt="" />
            </div>
            <button className="sm:ml-12 sm:px-12 px-3 py-1 sm:py-2 mr-4 sm:mx-5 bg-custom-200 hover:bg-green-50 rounded-3xl font-semibold text-base sm:text-lg text-white hover:text-black">
              kirim
            </button>
          </div>
        </div>
      </section>

      <section
        id="kunjungan"
        className="mx-8 sm:mx-16 mt-14 my-6 h-full font-sans"
      >
        <h3 className="font-medium text-xl sm:text-2xl">
          Kunjungi destinasi lainnya{" "}
        </h3>
        <div className="px-2 sm:px-6">
          <Slider className="w-full py-12 mb-12 " {...settings}>
            <div className="">
              <a href="./tugu-malang">
                <img className="w-5/6" src={destinasi1} alt="" />
              </a>
            </div>
            <div className="">
              <a href="./museum-angkut">
                <img className="w-5/6" src={destinasi2} alt="" />
              </a>
            </div>
            <div className="">
              <a href="./jatim-park">
                <img className="w-5/6" src={destinasi3} alt="" />
              </a>
            </div>
          </Slider>
        </div>
      </section>

      <section id="tips" className="mt-14 my-6 mb-12 h-full font-sans">
        <h3 className="font-medium text-xl sm:text-2xl mx-8 sm:mx-16">
          Tips berwisata ke Malang
        </h3>
        <div className="py-6">
          <img className="w-full" src={tipsMalang} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CobanRondo;
