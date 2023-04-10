import React from 'react';
import FooterItem from './FooterItem';
import social from '../assets/Icons/Group 9969.png'

const Footer = () => {
    return (
        <div className='bg-[#1A1919] py-[130px]'>
        <div className="max-w-[1280px] mx-auto divide-y-[2px] divide-[#2c2c2c] ">
            <div className="grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-5 gap-[100px] pb-[50px] px-6">
            <div className="">
                <h1 className='text-3xl font-bold text-white pb-[20px]'>BD JOBS</h1>
                <p className='text-[#b8b8b8]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <img className='max-w-[100px] pt-4' src={social} alt="" />
            </div>
            <FooterItem title="Company" i1='About Us' i2='Work'i3='Latest News'i4='Careers' /> 
            <FooterItem title="Product" i1='Prototype' i2='Plans & Pricing'i3='Customers'i4='Integrations' /> 
            <FooterItem title="Support" i1='Help Desk' i2='Sales'i3='Become a Partner'i4='Developers' /> 
            <FooterItem title="Contact" i1='shazzad.srv@gmail.com' i2='+880 1645-288850'i3=''i4='' /> 
            </div>
            
            <div className="flex justify-between items-center pt-[50px] text-[#777777] px-6 sm:flex-row flex-col gap-10">
                <p>@2023 <span className='font-bold'>Shazzad Hossen</span>. All Rights Reserved</p>
                <p>Powered by <span className='font-bold'>BD Jobs</span></p>
            </div>



            
        </div>
        </div>
    );
};

export default Footer;