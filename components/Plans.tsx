import React from 'react'

const Plans = () => {
  const imagestyles ={
    width: "304px",
    height: "113.34px"
    }
  return (
    <div className='bg-white border-2 border-indigo-600 rounded-lg w-[308px] h-[420px] ml-16 my-10'>
      <div>
          <img src= "/plans.png" alt="footerimage" style={imagestyles} className='absolute' />
          <h1 className='relative text-white top-[84px] left-[38px]'>Virtual Private Server Bronze</h1>
      </div>
      <div></div><div></div>
      <div></div>
        
    </div>
  )
}

export default Plans
 