import React from "react";
import Navbar from "../../includes/Navbar";
import Footer from "../../includes/Footer";
import semeruImg from "../../assets/images/semeru.png";
import ranuRegulo from "../../assets/images/regulo.png";
import ranuKumbolo from "../../assets/images/kumbolo.png";
import padangOmbo from "../../assets/images/ororo ombo.png";
import puncakSemeru from "../../assets/images/puncak.png";
import tanjakanCinta from "../../assets/images/tanjakan.png";
import pendakian from "../../assets/images/pendakian.png";
import sensasiJeep from "../../assets/images/sensasi-jeep.png";
import camping from "../../assets/images/camping.png";
import sunrise from "../../assets/images/berburu-sunrise.png";
import arcopodo from "../../assets/images/arcopodo.png";
import mapSemeru from "../../assets/images/map-semeru.png";
import ranuPani from "../../assets/images/ranupani.png";
import warning from "../../assets/images/warning.png";
import reviewPutu from "../../assets/images/review-putu.png";
import reviewSalak from "../../assets/images/review-salak.png";
import reviewTempe from "../../assets/images/review-tempe.png";
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

function Semeru() {
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
            <h1 className="tracking-wider">GUNUNG</h1>
            <h1 className="tracking-wider">SEMERU</h1>
          </div>
          <div className="font-thin text-xl ml-1 mt-4 text-justify sm:mt-10">
            <p className="">
              Gunung Semeru adalah salah satu gunung api yang masih aktif di
              Indonesia. Gunung yang memiliki ketinggian 2.392 meter di atas
              permukaan laut ini merupakan destinasi andalan Jawa Timur. Gunung
              Semeru berdiri gagah dikelilingi kaldera atau lautan pasir seluas
              10 kilometer persegi.
            </p>
          </div>
        </div>
        <div className="flex justify-end w-full sm:w-1/2 sm:px-0">
          <img
            className="animate__animated animate__fadeInRight"
            src={semeruImg}
            alt=""
          />
        </div>
      </section>

      <section
        id="content-section"
        className="mx-8 sm:mx-16 my-3 sm:my-6 font-sans"
      >
        <h3 className="font-medium text-xl sm:text-2xl">
          Apa saja di Gunung Semeru?
        </h3>
        <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={ranuKumbolo} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Ranu Kumbolo</h1>
                <p className="font-thin">
                  Ranu Kumbolo adalah sebuah danau yang terletak di dalam Taman
                  Nasional Bromo Tengger Semeru, Jawa Timur, Indonesia. Danau
                  ini merupakan bagian dari rute termudah yang berasal dari Ranu
                  Pani menuju puncak Gunung Semeru.
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={padangOmbo} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Padang Bunga Oro-Oro Ombo</h1>
                <p className="font-thin">
                  Oro-oro Ombo sendiri merupakan padang luas berisi hamparan
                  bunga kecil berwarna ungu, yang oleh para pendaki disebut
                  Lavender.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={puncakSemeru} alt="" />
              </div>

              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Puncak Mahameru</h1>
                <p className="font-thin">
                  Puncak merupakan impian bagi semua pendaki, termasuk Puncak
                  Mahameru yang menjadi puncak gunung tertinggi ke-2 di
                  Indonesia.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={ranuPani} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Ranu Pani</h1>
                <p className="font-thin">
                  Ranu Pani adalah tempat wisata yang termasuk dalam kawasan
                  Gunung Semeru. Area ini sering dijadikan sebagai titik awal
                  bagi para pendaki yang akan menuju ke puncak Gunung Semeru.
                  Ranu Pane juga menyajikan pemandangan gunung dan danau yang
                  menenangkan.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={tanjakanCinta} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Tanjakan Cinta</h1>
                <p className="font-thin">
                  Jalan yang menanjak dengan kemiringan 45 derajat tersebut
                  memiliki mitos, jika sang pendaki menoleh ke belakang maka ia
                  akan putus cinta.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col ">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={ranuRegulo} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Ranu Regulo</h1>
                <p className="font-thin">
                  Ranu Regulo, yaitu danau air tawar yang dikunjungi pendaki
                  yang hendak summit di Mahameru. Letaknya tidak jauh dari Ranu
                  Pani dan sedikit tersembunyi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activity" className="mx-8 sm:mx-16 my-3 sm:my-6 font-sans">
        <h3 className="font-medium text-xl sm:text-2xl">
          Rekomendasi aktivitas di Gunung Semeru
        </h3>
        <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={sunrise} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Berburu Sunrise</h1>
                <p className="font-thin">
                  Melihat matahari terbit di Gunung Semeru merupakan pengalaman
                  yang luar biasa. Maka dari itu, banyak orang berlomba-lomba
                  datang pagi buta untuk mendapatkan pemandangan matahari
                  terbit.
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
                <h1 className="font-bold my-4">Camping</h1>
                <p className="font-thin">
                  Ranu Kumbolo adalah salah satu tempat peristirahatan para
                  pendaki untuk mendirikan tenda yang tak cuma sebagai tempat
                  melepas penat tapi juga memanjakan mata.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={pendakian} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Pendakian</h1>
                <p className="font-thin">
                  Ke Gunung Semeru pasti sangat lekat dengan pendakian. Pastikan
                  menggunakan rute yang sudah dipastikan aman untuk mendapatkan
                  pengalaman mendaki yang baik.
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
                <h1 className="font-bold my-4">Sensasi Mobil Jeep</h1>
                <p className="font-thin">
                  Menaiki Mobil Jeep di medan pegunungan tentunya menantang
                  adrenalin dan sangat cocok bagi kamu yang menyukai tantangan.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={arcopodo} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Mengunjungi Arcopodo</h1>
                <p className="font-thin">
                  Arcopodo adalah dua arca yang berdampingan di dalam hutan
                  Gunung Semeru. Kedua arca tersebut sama-sama menghadap ke
                  utara yang berarti pula menatap lurus ke arah Puncak Mahameru.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 shadow-md rounded-xl bg-custom-300">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={padangOmbo} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold py-4">Berburu Foto Instagenik</h1>
                <p className="font-thin">
                  Tak afdol jika sudah jauh-jauh ke Gunung Semeru tapi tidak
                  mengabadikan momen-momen indah yang bahkan didukung
                  pemandangan super indah.
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
        <div className="flex w-full bg-custom-300 h-full sm:h-28 mt-12 rounded-3xl">
          <div className="w-3/12 sm:w-2/12 flex justify-center items-center">
            <img className="w-12 h-12" src={warning} alt="" />
          </div>
          <div className="w-9/12 sm:w-10/12 text-sm sm:text-base font-semibold sm:font-bold font-sans flex justify-start items-center">
            <p className="mr-6 py-4 sm:py-6 text-justify">
              untuk pendakian minimal dalam 1 rombongan terdapat 5 orang dan
              didampingi oleh minimal 1 orang yang telah berpengalaman mendaki.
            </p>
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
              <img className="w-5/6" src={reviewPutu} alt="" />
            </div>
            <div className="">
              <img className="w-5/6" src={reviewSalak} alt="" />
            </div>
            <div className="">
              <img className="w-5/6" src={reviewTempe} alt="" />
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
                  Bagus bangettt
                </h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  Baguss bangett. Ga nyangka ternyata sebagus itu apalagi
                  sunrisenya. btw ini pendakian pertamaku dan ya lumayan capek
                  tapi sebanding banget sama view yang bakalan kamu dapet. Buat
                  yang baru pertama dai kaya aku pastiin kalian mendaki sama
                  orang yang udah berpengalaman yaa
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
                  <h6 className="text-xs font-thin">1 Januari 2023</h6>
                </div>
              </div>
              <div className="flex flex-col w-8/12 ml-4  h-full">
                <h3 className="font-semibold text-sm sm:text-lg">
                  Sunrise Gokil
                </h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  Gunung semeru emang udah terkenal bagus banget. Pas kesini
                  keadaan agak mendung tapi alhamdulillah aman sampai puncak
                  sampai turunnya juga aman, dari beberapa gunung yang pernah
                  aku daki, rute gunung semeru ini yang termasuk enak.
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
                  <h6 className="text-xs font-thin">12 April 2023</h6>
                </div>
              </div>
              <div className="flex flex-col w-8/12 ml-4  h-full">
                <h3 className="font-semibold text-sm sm:text-lg">
                  OMG, Amazing
                </h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  Bagusss, tapi sayang banget ga sampe puncak soalnya aku gakuat
                  lagi sampe kakiku gemeter, mungkin gara-gara aku jarang
                  olahraga tapi sekalinya muncuk langsung dipaksain ke gunung
                  semeru. tapi so far meski ga sampe puncak, view nya baguss
                  bangett apalagi pas di ranu kumbolo
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
              
                <img className="w-5/6" src={destinasi1} alt="" />
              
            </div>
            <div className="">
              
                <img className="w-5/6" src={destinasi2} alt="" />
              
            </div>
            <div className="">
              
                <img className="w-5/6" src={destinasi3} alt="" />
              
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

export default Semeru;
