import { useLoaderData } from "react-router-dom";
import Applied from "../components/Applied";
import { useState } from "react";


const AppliedJobs = () => {
    const [original,setOriginal]=useState(useLoaderData())
    const [data,setData]=useState(original)
    
 

  const handleChange = (e) => {
    const selectedValue=e.target.value;
    selectedValue==='Onsite'? setData(original.filter(item=>item.type1==='Onsite')):  (selectedValue==='Remote'? setData(original.filter(item=>item.type1==='Remote')): setData(original)) 

   


  };
 

  return (
    <div className="max-w-[1280px] px-6 mx-auto py-14">
      <div className="flex justify-end">

        <select className="bg-[#F4F4F4] p-2 border-[#F4F4F4] border-8"  onChange={handleChange}>

          <option  disabled value="Onsite">Filter By</option>
          <option value="All">All</option>
          <option value="Onsite">Onsite</option>
          <option value="Remote">Remote</option>

        </select>

      </div>

      {data.map((job, i) => (
        <Applied key={i} data={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
