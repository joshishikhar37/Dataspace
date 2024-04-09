import React from 'react'
import { ThemeProvider } from '@mui/material/styles';

const Aboutcard = () => {
  return (
    <div className='py-5'>
       <div className='shadow-2xl rounded-lg w-[30%] h-[400px] px-4 mx-16'>
        
          {/* <div className=' text-black flex flex-col gap-1 py-9 font-large'> */}
          <img
              src="/handsakeabout.png"
              alt="footerimage"
              width={100}
              height={90}
              className="mx-auto py-3"
            />
            <div className='flex mx-auto justify-center text-xl mx-10 mt-3 '>
                Expert Support and Consultation
            </div>
            
            <div className=' flex mx-auto mx-10 mt-9'>
                Dataspace provides more than just hosting services since it recognizes the complexities of technology. We have a knowledgeable support staff on hand around-the-clock who are prepared to help with any technical questions or problems. Our dedication goes beyond hosting to provide ongoing support and direction, ensuring your technology runs without issues.            </div>
            </div >
          
    
        {/* </div> */}
    </div>
  )
}

export default Aboutcard
