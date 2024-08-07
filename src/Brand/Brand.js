import React from "react";
import BrandCard from "./BrandCard";
import SimpleSlider from "./SimplesSide";

const Brand = () => {

    return (

        <div>
            <h1 className="text-5xl font-bold pl-10 pt-10"> Brands </h1>
            <div > 
            <SimpleSlider/>
            </div>
            <div>
                <div className="h-[1px] bg-black m-4  ml-4 mr-4 mt-4"></div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                <BrandCard icon="https://wodmart.vercel.app/assets/images/goal/icon-1.png" title="Original Product" des=" There are many variation of passages of our Lorem Ispum available but the." />
                <BrandCard icon="https://wodmart.vercel.app/assets/images/goal/icon-2.png" title="Satisfaction" des="There are many variation of passages of our Lorem Ispum available but the." />
                <BrandCard icon="https://wodmart.vercel.app/assets/images/goal/icon-3.png" title="New Arrival Everyday" des="There are many variation of passages of our Lorem Ispum available but the." />
                <BrandCard icon="https://wodmart.vercel.app/assets/images/goal/icon-4.png" title="Fast & Free Shipping" des="There are many variation of passages of our Lorem Ispum available but the." />

            </div>
        </div>
    )
}

export default Brand;