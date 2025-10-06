import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    console.log(data)
    return (
        <div>
            <h1 className='text-3xl text-center p-6 font-semibold'>Books</h1>
            <Suspense fallback={<span>Loading......</span>}>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                 {
                    data.map(singleBook => <Book singleBook={singleBook}></Book>)
                }
               </div>
            </Suspense>
        </div>
    );
};

export default Books;