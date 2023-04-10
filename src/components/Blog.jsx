import React from 'react';

const Blog = ({image,qstn,ans}) => {
    return (
        <div className='px-6'>
            <img className='w-full h-[400px] rounded-lg' src={image} alt="" />
            <h1 className='text-3xl font-bold py-4'>{qstn}</h1>
            <p className='pb-16 text-lg font-semibold text-justify text-[#757575]'>{ans}</p>
            
        </div>
    );
};

export default Blog;