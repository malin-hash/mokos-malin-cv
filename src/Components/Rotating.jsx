import React, {useState, useEffect} from 'react'

const words = ['Développeur Web', 'Développeur Full-Stack'];
export default function Rotating() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(timer)
    }, [])
  return (
    <div className='transition-opacity duration-100 ease-in-out'>
        {words[index]}
    </div>
  )
}
