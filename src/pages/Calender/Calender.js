import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [selected,setSelected]=useState(new Date())
    return (
        <div className="text-center mx-auto  text-center grid lg:grid-cols-1 md:grid-cols-1 sm:gird-cols-1">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                   <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                   />
                </div>
            </div>
        </div>
    );
};

export default Calender;