"use client"
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Html, useProgress } from '@react-three/drei'


function FallbackLoader() {

   const { progress } = useProgress()
    return <Html center  className='text-pink600 text-3xl p-0 m-0 z-50'>
       <span className='text-center flex justify-center items-center gap-4 '>
            <AiOutlineLoading3Quarters className='text-6xl sm:text-2xl text-pink600 animate-spin' />
         <p>
               {Math.round(progress)}% 
            
            </p>
       </span>


    </Html>
}

export default FallbackLoader