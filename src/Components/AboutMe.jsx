import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function AboutMe() {
  const {t} = useTranslation();
  return (
    <div className='md:mt-24 grid md:grid-cols-2 grid-cols-1'>
      <div className='flex flex-col space-y-6 justify-center mx-20 h-[50vh]'>
        <NavLink to='/apropos' className={({isActive}) => isActive ? 'p-4 rounded-full bg-slate-800 transition duration-300 text-center text-green-700': 'p-4 bg-slate-500 rounded-full hover:bg-slate-800 transition duration-300 text-center hover:text-green-700 '}>{t('about.title')}</NavLink>
        <NavLink to='/apropos/diplome&parour' className={({isActive}) => isActive ? 'p-4 rounded-full bg-slate-800 transition duration-300 text-center text-green-700': 'p-4 bg-slate-500 rounded-full hover:bg-slate-800 transition duration-300 text-center hover:text-green-700 '}>{t('about.button1')}</NavLink>
        <NavLink to='/apropos/technologie' className={({isActive}) => isActive ? 'p-4 rounded-full bg-slate-800 transition duration-300 text-center text-green-700': 'p-4 bg-slate-500 rounded-full hover:bg-slate-800 transition duration-300 text-center hover:text-green-700 '}>{t('about.button2')}</NavLink>
      </div>
      <div className='mx-14 md:mx-10 mt-7 md:mt-1'>
        <Outlet/>
      </div>
    </div>
  )
}
