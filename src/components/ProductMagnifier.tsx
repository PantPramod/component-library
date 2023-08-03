'use client'
import React from 'react'
import {
    MagnifierContainer,
    MagnifierPreview,
    MagnifierZoom
} from "react-image-magnifiers";

type propTypes={
   preview:string,
   zoom:string
}

const ProductMagnifier = ({preview, zoom}:propTypes) => {
    return (
        <div>

            <MagnifierContainer className='flex gap-x-4'>
                <div className="w-[20%]">
                    <MagnifierPreview
                        className=''
                        imageSrc={preview} />
                </div>
                <MagnifierZoom
                    className='flex-1 h-[500px]  w-[80%]'
                    imageSrc={zoom} />
            </MagnifierContainer>
        </div>
    )
}

export default ProductMagnifier
