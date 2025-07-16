import React from 'react'
import { DiCss3, DiHtml5, DiJavascript, DiMysql, DiReact, DiPostgresql } from 'react-icons/di'
import { FaGithub, FaBootstrap, FaPhp } from 'react-icons/fa'

export default function Thecnologies() {
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 pl-8 space-y-4'>
      <div className='flex items-center text-center gap-2'>
        <FaPhp size={60} className='text-blue-700'/>
        <span className='text-sm italic font-bold'>PHP</span>
      </div>
      <div className='flex  items-center text-center'>
        <DiCss3 size={60} className='text-purple-700'/>
        <span className='text-sm italic font-bold'>Css3</span>
      </div>
      <div className='flex  items-center text-center'>
        <DiHtml5 size={60} className='text-orange-700'/>
        <span className='text-sm italic font-bold'>Html5</span>
      </div>
      <div className='flex  items-center text-center'>
        <DiJavascript size={60} className='text-yellow-700'/>
        <span className='text-sm italic font-bold'>JavaScript</span>
      </div>
      <div className='flex  items-center text-center'>
        <DiReact size={60} className='text-blue-400'/>
        <span className='text-sm italic font-bold'>React</span>
      </div>
      <div className='flex  items-center text-center space-x-2'>
        <img src="../../public/Images/sf.png" alt="Symfony" className='w-10 h-10 rounded-full'/>
        <span className='text-sm italic font-bold'>Symfony</span>
      </div>
      <div className='flex items-center text-center space-x-2'>
        <img src="../../public/Images/tailwind.png" alt="Tailwindcss" className='w-10 h-10 rounded-full'/>
        <span className='text-sm italic font-bold'>Tailwind</span>
      </div>
      <div className='flex gap-2  items-center text-center ml-2'>
        <FaBootstrap size={40} className='text-red-800'/>
        <span className='text-sm italic font-bold'>Bootstrap</span>
      </div>
      <div className='flex  items-center text-center'>
        <DiMysql size={60} className='text-orange-800'/>
        <span className='text-sm italic font-bold'>MySQL</span>
      </div>
      <div className='flex  items-center text-center'>
        <DiPostgresql size={60} className='text-orange-500'/>
        <span className='text-sm italic font-bold'>PostgreSQL</span>
      </div>
            <div className='flex gap-2  items-center text-center ml-2'>
        <FaGithub size={40} className='text-white'/>
        <span className='text-sm italic font-bold'>Github</span>
      </div>
    </div>
  )
}
