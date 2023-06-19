import { Input } from '@/components/ui/input'
import { Button } from '@/src/components/ui/button'
import React from 'react'
import black from '@/public/black.png';

const Subscribe = () => {
  return (
    <div>

        <div className=" grid justify-center items-center mt-36 mb-36 relative">
            <h2 className="flex justify-center md:text-4xl text-3xl text-black font-bold tracking-tight  mt-6 mb-3 ">Subscribe Our Newsletter</h2>
            <p className='flex justify-center text-md py-4'>Get the latest information and promo offers directly</p>
            
            <div className='flex w-full max-w-md space-x-2 mt-8'>
      <Input type="email" placeholder="Input email address"/>
      <Button type="submit" className='bg-black hover:bg-black px-8 py-3 text-white font-bold border-t-2 border-l-2 border-gray-500'>Get Started</Button>
    </div>

    <div>
      <h1 className="absolute text-[#f2f3f7] md:text-[140px] font-bold -z-10 -top-2 md:left-40 md:right-36 text-[70px] left-10 right-10">Newsletter</h1>
      </div>
  </div> 
 </div>
  )
}

export default Subscribe