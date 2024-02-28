import React from 'react'
import Navbar from '../../includes/Navbar'
import Footer from '../../includes/Footer'
import profile1 from '../../assets/images/blog/rani.png'
import museum1 from '../../assets/images/blog/museum-detail.png'
import museum2 from '../../assets/images/blog/museum2-detail.png'
import museum3 from '../../assets/images/blog/museum3-detail.png'
import museum4 from '../../assets/images/blog/museum4-detail.png'

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
      </div>
      <Footer />
    </div>
  )
}

export default BlogDetail 