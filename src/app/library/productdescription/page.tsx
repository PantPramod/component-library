import React from 'react'
import HoverScroll from '@/components/HoverScroll'

const ProductDesc = () => {
    return (
        <div className='p-8'>
            <h2 className='text-3xl text-center underline leading-[150%]'>Automatic Scroll on Hover</h2>
            <div className='flex flex-wrap gap-x-4 gap-y-4 '>

                {
                    [1, 2, 3, 4].map(item =>
                        <HoverScroll
                            data={data}
                            height={300}
                            width={200}
                            timer={1000}
                            key={item}
                        />)
                }
            </div>
        </div>

    )
}

export default ProductDesc


const data = [
    "https://source.unsplash.com/200x300/?shirt,clothes",
    "https://source.unsplash.com/200x300/?shirt,clothes1",
    "https://source.unsplash.com/200x300/?shirt,clothes2",
    "https://source.unsplash.com/200x300/?shirt,clothes3",
    "https://source.unsplash.com/200x300/?shirt,clothes4",
    "https://source.unsplash.com/200x300/?shirt,clothes5",
] 