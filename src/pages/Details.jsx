import React from 'react';
import { useLoaderData } from 'react-router-dom';
import salaryLogo from '../assets/Icons/salary.png'
import titleLogo from '../assets/Icons/title.png'
import locationLogo from '../assets/Icons/location.png'
import phoneLogo from '../assets/Icons/phone.png'
import emailLogo from '../assets/Icons/email.png'
import { addToLocalStorage } from '../utilities/localStorage';

const Details = () => {
    const data= useLoaderData();

   
    const {id, logo, des, res, edu, exp, salary, title, contact, location ,company,type1,type2, }= data ;
    
    const applyjobHandler=()=>{
        addToLocalStorage({id, logo,title,company, type1,type2,location,salary});
        
    }

    
    
    return (

        <div className="">
            {
                Object.keys(data).length === 0? <div className="text-center text-4xl font-bold p-40">Opps! No jobs Found.</div> :  <div className='max-w-[1280px] mx-auto px-6 py-32 flex flex-col md:flex-row   items-center justify-between gap-8'>
          

                <div className="max-w-[800px]">
                            
                <p className='text-lg text-[#666666] text-justify pb-6'> <span className='font-bold text-[#000000]'>Job Description:</span> {des} </p>
                
                <p className='text-lg text-[#666666] text-justify pb-6'> <span className='font-bold text-[#000000]'>Job Responsibility:</span> {res} </p>
                
                <p className='text-lg text-[#666666] text-justify pb-6'> <span className='font-bold text-[#000000]'>Educational Requirements:</span> <br /> <br /> {edu} </p>
                
                <p className='text-lg text-[#666666] text-justify pb-6'> <span className='font-bold text-[#000000]'>Experiences:</span> <br /> <br />{exp} </p>
                
                
                
                
                </div>
                <div className=" w-full max-w-[400px] flex flex-col flex-shrink-0">
                 <div className="bg-gradient-to-r from-[#7E90FE]  to-[#9873FF] rounded-lg">
                <div className="max-w-[400px] bg-opacity-70 bg-[white]   p-6">
                 <h1 className=' border-b-2 text-xl font-bold text-start py-6'>Job Details</h1>
                
                 <div className="flex items-center justify-start gap-4 py-4 flex-wrap">
                     <img src={salaryLogo} alt="" />
                     <p className='text-lg font-semibold'>Salary : </p>
                     <p className='text-[#7e7e7e]'>{salary} (Per-Month) </p>
                 </div>
                
                 <div className="flex items-center justify-start gap-4 py-4 flex-wrap">
                     <img src={titleLogo} alt="" />
                     <p className='text-lg font-semibold'>Job title : </p>
                     <p className='text-[#7e7e7e]'>{title}  </p>
                 </div>
                
                 <h1 className=' border-b-2 text-xl font-bold py-6 text-start'>Contact Information</h1>
                
                 <div className="flex items-center justify-start gap-4 py-4 flex-wrap">
                     <img src={phoneLogo} alt="" />
                     <p className='text-lg font-semibold'>Phone : </p>
                     <p className='text-[#7e7e7e]'>{contact[1].phone}  </p>
                 </div>
                
                 <div className="flex items-center justify-start gap-4 py-4 flex-wrap">
                     <img src={emailLogo} alt="" />
                     <p className='text-lg font-semibold'>E-mail : </p>
                     <p className='text-[#7e7e7e]'>{contact[0].email}  </p>
                 </div>
                
                 <div className="flex items-center justify-start gap-4 py-4 flex-wrap">
                     <img src={locationLogo} alt="" />
                     <p className='text-lg font-semibold'>Address : </p>
                     <p className='text-[#7e7e7e]'>{location}  </p>
                 </div>
                
                </div>
                </div>
                <button onClick={applyjobHandler} className='primary-btn w-full my-4'>Apply Now</button>
                </div>
                
                        </div>
            }
        </div>
       
    );
};

export default Details;