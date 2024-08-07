import React from 'react'

export const Footer = () => {
    return (
        <div className='footerimg'  >
            
         <div className=''>
         <div className=' px-10 py-10 ' style={{background:"rgb(177 150 32 / 82%)"}}>
         
          <div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-around'>
                <div  className='sm:pb-4 md:pb-4'>
                    <h1 className='font-bold text-2xl ' > Get a surprise discount</h1>
                    <p>Join our email subscription now</p>
                </div>
                <div className='sm:w-5/6 md:w-5/6 lg:w-1/3 h-16  pr-1 rounded-full bg-white flex items-center  '>
                    <input type='text' placeholder='Enter your Email Addresh' className='sm:w-50 md:w-50 lg:w-2/3  md:h-14 lg:h-15 lg:h-16 pl-4 lg:pl-10 rounded-full outline-none'/>
                    <button className='sm:w-1/3  lg:w-1/3 sm:h-14 md:h-13 lg:h-14 bg-[#b19620] rounded-full md:text-lg lg:text-xl lg:text-xl'> subscribe </button>
                </div>
                <div className='sm:py-4 md:py-4'>
                    <h1 className='font-bold text-2xl'> Download App </h1>
                    <p>Save $3 With App & New User only </p>
                </div>
                <div className='sm:py-4 md:py-4'>
                    <div className='pb-4'>
                    <img src='https://wodmart.vercel.app/assets/images/icon/google-play.png'/>
                    </div>
                    <div>
                    <img src='https://wodmart.vercel.app/assets/images/icon/app-store.png'/>
                    </div>
                    </div>
            </div>
            </div>
          </div>
         </div>
        </div>
        
        
    )
}
