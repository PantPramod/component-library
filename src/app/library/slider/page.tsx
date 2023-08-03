import ProductSlider from '@/components/ProductSlider'
import React from 'react'

const Slider = () => {
  return (
    <div className='p-8'>
      <h2 className='text-3xl text-center underline leading-[150%]'> Slider</h2>
      <ProductSlider height="300px" >
                    <div className={`min-w-[200px] bg-[yellow] `}>1</div>
                    <div className={`min-w-[200px] bg-[green] `}>2</div>
                    <div className={`min-w-[200px] bg-[pink] `}>3</div>
                    <div className={`min-w-[200px] bg-[blue] `}>4</div>
                    <div className={`min-w-[200px] bg-[blue] `}>5</div>
                    <div className={`min-w-[200px] bg-[blue] `}>6</div>
                    <div className={`min-w-[200px] bg-[yellow] `}>7</div>
                    <div className={`min-w-[200px] bg-[green] `}>8</div>
                    <div className={`min-w-[200px] bg-[pink] `}>9</div>
                    <div className={`min-w-[200px] bg-[blue] `}>10</div>
                    <div className={`min-w-[200px] bg-[blue] `}>11</div>
                    <div className={`min-w-[200px] bg-[blue] `}>12</div>
      </ProductSlider>
    </div>
  )
}

export default Slider
