import React, { useState } from 'react';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';
import { Link, NavLink } from 'react-router-dom';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const ErrorLayout = () => {
    const [menu,setMemu]=useState(false);
    return (
        <div>
           
       
             
        <div className='max-w-[1280px] mx-auto py-16 flex justify-between items-center px-6'>
            
            <Link to='/'><h1 className='text-3xl font-anton text-[#333333]'>BD Jobs</h1></Link>
            
            
             <ul className={` flex flex-col sm:flex-row items-start sm:items-center sm:static absolute bg-[white]  shadow-lg sm:shadow-none sm:bg-transparent w-full sm:w-auto h-80 sm:h-auto  duration-500 ease-in  ${menu===false? ' -top-96  left-0   ': ' p-6 top-32 left-0  '}    gap-4  font-semibold text-[#838383] text-lg`}>
             <li><NavLink className={({ isActive}) =>isActive? "active":""} to='/'>Home</NavLink></li>
             <li><NavLink className={({ isActive}) =>isActive? "active":""} to='appliedjobs'>Applied Jobs</NavLink></li>
             <li><NavLink className={({ isActive}) =>isActive? "active":""} to='statistics'>Statistics</NavLink></li>
             <li><NavLink className={({ isActive}) =>isActive? "active":""} to='blogs'>Blogs</NavLink></li>
            </ul>
            
            
            
             <a href='/#fj'>
             <button className={` duration-500 ease-in absolute sm:static primary-btn ${menu===false? ' -top-56 left-6  ' : ' left-6 top-[350px]'}`}>Start Applying</button>
            </a>
            
            
            <div onClick={()=>setMemu(!menu)} className="w-[30px] z-10 sm:hidden">
            {
             menu? <XMarkIcon/> : <Bars4Icon/>
            }
            </div>
            
         
            
         </div> 
         
        
            <ErrorPage/>
            <Footer/>
            
        </div>
    );
};

export default ErrorLayout;