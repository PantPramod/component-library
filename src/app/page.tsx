import Link from 'next/link'
import React from 'react'

const Home = () => {

  return (
    <div className='flex min-h-screen items-center flex-col justify-center'>
      <h1 className='font-inter  text-center font-extrabold text-black p-6 w-10/12 mx-auto text-4xl md:text-[5vw] xl:text-6xl md:leading-[120%] max-w-[929px]'>The Readymade Components For the Developers</h1>


      <p className='leading-[200%] text-center text-xl text-sub-text px-10 py-8 w-10/12 mx-auto max-w-[929px]'>Used by some of the most developers, This enables you to create fully functional and scalable Web applications by extending the latest React features . It is fully scalabele and customizable. </p>

      <div className='flex items-center justify-center'>
        <Link href="/library" className='mr-4'>
          <button
            className='bg-black hover:bg-[#00000094] text-white p-3 px-4 rounded-md  w-[112px] font-semibold'>Library</button>
        </Link>

        <a href="https://github.com/pantpramod/" target='_blank'>
          <button className='border hover:bg-[#eeeaea79] border-[#d8d6d6] p-3 px-4 rounded-md font-semibold text-black'>My Github</button>
          
        </a>
      </div>
    </div>
  )
}

export default Home
