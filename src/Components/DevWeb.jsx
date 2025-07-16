import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';

export default function DevWeb({exitModal}) {
    const {t} = useTranslation();
  return (
    <>
 
    {/* COntenu du modal */}
    <div className='fixed inset-0 flex items-center justify-center z-50 mt-5 mx-3 md:mb-2 mb-10'>
        <div className='rounded-xl bg-gray-600 shadow-lg w-full h-full max-w-screen-lg max-h-screen overflow-y-auto p-6 custom-scrollbar'>
            <button onClick={exitModal} className='mb-2 px-3'><FaXmark className='text-red-800 text-xl md:text-3xl hover:text-red-500'/></button>
                <div className='shadow-2xl'>
                    <img src="/images/4.jpg" alt='dev' className='objet-cover w-[100%] h-[10rem] rounded-xl' />
                </div>
            <h2 className='text-2xl text-green-400 mb-4 text-center font-extrabold mt-4'>{t('service.web.title')}</h2>
            <h1 className=' px-3 max-w-2xl mx-auto text-2xl font-extrabold text-green-500'> 1. {t('service.web.app.title1')} :</h1>
            <p className='mb-4 md:px-16 px-3 text-justify leading-relaxed '>{t('service.web.app.description1')}</p>
            <h1 className=' px-3 max-w-2xl mx-auto text-2xl font-extrabold text-green-500'> 2. {t('service.web.app.title2')} :</h1>
            <p className='mb-4 md:px-16 px-3 text-justify leading-relaxed '> {t('service.web.app.description')}</p>
            <h1 className=' px-3 max-w-2xl mx-auto text-2xl font-extrabold text-green-500'> 3. {t('service.web.app.title3')} :</h1>
            <p className='mb-4 md:px-16 px-3 text-justify leading-relaxed '>
               {t('service.web.app.description3')}
            </p>
             <h1 className=' px-3 max-w-2xl mx-auto text-2xl font-extrabold text-green-500'> 4. {t('service.web.app.title4')} :</h1>
            <p className='mb-4 md:px-16 px-3 text-justify leading-relaxed '>
               {t('service.web.app.description4')}
            </p>
            <h1 className=' px-3 max-w-2xl mx-auto text-2xl font-extrabold text-green-500'> 5. {t('service.web.app.title5')} :</h1>
            <p className='mb-4 md:px-16 px-3 text-justify leading-relaxed '>
               {t('service.web.app.description5')}
            </p>
             <h1 className=' px-3 max-w-2xl mx-auto text-2xl font-extrabold text-green-500'> 6. {t('service.web.app.title6')} :</h1>
            <p className='mb-4 md:px-16 px-3 text-justify leading-relaxed '>
               {t('service.web.app.description6')}
            </p>
        <div className='flex justify-center items-center'>
            <button onClick={exitModal} className='px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg'>{t('btn')}</button>
        </div>
        </div>
    </div>
    </>
  )
}
