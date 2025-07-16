import React from 'react'

export default function UsaFlag() {
  return (
    <div className='relative w-24 h-6 border border-gray-300 overflow-hidden'>
        {/* coin bleu avec etoile */}
        <div className='absolute top-0 left-0 w-3 h-3 bg-blue-800 flex  justify-center text-[6px] text-white overflow-hidden'>
            <p >{'*'.repeat(5)} <br />{'*'.repeat(5)} <br /> {'*'.repeat(5)} </p>
        </div>
        {/* bandes rouges et blanches */}
        {[...Array(13)].map((_, index) => (
            <div key={index} className={`w-full h-[0.138rem] ${index % 2 === 0 ? 'bg-red-600' : 'bg-white'}`}></div>
        ))}
    </div>
  )
}
