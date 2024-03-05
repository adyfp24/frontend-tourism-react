import React from "react";
import Navbar from "../../includes/Navbar";
import Footer from "../../includes/Footer";
import museumImg from "../../assets/images/museum-angkut/museum.png";
import gangster from "../../assets/images/museum-angkut/gangster-town.png";
import pasarApung from "../../assets/images/museum-angkut/pasar-apung.png";
import zonaSunda from "../../assets/images/museum-angkut/sunda-kelapa.png";
import koleksi from "../../assets/images/museum-angkut/koleksi-trans.png";
import miniatur from "../../assets/images/museum-angkut/miniatur.png";
import zonaEropa from "../../assets/images/museum-angkut/zona-eropa.png";
import f1 from "../../assets/images/museum-angkut/f1.png";
import parade from "../../assets/images/museum-angkut/parade.png";
import heritage from "../../assets/images/museum-angkut/heritage.png";
import tempodulu from "../../assets/images/museum-angkut/tempodulu.png";
import simulasi from "../../assets/images/museum-angkut/simulasi.png";
import berburuFoto from "../../assets/images/museum-angkut/berburu-foto.png";
import mapMuseum from "../../assets/images/museum-angkut/map-museum.png";
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

function MuseumAngkut() {
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
            <h1 className="tracking-wider">MUSEUM</h1>
            <h1 className="tracking-wider">ANGKUT</h1>
          </div>
          <div className="font-thin text-xl ml-1 mt-4 text-justify sm:mt-10">
            <p className="">
              Museum Angkut merupakan salah satu destinasi wisata favorit
              wisatawan saat berkunjung ke Malang, Jawa Timur. Salah satu daya
              tarik dari museum ini adalah banyaknya koleksi mobil-mobil hingga
              kendaraan lainnya. Daya tarik lain dari Museum Angkut adalah
              berbagai pertunjukan yang menarik dan memukau pengunjung.
            </p>
          </div>
        </div>
        <div className="flex justify-end w-full sm:w-1/2 sm:px-0">
          <img
            className="animate__animated animate__fadeInRight"
            src={museumImg}
            alt=""
          />
        </div>
      </section>

      <section
        id="content-section"
        className="mx-8 sm:mx-16 my-3 sm:my-6 font-sans"
      >
        <h3 className="font-medium text-xl sm:text-2xl">
          Apa saja di Museum Angkut?
        </h3>
        <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={gangster} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Gangster Town</h1>
                <p className="font-thin">
                  Gangster Town tebangun dengan inspirasi kota Chicago, Amerika.
                  Bak di film-film seperti yang sering kita lihat, Gangster Town
                  dibuat semirip mungkin dengan suasana Amerika
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={pasarApung} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Pasar Apung</h1>
                <p className="font-thin">
                  Pasar Apung merupakan salah satu zona di Museum Angkut. Sama
                  halnya dengan pasar umum, di sini juga menjual berbagai macam
                  barang
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={koleksi} alt="" />
              </div>

              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Koleksi Transportasi</h1>
                <p className="font-thin">
                  Tak lengkap jika Museum Angkut namun tidak menampilkan
                  angkutan atau transportasi. Berbagai koleksi mulai dari mobil,
                  sepeda, kapal, pesawat, dan lain-lain menghiasi berbagai sudut
                  Museum Angkut
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={zonaEropa} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Zona Eropa</h1>
                <p className="font-thin">
                  Zona Eropa menghadirkan vibes negara-negara eropa yang sangat
                  identik dengan box telepon, bus merah, dan lain-lain
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={miniatur} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Miniatur Tempat Ikonik</h1>
                <p className="font-thin">
                  Tak cuma berfokus pada transportasi, Museum Angkut juga
                  mengadopsi tempat-tempat ikonik di dunia yang cocok untuk foto
                  instagenikmu
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col ">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={zonaSunda} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Zona Sunda Kelapa</h1>
                <p className="font-thin">
                  Mengusung tema Indonesia terkhusus di pulau Jawa pada tempo
                  dulu membuat zona ini memiliki suasana vintage bak tahun 80 an
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activity" className="mx-8 sm:mx-16 my-3 sm:my-6 font-sans">
        <h3 className="font-medium text-xl sm:text-2xl">
          Rekomendasi aktivitas di Museum Angkut
        </h3>
        <div className="grid w-full py-6 sm:py-12 grid-cols-3 gap-2 sm:gap-10 sm:mb-12">
          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={parade} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Parade Mobil dan Kostum</h1>
                <p className="font-thin">
                  Parade mobil dan kostum ini hanya dapat kamu nikmati di jam
                  16.30 sore yang berisi pertunjukan seru dari puluhan tokoh
                  serta pertunjukan mobil yang pastinya memukau
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={berburuFoto} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Berburu Foto Instagenik</h1>
                <p className="font-thin">
                  Dengan berbagai sudut yang pastinya bagus tak lengkap jika tak
                  mengabadikan momen-momen terlebih untuk foto instagenik
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={f1} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Simulasi F1</h1>
                <p className="font-thin">
                  F1 adalah salah satu perlombaan balap mobil yang hanya dapat
                  diikuti oleh yang berpengalaman. Namun, di sini kamu dapat
                  merasakan sensasi berkendara bak pembalap F1 dengan simulasi
                  berkendara F1
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 row-span-2 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-72 w-full">
                <img className="w-full max-h-full" src={simulasi} alt="" />
              </div>
              <div className="mb-16 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">Simulasi Penerbangan</h1>
                <p className="font-thin">
                  Tak cuma menampilkan berbagai transportasi termasuk pesawat,
                  tapi kamu juga bisa merasakan menerbangkan pesawat yang
                  pastinya akan dipandu oleh petugas
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 bg-custom-300 shadow-md rounded-xl">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={heritage} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold my-4">
                  Mengunjungi Indonesian Heritage
                </h1>
                <p className="font-thin">
                  Indonesia heritage museum merupakan taman hiburan dengan tema
                  pameran adat budaya Jawa Timur yang dilengkapi dengan Science
                  Center dan pembelajaran tentang budaya Indonesia.
                </p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-1 shadow-md rounded-xl bg-custom-300">
            <div className="flex flex-col">
              <div className="h-full sm:h-40 w-full">
                <img className="w-full max-h-full" src={tempodulu} alt="" />
              </div>
              <div className="mb-6 mx-4 hidden sm:block">
                <h1 className="font-bold py-4">
                  Menikmati Jakarta Tempoe Doloe
                </h1>
                <p className="font-thin">
                  Parade mobil dan kostum ini hanya dapat kamu nikmati di jam
                  16.30 sore yang berisi pertunjukan seru dari puluhan tokoh
                  serta pertunjukan mobil yang pastinya memukau
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="mx-8 sm:mx-16 py-6 font-sans">
        <div className="flex w-full">
          <div className="flex w-2/3 mr-2 sm:mr-6 rounded-lg">
            <img src={mapMuseum} alt="" />
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
              Dilarang membawa makanan dan minuman dari luar dan pastikan anda
              sudah mendapatkan minimal vaksin pertama
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
                  Pengen kesini lagi
                </h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  Seru banget dehhh, apalagi pas bagian parade tuh rame banget,
                  pokoknya kalo kalian liburan wajib banget mampir kesini
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
                  <h6 className="text-xs font-thin">20 Maret 2023</h6>
                </div>
              </div>
              <div className="flex flex-col w-8/12 ml-4  h-full">
                <h3 className="font-semibold text-sm sm:text-lg">Love It</h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  Karena aku suka banget sam apermobilan, jadi ini surga banget
                  sihh karena bisa lihat langsung, kesini ngajak sekeluarga
                  happy semua
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
                  <h6 className="text-xs font-thin">14 Juni 2023</h6>
                </div>
              </div>
              <div className="flex flex-col w-8/12 ml-4  h-full">
                <h3 className="font-semibold text-sm sm:text-lg">seruuu</h3>
                <p className="text-xs sm:text-base font-thin text-justify">
                  Udah sering kesini tapi tetep seruu, saranku kalian datengnya
                  sekitar jam 2 siang aja, jadi udah makan full energy baru
                  keliling-keliling terus nanti ditutup sama parade mobil
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
              <a href="./jatim=park">
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

export default MuseumAngkut;
