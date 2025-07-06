import React from 'react';

const Counter = ({count,title}:{count:string, title:string}) => {
    return (
        <div className='flex flex-col text-center'>
            <p className=' text-xl md:text-2xl font-semibold '>{count}</p>
            <p className='text-sm text-white/70'>{title}</p>
        </div>
    );
};

export default Counter;