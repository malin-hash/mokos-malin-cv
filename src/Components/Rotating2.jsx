import React, {useState, useEffect} from 'react'

const words = ['Web Developer', 'Full-Stack Developer'];
export default function Rotating() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(timer)
    }, [])
  return (
    <div className='transition-opacity duration-100 ease-in-out z-0'>
        {words[index]}
    </div>
  )
}