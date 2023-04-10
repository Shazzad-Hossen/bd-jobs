import React from 'react';
import locIco from '../assets/Icons/location.png'
import salIco from '../assets/Icons/salary.png'
import { Link } from 'react-router-dom';

const Job = ({data}) => {
    const {id,logo, title, company, type1, type2, location, salary}=data;
    return (
        <div className='border-2 rounded-lg p-[40px] flex flex-col text-start justify-start'>
            <img className='w-[100px] ' src={logo} alt="" />
            <h1 className='text-xl font-bold pt-4'>{title}</h1>
            <h1 className='text-xl  pt-4 text-[#8a8a8a]'>{company}</h1>
            <div className="flex gap-6 py-3 flex-wrap">
                <div className="bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] p-[1px] rounded-sm"><p className='bg-white rounded-sm px-4 py-2'> <span className='gradientText font-semibold'>{type1}</span> </p></div>
                
                <div className="bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] p-[1px] rounded-sm"><p className='bg-white rounded-sm px-4 py-2'> <span className='gradientText font-semibold'>{type2}</span> </p></div>
            </div>
            <div className="flex gap-6 py-3 text-[#888888] font-semibold flex-wrap">

            <div className="flex gap-2 py-3">
                <img className='w-[25px] h-[25px]' src={locIco} alt="" />
                <p>{location}</p>
            </div>
            <div className="flex gap-2 py-3">
                <img className='w-[25px] h-[25px]' src={salIco} alt="" />
                <p>Salary : {salary}</p>
            </div>

            </div>
            <Link to={`details/${id}`}> <button className='primary-btn'>View Details</button> </Link>
            
        </div>
    );
};

export default Job;