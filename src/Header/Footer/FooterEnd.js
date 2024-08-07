import React from 'react'
import { emailIcon, PhoneIcon, } from '../../icons'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


export const FooterEnd = () => {
    return (
        <div className=" text-lg text-center sm:text-left ">
            <div className='bg-black'>
                <div className='bg-black pt-20 pb-20 grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1'>

                    <div className=' col-span-1 text-white sm:p-2 md:pl-8 lg:pl-20 pr-12'>
                        <h1 className='font-semibold text-2xl underline md:underline-offset-8' > About us</h1>
                        <p className='pt-10 text-gray-400'>Etoshi is an exciting contemporary brand <br /> which focuses on high-quality products<br /> graphics with a British style</p>
                        <div className='flex pt-7 gap-2'>
                           <div className='text-3xl pt-1'>
                           {emailIcon}
                            </div>
                            <h3 className='font-semibold lg:text-lg text-xl'> Info@dynmic.com</h3>
                        </div>
                        <div className='flex pt-7 gap-2' >
                            {PhoneIcon}
                            <h3 className='font-semibold lg:text-lg  sm:text-xl'> +777 6789 3728</h3>
                        </div>
                    </div>



                    <div className=' lg:col-span-2 sm:py-6 sm:p-2  md:px-8 md:pr-5  '>
                    <div className= ' text-white border sm:w-3/3 pt-2  md:w-3/3 h-52  rounded-3xl h-max md:p-2  lg:py-6 px-14'>
                        <div className='flex justify-center  md:pt-3'>
                            <img src='https://wodmart.vercel.app/assets/images/logo/logo-dark.png' />
                        </div>
                        <div className='flex justify-center flex-wrap gap-10  sm:pt-5 lg:pt-8 ' >
                            <h3 className='text-xl font-bold'> Follow Us </h3>
                            <div className='flex justify-around lg:gap-10 md:gap-3 size-500  sm:gap-2 size-300'>
                                <FaFacebookF color='yellow ' />
                                <FaTwitter color='yellow' />
                                <IoLogoWhatsapp color='yellow' />
                                <AiFillInstagram color='yellow' />
                                <FaPinterest color='yellow' />
                                <FaLinkedinIn color='yellow' />
                            </div>
                        </div>

                        <div className='h-[1px] bg-white mt-4 mb-4 sm:my-3'>

                        </div>
                        <div className='flex justify-around  md:text-sm sm:text-xs '>
                            <NavLink to={"/home"}> Home </NavLink>
                            <NavLink to={"/about"}> About </NavLink>
                            <NavLink to={"/shop"}> Shop </NavLink>
                            <NavLink to={"/blog"}> Blog </NavLink>
                            <NavLink to={"/contact"}> Contact</NavLink>
                        </div>
                    </div>

                    </div>


                   



                    <div className=' col-span-1 text-white lg:pl-20 pr-12 md:pl-8 sm:p-2'>
                        <h3 className='font-bold text-2xl'> My Accounts </h3>
                        <div className='h-[1px] w-10 bg-white mt-4 '></div>
                        <div className='text-gray-400'>
                            <p className='pt-6'> My Order </p>
                            <p className='pt-6'> My Credit Slip </p>
                            <p className='pt-6'> My Addresh </p>
                            <p className='pt-6'> My Personal Info </p>
                        </div>
                    </div>

                </div>
            
                <div className='text-lg text-center sm:text-left'>
                    <div className='h-[1px]  bg-white mt-4 mb-4 '></div>
                    <div className='text-white flex gap-6 pl-20'>
                        <p> Privacy Policy </p>
                        <p>|</p>
                        <p>Term & condition </p>
                    </div>
                </div>
                </div>       
            </div>
        
    )
}
