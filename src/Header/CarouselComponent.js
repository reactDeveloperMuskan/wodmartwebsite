import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
    return (
        <div className='bg-[#f4f2ee]'>
            
            <div> <Carousel autoPlay={true} showThumbs={false} transitionTime={500}>
                <div>
                    <h4 className=' text-3xl sm:text-xl  pb-12  md:text-4xl pb-12 font-bold text-center mb-20 mt-20 sm:text-6xl font-bold'>Discover The Premium
                        <br/>Furniture in Our Partroll Store
                    </h4>
                    <img style={{ width: '70%', height: 'auto' }} src="https://wodmart.vercel.app/assets/images/hero/hero-banner-1.png" />
                </div>
                <div>
                    <h4 className='text-3xl sm:text-2xl pb-12 md:text-4xl pb-12 font-bold text-center mb-20 mt-20 text-6xl font-bold'>
                        Elevate Your Space with
                        <br/>ElegantFurniture Designs
                    </h4>

                    <img style={{ width: '70%', height: 'auto' }} src="https://wodmart.vercel.app/assets/images/hero/03.png" />

                </div>
                <div>
                    <p className=' text-3xl sm:text-2xl  pb-12  md:text-4xl  pb-10  font-bold text-center text-3xl sm:text-2xl md:text-4xl font-bold text-centermb-20 mt-20 text-6xl font-bold'> Explore our Exlusive <br /> Collection of Luxury Furniture</p>
                    <img style={{ width: '70%' , height: 'auto' }} src="https://wodmart.vercel.app/assets/images/hero/04.png" />
                </div>
            </Carousel></div>
        </div>
    );
};

export default CarouselComponent;
