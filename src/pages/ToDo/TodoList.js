import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

const TodoList = () => {
    const [lists, setLists] = useState([])
    useEffect(() => {
        fetch('https://cryptic-bastion-79290.herokuapp.com/lists')
            .then(res => res.json())
            .then(data => setLists(data));
    }, [])
const handleAdd=id=>{
    const url= `https://cryptic-bastion-79290.herokuapp.com/lists/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        fetch('https://cryptic-bastion-79290.herokuapp.com/add',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
           body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success',data);
            alert('Your list added with successfully and assigned Completed Task');
        })
    });

}

    return (
        <div className='mt-5 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1'>
            <h1 className='text-3xl font-bold text-white bg-success'>Your lists are:</h1>
            {/* <h2>Length:{lists.length}</h2> */}
            {
                lists.map(list=><h2 key={list._id} className='bg-info font-bold text-red-500 mt-3'>{list.value}
                <button className='btn btn-sm' onClick={()=>handleAdd(list._id)}>Add</button>
                <Link to={`/update/${list._id}`}><button className='btn btn-sm btn-primary'>Edit</button></Link>
                </h2>
                )
            }
        </div>
    );
};

export default TodoList;