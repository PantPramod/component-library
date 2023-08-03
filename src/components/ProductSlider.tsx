"use client"
import React, { ReactNode, useEffect, useRef, useState } from 'react'

type propTypes = {
    height: string,
    children:ReactNode
}

const ProductSlider = ({  height, children }: propTypes) => {
    const containerRef = useRef<any>()
    const box = useRef<any>()
    const rotateLeft = () => {
        setActive('left')
        containerRef.current.scrollLeft -= containerRef.current.clientWidth
    }

    const rotateRight = () => {
        setActive('right')
        containerRef.current.scrollLeft += containerRef.current.clientWidth
    }
    const [active, setActive] = useState<'nothing' | 'left' | 'right'>('nothing')

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
    }, [])


    const handleOutsideClick = (event: any) => {
        if (box && !box?.current?.contains(event?.target)) {
            setActive('nothing')
        }
    }
    return (
        <div ref={box} className={`relative min-h-[${height}]`}>
            <style>
                {`
             
              .customscrollbar::-webkit-scrollbar {
                  width: 10px ;
                  height:6px;
                  border-radius:10px;
              }

                .customscrollbar::-webkit-scrollbar-track {
                  background: white;
                  width: 1px;
                  border-radius:10px;
                }
                
           
                .customscrollbar::-webkit-scrollbar-thumb {
                  background: #afafbe;
                  width: 1px;
                  border-radius:10px;
                }
                
                .customscrollbar::-webkit-scrollbar-thumb:hover {
                  background: #b0b8b0;
                }  
                
                *{
                    scroll-behavior: smooth!important;
                }
            `}
            </style>
            <div style={{minHeight:`${height}px`}} ref={containerRef} className={`w-full  overflow-hidden ease-in-out transition-all duration-300 overflow-x-auto relative customscrollbar pb-5 `}>
                <div className={`border  flex gap-x-10 min-h-[${height}] `} style={{minHeight:`${height}px`}}>
                   {children}
                </div>

            </div>
            <button
                onClick={rotateLeft}
                className={`bg-white shadow-md absolute left-0 top-1/2 -translate-y-[calc(50%+10px)] p-4 text-3xl rounded-md ${active === "left" ? "border-2  border-[blue]" : ""}`}>{"<"}</button>

            <button
                onClick={rotateRight}
                className={`bg-white shadow-md absolute right-0 top-1/2 -translate-y-[calc(50%+10px)] p-4 text-3xl rounded-md ${active === "right" ? "border-2  border-[blue]" : ""}`}>{">"}</button>

        </div>
    )
}

export default ProductSlider
