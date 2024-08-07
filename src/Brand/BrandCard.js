import React from "react";

const BrandCard = ({ icon, title, des }) => {

    return (
        <div className="p-10">
            <div className="bg-[#f4f2ee] rounded-full w-20 h-20 p-5 ">
                <img className="w-16 h-10" src={icon} />
            </div>
            <h4 className="font-semibold text-3xl pt-7">{title}</h4>
            <p className="text-md pt-4"> {des} </p>
        </div>
    )
}

export default BrandCard;