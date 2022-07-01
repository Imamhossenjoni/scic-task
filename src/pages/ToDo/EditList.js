import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditList = () => {
    const { id } = useParams();
    const [list, setList] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/lists/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    const handleUpdate = e => {
        e.preventDefault();
        const value = e.target.search?.value;
        console.log(value);

        const updatedValue = {
            // value: value,VQGfQFyYFADZNYa2
            value: value,
        }
        fetch(`http://localhost:5000/lists/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Your list updated successfully');
                e.target.reset();
            })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary'>Your selected lists is: <span className='text-success font-bold text-3xl'>{list.value}</span></h2>
            <form onSubmit={handleUpdate}>
                <input class="input input-bordered" type='text' placeholder='Add Your List' name='search'></input>
                <input type="submit" value='Submit' class="btn btn-accent mt-4 " />
            </form>
            
        </div>
    );
};

export default EditList;