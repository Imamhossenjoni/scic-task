import React from 'react';

const NoFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl text-info'>Sorry Bro!</h2>
            <h1 className='text-2xl text-red-500'>Your routes didn't match</h1>
            <p className='text-red-500 font-bold text-3xl'>Your result is : 420</p>
        </div>
    );
};

export default NoFound;