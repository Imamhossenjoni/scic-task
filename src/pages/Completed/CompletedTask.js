import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/add')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    },[])
    return (
        <div className='mt-5 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
            <h2 className='text-primary text-3xl font-bold'>Your Completed Task is:</h2>
            {tasks.map(task=><p className='text-white bg-red-500 mt-2 font-bold'>{task.value}</p>)}
        </div>
    );
};
export default CompletedTask;