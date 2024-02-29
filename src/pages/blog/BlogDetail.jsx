import React from 'react'
import Navbar from '../../includes/Navbar'
import Footer from '../../includes/Footer'
import profile1 from '../../assets/images/blog/rani.png'
import museum1 from '../../assets/images/blog/museum-detail.png'
import museum2 from '../../assets/images/blog/museum2-detail.png'
import museum3 from '../../assets/images/blog/museum3-detail.png'
import museum4 from '../../assets/images/blog/museum4-detail.png'
import profile from '../../assets/images/blog/Oval.png'
import tipsMalang from '../../assets/images/tips-malang.png'
import santerra from '../../assets/images/blog/santerra.png'
import jeepImg from '../../assets/images/blog/jeep-img.png'
import pantaiImg from '../../assets/images/blog/pantai-img.png'

function BlogDetail() {
  return (
    <div className='bg-custom-100 h-full font-sans'>
      <Navbar />
      <div className='pt-20 px-16'>
        <h3 className='mb-2 font-extralight text-sm'>Baca 3 menit</h3>
        <h1 className='mb-2 font-bold text-5xl '>Liburan? Museum Angkut, Yuk!</h1>
        <h6 className='mb-2'>Museum Angkut untuk salah satu rekomendasi destinasi liburanmu</h6>
        <div className='flex items-center mb-4'>
          <div>
            <img src={profile1} alt="" />
          </div>
          <div className='flex flex-col ml-4'>
            <h5>Rani</h5>
            <h5>12 Oktober 2023</h5>
          </div>
        </div>
        <section id='headImg'>
          <img className='mb-4 w-full' src={museum1} alt="" />
        </section>

        <div className='w-full h-0.5 my-3 bg-slate-600'></div>

        <section id='main-content'>
          <h3 className='font-semibold text-2xl mb-4'>
            Museum Angkut
          </h3>
          <p className='font-thin mb-6'>
            Museum Angkut merupakan museum transportasi dan tempat wisata modern yang terletak di Kota Batu, Jawa Timur, sekitar 20 km dari Kota Malang. Museum ini terletak di kawasan seluas 3,8 hektar di lereng Gunung Panderman dan memiliki lebih dari 300 koleksi jenis angkutan tradisional hingga modern. Museum ini terbagi dalam beberapa zona yang didekorasi dengan setting landscape model bangunan dari benua Asia, Eropa hingga Amerika. Di Zona Sunda Kelapa dan Batavia yang merupakan Replika Pelabuhan Sunda Kelapa, dihiasi oleh beberapa alat transportasi kuno seperti becak dan miniatur kapal. Zona Eropa juga di setting seakan-akan berada di jalanan kota-kota di Prancis dengan mobil-mobil kuno Eropa.
            Pecinta mobil klasik, pecinta sejarah, dan penggemar film Hollywood kini menemukan rumah di Museum Angkut. Dengan luas hampir mencapai empat hektar, inilah museum transportasi pertama di Asia Tenggara. Tidak hanya menikmati sejarah setiap mobil, dari angkutan pertama Presiden RI hingga Istana Buckingham Inggris, Museum Angkut menyakin interior yang apik untuk fotografi.
          </p>
          <img className='w-full mb-5' src={museum2} alt="" />
          <h3 className='font-semibold text-2xl mb-4'>
            Suasana Dalam Museum Angkut
          </h3>
          <p className='font-thin mb-6'>
            Selain mobil-mobil kuno, salah satu koleksi terbarunya adalah Mobil listrik Tucuxi milik mantan menteri Dahlan Iskan yang sebelumnya pernah mengalami kecelakaan di sebuah lereng gunung di Magetan saat baru diujicobakan. Di museum ini juga terdapat wahana Flight Simulator yang terletak di lantai 3 gedung museum.
          </p>
          <div>
            <img className='w-full mb-8' src={museum3} alt="" />
            <img className='w-full mb-8' src={museum4} alt="" />
          </div>
          <p className='font-thin mb-6'>Selain sebagai destinasi wisata, museum angkut juga bisa menambah wawasan tentang transportasi darat di dunia. Destinasi ini sangat cocok untuk segala umur khususnya anak-anak yang selalu ingin tahu banyak hal</p>
        </section>

        <div className='w-full h-0.5 my-3 bg-slate-600'></div>

        <h3 className='font-semibold text-2xl mb-4'>
          Ulasan Museum Angkut
        </h3>

        <section id='ulasan' className='px-6'>
          <div className='w-full h-32 bg-white rounded-xl px-6'>
            <div className='flex justify-between items-center'>
              <div className='flex mt-4 items-center'>
                <img className='mr-3' src={profile} alt="" />
                <h3 className='font-medium'>Yuni Sarah</h3>
                <h6 className='mx-8 font-thin'>1 jam lalu</h6>
              </div>
              <div className='font-bold text-indigo-500 mr-4'>
                reply
              </div>
            </div>
            <p className='mt-3 font-extralight text-gray-400'>Bagus banget emangg museum angkut. Aku kesana sama keluarga pas liburan anak-anak pada seneng sihh, bagus tempatnya bersih terawat</p>
          </div>
          <div className='w-full h-32 bg-white rounded-xl px-6 my-6'>
            <div className='flex justify-between items-center'>
              <div className='flex mt-4 items-center'>
                <img className='mr-3' src={profile} alt="" />
                <h3 className='font-medium'>Yuni Sarah</h3>
                <h6 className='mx-8 font-thin'>1 jam lalu</h6>
              </div>
              <div className='font-bold text-indigo-500 mr-4'>
                reply
              </div>
            </div>
            <p className='mt-3 font-extralight text-gray-400'>Recomended kesini, tapi kalo udah musim liburan ya gitu deh rame banget, tapi worth it soalnya tempatnya bagus, ada juga musholanya jadi ga ribet kemana mana</p>
          </div>
          <div className='flex'>
            <div className='w-1 h-72 mx-8 bg-black'>

            </div>
            <div className='flex flex-col'>
              <div className='w-full h-32 bg-white rounded-xl px-6'>
                <div className='flex justify-between items-center'>
                  <div className='flex mt-4 items-center'>
                    <img className='mr-3' src={profile} alt="" />
                    <h3 className='font-medium'>Yuni Sarah</h3>
                    <h6 className='mx-8 font-thin'>1 jam lalu</h6>
                  </div>
                  <div className='font-bold text-indigo-500 mr-4'>
                    reply
                  </div>
                </div>
                <p className='mt-3 font-extralight text-gray-400'>Bagus banget emangg museum angkut. Aku kesana sama keluarga pas liburan anak-anak pada seneng sihh, bagus tempatnya bersih terawat</p>
              </div>
              <div className='w-full h-32 bg-white rounded-xl px-6 my-6'>
                <div className='flex justify-between items-center'>
                  <div className='flex mt-4 items-center'>
                    <img className='mr-3' src={profile} alt="" />
                    <h3 className='font-medium'>Yuni Sarah</h3>
                    <h6 className='mx-8 font-thin'>1 jam lalu</h6>
                  </div>
                  <div className='font-bold text-indigo-500 mr-4'>
                    reply
                  </div>
                </div>
                <p className='mt-3 font-extralight text-gray-400'>Recomended kesini, tapi kalo udah musim liburan ya gitu deh rame banget, tapi worth it soalnya tempatnya bagus, ada juga musholanya jadi ga ribet kemana mana</p>
              </div>
            </div>
          </div>
          <div className='w-full h-32 bg-white rounded-xl px-6 my-6'>
            <div className='flex justify-between items-center'>
              <div className='flex mt-4 items-center'>
                <img className='mr-3' src={profile} alt="" />
              </div>
              <textarea placeholder='tambahkan ulasan' name="" id="" cols="9" rows="4" className='w-3/4 mt-4 text-start'></textarea>
              <div className='font-bold mr-4'>
                <button className='px-6 py-2 text-white bg-custom-200 rounded-xl'>Kirim</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id='lanjut-baca'>
        <div className='mx-16'>
          <h3 className='font-semibold text-2xl mb-4'>
            Lanjut Baca
          </h3>
          <div className='flex w-full pt-6'>
          <div className='flex flex-col bg-custom-300 w-1/3 mr-6 rounded-2xl'>
            <div className='h-48'>
              <img className='max-h-full w-full' src={santerra} alt="" />
            </div>
            <div className='h-56 p-3'>
              <h6 className='font-extralight text-xs py-1'>baca 2 menit</h6>
              <h3 className='font-semibold text-base'>Intip Suasana Di Santerra De Laponte</h3>
              <h6 className='font-semibold text-sm pb-1'>By <span className='font-thin'>Anna</span></h6>
              <p className='font-thin text-sm py-1'>Santerra De Laponte adalah wisata keluarga yang baru saja diresmikan di Malang. Seperti apa suasana di dalamnya? Mari kita lihat....</p>
              <h6 className='font-extralight text-xs text-gray-600'>20 Juni 2023</h6>
            </div>
          </div>
          <div className='flex flex-col bg-custom-300 w-1/3 mr-6 rounded-2xl'>
            <div className='h-48'>
              <img className='' src={pantaiImg} alt="" />
            </div>
            <div className='h-56 p-3'>
              <h6 className='font-extralight text-xs py-1'>baca 2 menit</h6>
              <h3 className='font-semibold text-base'>Pantai-Pantai Di Malang </h3>
              <h6 className='font-semibold text-sm pb-1'>By <span className='font-thin'>Rani</span></h6>
              <p className='font-thin text-sm py-1'>Tak hanya dengan wisata di daratnya yang menakjubkan. Tapi Malang juga menawarkan berbagai pengalaman dengan pantai mereka....</p>
              <h6 className='font-extralight text-xs text-gray-600'>14 September 2022</h6>
            </div>
          </div>
          <div className='flex flex-col bg-custom-300 w-1/3 rounded-2xl'>
            <div className='h-48'>
              <img className='' src={jeepImg} alt="" />
            </div>
            <div className='h-56 p-3'>
              <h6 className='font-extralight text-xs py-1'>baca 2 menit</h6>
              <h3 className='font-semibold text-base'>Fasilitas Jeep di Gunung Semeru</h3>
              <h6 className='font-semibold text-sm pb-1'>By <span className='font-thin'>Toni</span></h6>
              <p className='font-thin text-sm py-1'>Gunung tentunya identik dengan aktivitas mendaki. Namun, bagi pengunjung yang tidak ingin mendaki, Gunung Semeru menawarkan fas...</p>
              <h6 className='font-extralight text-xs text-gray-600'>05 Mei 2021</h6>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id='tips' className=' mt-14 my-6 mb-12 h-full font-sans'>
        <div className=' py-6'>
          <img className='w-full' src={tipsMalang} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BlogDetail 