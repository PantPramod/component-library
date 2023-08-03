import dynamic from 'next/dynamic'
import React from 'react'
const ProductMagnifier = dynamic(() => import('@/components/ProductMagnifier'))

const page = () => {
    return (
        <div className='p-8'>
            <h2 className='text-3xl text-center underline leading-[150%]'>Image Magnifier</h2>

            <ProductMagnifier
                preview="https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_1192.jpg"
                zoom="https://s3-us-west-1.amazonaws.com/react-package-assets/images/wristwatch_1192.jpg"
            />
        </div>
    )
}

export default page
