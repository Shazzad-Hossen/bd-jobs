import React from 'react';

const FooterItem = ({title, i1, i2, i3, i4}) => {
    return (
        <div className='flex flex-col gap-4 items-start'>
            <h1 className='text-[20px] text-white'>{title}</h1>
            <p className='text-[#868686]'>{i1}</p>
            <p className='text-[#868686]'>{i2}</p>
            <p className='text-[#868686]'>{i3}</p>
            <p className='text-[#868686]'>{i4}</p>
            
        </div>
    );
};

export default FooterItem;