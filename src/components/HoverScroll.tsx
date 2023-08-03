"use client"
import React, { MouseEventHandler, useEffect, useState } from 'react'

type propType = {
    width: number,
    height: number,
    timer: number,
    data: string[],
    key: number
}

const ProductDescription = ({ width, height, timer, data, key }: propType) => {
    const [translateX, setTranslateX] = useState(0)
    const [flag, setFlag] = useState(false)
    const totalLength = data.length * width
    const maxTranslateLimit = -1 * (width * (data.length - 1))

    useEffect(() => {
        const id = setInterval(() => {
            setTranslateX(prev => prev > maxTranslateLimit ? prev - width : prev)
        }, timer)

        if (!flag) {
            clearInterval(id)
            setTranslateX(0)
        }
        return () => {
            clearInterval(id)
        }
    }, [flag]
    )
    return (<div className='' key={key}>
        <style>
            {`
          
           .parent:hover .pagination{
            display:flex
           }
        `}
        </style>
        <div
            style={{ width: `${width}px`, height: `${height}px` }}
            onMouseEnter={() => { setFlag((prev) => !prev) }}
            onMouseLeave={() => { setFlag((prev) => !prev) }}
            className={'parent relative  overflow-hidden'}>

            <div className={`absolute left-0  w-[${width}px] h-[${height}px]  bg-[rgb(0,0,0,0.5)]`}></div>
            <div
                style={{ transform: `translateX(${translateX}px)`, width: totalLength + "px" }}
                className={`flex   transition-all ease-in-out duration-300`}>

                {data.map((item, index) => (
                    <div className={`w-[${width}px] h-[${height}px] left-0`} key={index} >
                        <img src={item}
                            alt=""
                            width={width}
                            height={height}
                            style={{ width: `${width}px`, height: `${height}px` }}
                        />
                    </div>))}
            </div>

            <div className='hidden pagination gap-x-2 py-2 bg-white transition-all ease-in-out duration-300 bottom-0 left-0 right-0  justify-center item-center absolute'>
                {data.map((item, index) => <div className={` ${index === (((-1 * translateX) / width)) ? "bg-[blue]" : "bg-[gray]"} w-1 h-1  rounded-full`} key={index}>

                </div>)}
            </div>
        </div>

    </div>)
}

export default ProductDescription

