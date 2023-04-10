import React, { useEffect, useState } from 'react';
import manlogo from '../assets/Allimages/man.png'
import { Link, useLoaderData } from 'react-router-dom';
import Cat from '../components/Cat';
import Job from '../components/Job';

const Home = () => {
    const [cat,setCat]=useState([]);
    const [job,setJob]=useState([]);
    const [jobs,setJobs]=useState([]);
    const jobArr=[];
    const [alljob,setalljob]=useState(true);
   
    const jobsHandler=(val)=>{
        val?setJob(jobs): setJob(jobs.slice(0,4))
    }

    useEffect(()=>{

        fetch('jobs.json').then(res=>res.json().then(data=>{

            setJobs(data);
            setJob(data.slice(0,4))
            }
            ))
        

    },[])
    useEffect(()=>{
        fetch('jobcategory.json').then(res=>res.json().then(data=>setCat(data)))
    },[])
    
    return (
        <div className="max-w-[1280px]  mx-auto ">
        <div className=' flex justify-between items-center flex-col lg:flex-row'>

            <div className="px-6">
                <h1 className='max-w-[510px] text-7xl font-manrope leading-[100px] '>One Step  Closer To Your  <span className='gradientText'>Dream Job</span> </h1>
                <p className='max-w-[519px] text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Link to='/'><button className='primary-btn my-3'>Get Started</button></Link>
            </div>
            <img className='max-w-[700px] w-full ' src={manlogo} alt="" />
            
        </div>

        <section className='flex flex-col justify-center items-center text-center pt-28 px-6'>
            <h1 className='font-manrope text-[45px]'>Job Category List</h1>
            <p className='font-manrope text-[#646464]'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 pt-8">
                {
                      cat.map((ct,i)=><Cat key={i} data={ct}/> )
                  
                }
                
            </div>

        </section>

        <section id='fj' className='flex flex-col justify-center items-center text-center pt-28 px-6'>
            <h1 className='font-manrope text-[45px]'>Featured Jobs</h1>
            <p className='font-manrope text-[#646464]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1  lg:grid-cols-2 items-center gap-4 py-8 ">
                {
                      job.map((jb,i)=><Job key={i} data={jb}/> )
                  
                }
                
            </div>

            <div onClick={()=>setalljob(!alljob)} className="py-16">
                {
                   alljob? <button onClick={()=>jobsHandler(true)} className='primary-btn'>See All Jobs</button> : <button onClick={()=>jobsHandler(false) }className='primary-btn'>See Less Jobs</button>
                }
            </div>

        </section>


        </div>
    );
};

export default Home;