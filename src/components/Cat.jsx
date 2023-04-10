import React from 'react';

const Cat = ({data}) => {
    const {img,title,jobs}=data;
    return (
        <div className='bg-[#7E90FE] bg-opacity-5 p-10 text-start rounded-lg'>
            <img className='bg-[#d3d9ff8f] p-2 rounded-md' src={img} alt="" />
            <h1 className='font-bold pt-[30px] text-lg'>{title}</h1>
            <p className='font-semibold text-[#9e9e9e] text-sm'>{jobs}</p>
            
        </div>
    );
};

export default Cat;