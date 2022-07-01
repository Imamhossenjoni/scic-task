import React, { useState } from 'react';

const TodoForm = () => {
    // const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const value = e.target.search?.value;
        console.log(value);

        const submitedValue = {
            // value: value,VQGfQFyYFADZNYa2
            value:value,
        }
        fetch('http://localhost:5000/lists', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitedValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success',data);
                alert('Your list added with successfully');
                e.target.reset();
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input class="input input-bordered" type='text' placeholder='Add Your List' name='search'></input>
                <input type="submit" value='Submit' class="btn btn-accent mt-4 " />
            </form>
        </div>
    );
};

export default TodoForm;