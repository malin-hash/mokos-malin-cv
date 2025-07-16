import React from 'react'
import { FaGlobe } from 'react-icons/fa'
import { FaFlagUsa } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import UsaFlag from './UsaFlag';
import FranceFlag from './FranceFlag';

export default function Dropdown({showDropdown, startShow, changeLanguage}) {
    const {t} = useTranslation();
  return (
   <div className='relative'>
        <button
        onClick={startShow}
        className='flex gap-2 items-center px-3 py-1 bg-gray-700 hover:bg-gray-600  rounded-lg'>
            {/* {t('navbar.language') === 'Language' ? 'En' : 'Fr'}  */}
            <FaGlobe size={24} className='text-blue-500'/>
            <span>{t('navbar.language')} 🔽 </span>
        </button>
        { showDropdown &&
        (
            <ul className='absolute right-0 mt-2 w-40 bg-gray-300 text-black rounded shadow z-10'>
                <li>
                    <button
                    onClick={() => changeLanguage('en')}
                    className='flex gap-2 w-full justify-center px-4 py-2 hover:bg-gray-400 hover:rounded'>
                        <span className='text-sm font-bold italic'>{t('navbar.english')}</span>
                        {/* <FranceFlag/> */}
                        {t('navbar.english') === 'English' ? ('✔') : ''}
                    </button>
                </li>
                 <li >
                    <button
                     onClick={() => changeLanguage('fr')}
                    className='flex gap-2 w-full justify-center px-4 py-2 hover:bg-gray-400'>
                        <span className='text-sm font-bold italic'>{t('navbar.french')}</span>
                        {/* <UsaFlag/> */}
                        {t('navbar.english') === 'Anglais' ? ('✔') : ''}
                    </button>
                </li>
            </ul>
        )
        }
   </div>
  )
}
