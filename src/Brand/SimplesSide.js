import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay:true,
    // slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          // slidesToScroll: 1,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          // slidesToScroll: 1,
        }
      }, 

      { breakpoint: 640 ,
        settings:{
          slidesToShow:2
       // settings: 'unslick',
      }
    }
    ]

  }

  return (
    <Slider {...settings} className="  pl-10">
      <div className="py-14 col-span-1">
        <img src=" https://wodmart.vercel.app/assets/images/brand/3.svg" />
      </div>
      <div className="py-14 col-span-1">
        <img src=" https://wodmart.vercel.app/assets/images/brand/4.svg" />
      </div>
      <div className="py-14 col-span-1">
      <img src="https://wodmart.vercel.app/assets/images/brand/2.svg" />
      </div>
      <div className="py-14 col-span-1" >
        <img  src=" https://wodmart.vercel.app/assets/images/brand/7.svg" />
      </div>
      <div className="py-14 col-span-1"> 
        <img src="https://wodmart.vercel.app/assets/images/brand/1.svg" />
      </div>
      <div className="py-14 col-span-1">
        <img src="https://wodmart.vercel.app/assets/images/brand/6.svg" />
      </div>
    </Slider>
  )
}
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   autoPlay: true ,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  // return (
  //   <div className="pt-10 pl-10  grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 ">
  //     <Slider {...settings}>
  //       <div className="col-span-1">
  //         <img src=" https://wodmart.vercel.app/assets/images/brand/3.svg" />
  //       </div>
  //       <div className="col-span-1">
  //         <img src=" https://wodmart.vercel.app/assets/images/brand/4.svg" />
  //       </div>
  //       <div className="col-span-1">
  //         <img src=" https://wodmart.vercel.app/assets/images/brand/7.svg" />
  //       </div>
  //       <div className="col-span-1" > 
  //         <img src=" https://wodmart.vercel.app/assets/images/brand/2.svg" />
  //       </div>
  //       <div className="col-span-1">
  //         <img src=" https://wodmart.vercel.app/assets/images/brand/7.svg" />
  //       </div>
  //       <div className="col-span-1">
  //         <img src="https://wodmart.vercel.app/assets/images/brand/1.svg" />
  //       </div>
  //       <div className="col-span-1"> 
  //         <img src="https://wodmart.vercel.app/assets/images/brand/6.svg" />
  //         `   `    </div>
  //     </Slider>
  //   </div>
  // )}
