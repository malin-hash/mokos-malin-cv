import React from 'react';
import { NavLink } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
// import BinaryRain from './BinaryRain';

export default function Sidebar({sidebarOpen, toogleSidebar}) {
  const {t} = useTranslation();
  return (
    <div  className={sidebarOpen ?
       'flex-col gap-4 left-0 top-0 w-64 bg-gray-900 md:hidden h-screen z-40  fixed':
       'flex-col gap-4 left-0 top-0 w-64 bg-gray-900 md:hidden h-screen z-40   hidden'}>
      <div className='flex-col justify-between'>
          {/* <BinaryRain/> */}
        <div className='pt-3 pl-28'>
          {/* <h1 className='text-lg italic font-extrabold'>Malin</h1> */}
          {/* <button onClick={toogleSidebar} className='text-red-600 hover:text-red-800 text-lg italic font-extrabold'>Malin</button> */}
        </div>
        <div className='pt-20'>  
        <NavLink onClick={ toogleSidebar} to='/' className={({isActive}) => isActive ? 'bg-gray-800 block p-6 rounded-2xl mx-2 my-1' : 'block p-6 hover:bg-gray-800 hover:mx-2 rounded-2xl'}><p className='flex justify-center'>{t('navbar.home')}</p></NavLink>
        <NavLink onClick={ toogleSidebar} to='/apropos' className={({isActive}) => isActive ? 'bg-gray-800 block p-6 rounded-2xl mx-2 my-1' : 'block p-6 hover:bg-gray-800 hover:mx-2 rounded-2xl'}><p className='flex justify-center'>{t('navbar.about')}</p></NavLink>
        <NavLink onClick={ toogleSidebar} to='/projet' className={({isActive}) => isActive ? 'bg-gray-800 block p-6 rounded-2xl mx-2 my-1' : 'block p-6 hover:bg-gray-800 hover:mx-2 rounded-2xl'}><p className='flex justify-center'>{t('navbar.project')}</p></NavLink>
        <NavLink onClick={ toogleSidebar} to='/services' className={({isActive}) => isActive ? 'bg-gray-800 block p-6 rounded-2xl mx-2 my-1' : 'block p-6 hover:bg-gray-800 hover:mx-2 rounded-2xl'}><p className='flex justify-center'>{t('navbar.service')}</p></NavLink>
        <NavLink onClick={ toogleSidebar} to='/contact' className={({isActive}) => isActive ? 'bg-gray-800 block p-6 rounded-2xl mx-2 my-1' : 'block p-6 hover:bg-gray-800 hover:mx-2 rounded-2xl'}><p className='flex justify-center'>{t('navbar.contact')}</p></NavLink>
        </div>
      </div>
    </div>
  )
}
