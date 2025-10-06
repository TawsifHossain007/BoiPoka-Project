import React from 'react';
import BookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex items-center justify-between gap-6 p-16'>
            <div>
               <h1 className='font-bold text-[42px]'>Books to freshen up <br /> your bookshelf</h1> 
                <button className='btn btn-success mt-4 text-gray-800'>View The List</button>
            </div>
            <div>
                <img className='rounded-3xl' src={BookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;