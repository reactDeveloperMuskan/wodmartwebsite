import React from "react";
import FeatureCard from "./FeatureCards";
import { heartIocn, starIcon } from "../icons";
import { ShopIcon } from "../icons";

const FeatureProduct = () => {
    return (
        <div className="bg-[#f4f2ee] p-16">
            <div className="font-bold text-6xl pb-10 "> Feature Products</div>
            <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7">
                <FeatureCard top="$200" Text=" $200" pic="https://wodmart.vercel.app/assets/images/product/product-1.png" forth="Barrel Chair Avenue" end="(54)"/>
                <FeatureCard top="$200" Text=" $200" pic="https://wodmart.vercel.app/assets/images/product/product-2.png" forth="Barrel Chair Avenue" end="(54)"/>
                <FeatureCard top="$200" Text=" $200" pic="https://wodmart.vercel.app/assets/images/product/product-4.png" forth="Green Velvet Armchair" end="(54)"/>
                <FeatureCard top="$200" Text=" $200" pic="https://wodmart.vercel.app/assets/images/product/product-3.png" forth="Regency Side Table" end="(54)"/> 
            </div>

        </div>
    )
}

export default FeatureProduct;