import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
      const startShow = () => setShowDropdown(!showDropdown);
      const [showDropdown, setShowDropdown] = useState(false)
      const { t, i18n } = useTranslation();
      const changelanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        startShow();
      };
  return (
<div className='hidden md:block '>
    <div className='flex justify-between  text-slate-300 text-md font-bold w-full  px-1 py-5 fixed top-0 left-0 pl-16 bg-gray-900'>
      <h1 className='text-2xl italic'>Malin</h1>
      <div  className='flex gap-4 pr-10'>
      <NavLink to='/' className={({isActive}) => isActive ? '   px-2 border-b-4 transition duration-300 border-green-500' : 'block hover:border-green-500 transition-alls duration-1000 hover:border-b-4'}><p className='flex justify-center'>{t('navbar.home')}</p></NavLink>
      <NavLink to='/apropos' className={({isActive}) => isActive ? '   px-2 border-b-4 transition duration-300 border-green-500' : 'block hover:border-green-500 transition-alls duration-1000 hover:border-b-4'}><p className='flex justify-center'>{t('navbar.about')}</p></NavLink>
      <NavLink to='/projet' className={({isActive}) => isActive ? '   px-2 border-b-4 transition duration-300 border-green-500' : 'block hover:border-green-500 transition-alls duration-1000 hover:border-b-4'}><p className='flex justify-center'>{t('navbar.project')}</p></NavLink>
      <NavLink to='/services' className={({isActive}) => isActive ? '   px-2 border-b-4 transition duration-300 border-green-500' : 'block hover:border-green-500 transition-alls duration-1000 hover:border-b-4'}><p className='flex justify-center'>{t('navbar.service')}</p></NavLink>
      <NavLink to='/contact' className={({isActive}) => isActive ? '   px-2 border-b-4 transition duration-300 border-green-500' : 'block hover:border-green-500 transition-alls duration-1000 hover:border-b-4'}><p className='flex justify-center'>{t('navbar.contact')}</p></NavLink>
      <div>
        <Dropdown startShow={startShow} showDropdown={showDropdown} changeLanguage={changelanguage}/>
      </div>
      </div>
    </div>
</div>
  )
}
