"use client"
import React, { useEffect, useState } from 'react'

type propType = {
  time: number,
  data:{
    imgSrc:string,
    title:string,
    text:string
  }[]
}

const NewsFeed = ({ time, data }: propType) => {

  const [index, setIndex] = useState(0)

  const letfMove = () => {
    setIndex(prev => index > 0 ? prev - 1 : 0)
  }

  const rightMove = () => {
    setIndex((prevIndex) => index < data.length - 1 ? prevIndex + 1 : data.length - 1)
  }

  useEffect(() => {

    const timerId = setTimeout(() => {

      setIndex((prevIndex) => index < data.length - 1 ? prevIndex + 1 : data.length - 1)
    }, time)

    return () => {
      clearTimeout(timerId)
    }
  }, [index])


  return (<div className='w-full relative min-h-[calc(100vh-100px)]'>
    <style>
      {`
        @keyframes example {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .progress {
          animation-name: example;
          animation-duration: ${time / 1000}s;
        }
        
      `}
    </style>
    {data.map((item, idx) => <div

      key={idx}
      className={` ${index === idx ? "opacity-1" : "opacity-0"} w-full transition-all duration-700 ease-in-out  absolute top-0 left-0 right-0 bottom-0 `}>
      {index === idx &&
        <div
          key={idx}
          className="progress h-[3px] bg-[red] border bg-[red] transition-all ease-in-out ">
        </div>}
      <img
        key={item.imgSrc}
        src={item?.imgSrc}
        alt=""
        className='w-full h-[calc(100vh-130px)] object-cover' />
      <div className='absolute bottom-0   bg-[gray] w-full' >
        <p className=' font-bold text-white text-4xl px-4 '>{index + 1}.{" "}{item?.title}</p>
        <p className=' text-white text-2xl px-4 ml-10'>{item?.text}</p>
      </div>
      <div className='absolute  h-full top-0 left-0 right-1/2 '
        onClick={letfMove}></div>
      <div className='absolute  h-full right-0  top-0 left-1/2 '
        onClick={rightMove}></div>
    </div>)}
  </div>)
}




export default NewsFeed


