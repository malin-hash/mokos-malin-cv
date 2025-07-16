import React from 'react'
// import Rotating from './Rotating'
// import Rotating2 from './Rotating2'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Content() {
  const {t} = useTranslation();
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:mt-32 mt-4  px-32 justify-center mx-auto'>
      {/* Image */}
      <div className='flex justify-center items-center min-h-full'>
        <div className='aspect-square top-0 left-0  w-48 sm:w-96 md:w-72 rounded-full overflow-hidden mb-8 '>
          <div className='aspect-square absolute w-36 sm:w-64 md:w-72 md:top-32 left-32 md:left-56 top-20 inset-0 rounded-full spin-reverse border-4 border-r-transparent border-t-green-600 border-b-red-600 border-l-transparent z-0'></div>
          <div className='aspect-square absolute w-36 sm:w-64 md:w-72 md:top-32 left-32 md:left-56 top-20 inset-2 rounded-full animate-spin border-4 border-r-transparent border-t-white border-b-blue-600 border-l-yellow-500 z-0'></div>
        <img  className="w-full h-full object-cover border " src="../../public/Images/portfolio1.PNG" alt="" />
      </div>
      </div>
      {/* Info */}
      <div className='text-center text-white space-y-4 md:mt-8' >
        <p className='text-xl md:text-3xl font-light'> {t('home.title')}</p>
        {/* <p className='text-2xl md:text-3xl font-bold'> {t('home.title2')}
          <span className='ml-2 text-green-400 animate-fade z-0'>
            {t('navbar.home') === 'Home' ?
            <Rotating2/> :
            <Rotating/>
          }
          </span>
        </p> */}
        <p className='text-sm md:text-xl text-white font-bold'>
          {t('home.content')} 
        </p>
        {/* <p className='text-sm md:text-base text-gray-300 italic font-extrabold'>
          {t('home.title3')} 
        </p> */}
        <div className='flex md:space-x-7 space-x-2 justify-center '>
            <Link to='https://github.com/malin-hash'><FaGithub  className='md:text-3xl text-xl text-white font-bold hover:text-red-300'/></Link>
            <Link to='/contact'><FaEnvelope  className='md:text-3xl text-xl text-yellow-800 font-bold hover:text-yellow-600'/></Link>
            {/* <FaLinkedin  className='md:text-3xl text-xl text-orange-500 font-bold hover:bg-orange-400'/> */}
            <Link to='https://wa.me/23674427249'><FaWhatsapp  className='md:text-3xl text-xl text-green-500 font-bold hover:text-green-300'/></Link>
            
        </div>
      </div>
    </div>
  ) 
}
