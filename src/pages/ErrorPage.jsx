import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'

const ErrorPage = () => {
    return (
        <div className='min-h-[calc(100vh-852.988px)] max-w-[1280px] mx-auto'>
            <p className=' absolute md:text-[50vh] text-[20vh]  font-bold opacity-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>404</p>
        <div className='bg-red  min-h-[calc(100vh-184px)] flex flex-col justify-center items-center gap-20'>
        <FaceFrownIcon className="h-40 w-40 text-[#333333]" />
            <p className='text-[#333333] font-bold text-5xl'>Page Not Found</p>
            
        </div>
    
        </div>
    );
};

export default ErrorPage;