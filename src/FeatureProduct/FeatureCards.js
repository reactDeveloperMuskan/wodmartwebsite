import React from 'react';
import { heartIocn, starIcon } from '../icons';


const FeatureCard = ({top , Text , pic , forth , end  }) => {
    return (
        <div className="bg-white rounded-3xl pt-8">
            <div className='flex justify-around'>
            <div className='flex gap-4'>
                    <h1 className='line-through text-2xl font-semibold text-gray-400'> {top} </h1>
                    <h1 className=' text-2xl font-semibold text-black'> {Text} </h1>
                
                </div>
                <div> 
                    {heartIocn}
                    </div>
                    </div>
            <div className='p-10 pl-17'>
            
            <img src={pic}/>
            </div>
           <div> 
            <h3 className="font-semibold text-2xl pl-9 pb-4"> {forth} </h3>
           </div>
           <div className='flex gap-1 pb-4 pl-9'>
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
            <h4 className='pl-3 pb-2'>{end}</h4>
           </div>
        
           
        </div>
    );
};

export default FeatureCard;
