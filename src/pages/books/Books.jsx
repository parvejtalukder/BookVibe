import React, { Suspense } from 'react';
// import { useEffect, useState } from 'react';
import Book from './book/Book';
import { useLoaderData } from 'react-router';

const Books = () => {

    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data);
    //         setAllBooks(data);
    //     })
    // }, []);

    // const BookPromise = fetch("./booksData.json").then(res => res.json());
    const Database = useLoaderData();
    console.log(Database);

    return (
        <div>
            <h2 className='font-bold text-neutral-950 text-center text-3xl'>Books</h2>
            <div className='grid grid-cols-3 gap-10'>
            {
                <Suspense fallback={<span>Loading.....</span>}>
                    {/* <Book></Book> */} 
                    {
                        Database.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </Suspense>
            }
            </div>
        </div>
    );
};

export default Books;