import React from 'react'
import Buttoncart from "@/components/buttoncart"

const Plans = () => {
  const imagestyles ={
    width: "308px",
    height: "113.34px"
    }
  return (
    <div className='shadow-2xl rounded-lg w-[308px] h-[420px] ml-16 my-10 rounded-lg '>
        <div className='relative'>
          <img src= "/plans.png" alt="footerimage" style={imagestyles} className='rounded-t-lg' />
          <h1 className='absolute top-[70%] left-10 text-white font-9xl font-black'>Virtual Private Server Bronze</h1>
        </div>
        
        <div className='h-[72.7%]'>
          <div className='h-[80%] text-black flex flex-col gap-1 py-5'>
            <div className='flex mx-auto '>
                CORE CPU
            </div>
            <div className='flex mx-auto '>
              1 GB RAM
            </div>
            <div className=' flex mx-auto'>
              20 GB DISK SPACE
            </div>
            <div className=' flex mx-auto'>
              1 PUBLIC IP ADDRESS
            </div>
            <div className='flex mx-auto '>
            1 PUBLIC IP ADDRESS
            </div>
            <div className='flex mx-auto font-black'>
                Monthly
            </div>
            <div className='flex mx-auto '>

               Nrs.<p className='font-black'>1,000.00</p> 
            </div>
            
          </div >
          <div className='h-[20%] '>
            <Buttoncart/>
          </div>
        </div>
     
   
    </div>
  )
}

export default Plans
 