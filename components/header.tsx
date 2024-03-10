import React from 'react'

export default function Header() {
  return (
    <header className='z-[999] relative'>
    <div className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-red  blur-[10rem]
    sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
    '>
         
    </div>

    <div className='bg-[#f8f8f8] absolute top-[-6rem] -z-10 right-[11rem] h-[2.25rem] w-[3.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#f9f9f9]'>

    </div>  
    </header>
  )
}
