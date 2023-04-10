import {  toast } from 'react-toastify';
export const addToLocalStorage=(data)=>{
    
    let jobs=[];
    const savedJobs=JSON.parse(localStorage.getItem('appliedJobs'))
    
    if(savedJobs){
        const jIndex= savedJobs.findIndex(item=>item.id===data.id)
        if(jIndex!==-1)
        toast.warn("You already applied");
        else {
            jobs=[...savedJobs,data];
            localStorage.setItem('appliedJobs',JSON.stringify(jobs));
            toast.success("Apply Successful");


        }

    }
    else {
        jobs=[data];
        localStorage.setItem('appliedJobs',JSON.stringify(jobs));
        toast.success("Apply Successful");
    }
    
   
}

export const getLocalStorageData=()=>{

   const data= JSON.parse(localStorage.getItem('appliedJobs'))
   if(data) return data;
   else return [];
}