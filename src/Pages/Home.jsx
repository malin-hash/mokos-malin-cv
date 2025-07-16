import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import BinaryRain from '../Components/BinaryRain'
import { Outlet } from 'react-router-dom'
import { HiOutlineMenu,  HiXCircle } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import Dropdown from '../Components/Dropdown'


export default function Home() {
  // Drop start
      const startShow = () => setShowDropdown(!showDropdown);
      const [showDropdown, setShowDropdown] = useState(false)
      const { i18n } = useTranslation();
      const changelanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        startShow();
      };
  // End

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toogleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className='relative min-h-screen overflow-hidden bg-gray-900 text-white '>
        {/* Binairy background */}
       <BinaryRain/>
        <div className='relative z-10'>
            {/* NavBar Start */}
            <Navbar/>
            {/* NavBar End */}
           <div className='flex min-h-fit flex-1'>
            {/* Sidebar start */}
            <Sidebar sidebarOpen={sidebarOpen} toogleSidebar={toogleSidebar}/>
            {/* Sidbar End */}
            {/* Content Start */}
           <div className='flex-col flex-1'> 
            <div className='py-4 px-2 flex justify-between text-white md:hidden w-full fixed top-0 left-0 bg-gray-800 z-50'>
              {
                !sidebarOpen ?
                <button onClick={toogleSidebar} className='hover:text-gray-500'><HiOutlineMenu size={26}/></button>
                : 
                <button onClick={toogleSidebar} className='hover:text-gray-500'><HiXCircle size={30} className='text-red-500 hover:text-red-700 transition-colors duration-200'/></button>
              }
                <div>
                      <Dropdown startShow={startShow} showDropdown={showDropdown} changeLanguage={changelanguage}/>
                </div>
            </div>
             <div className='mt-20'>
              <Outlet/>
             </div>
           </div>
            {/* Content End */}
           </div>
        </div>
    </div>
  )
}
