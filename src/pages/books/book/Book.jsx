// import React, { use } from 'react';

import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({book}) => {
    // const BooksData = use(BookPromise);
    console.log(book);
    return (
        <div>
            <Link to={`/book/${book.bookId}`}>
                <div className="card bg-base-100 border-2 border-green-950 w-auto shadow-sm p-8">
  <figure className="bg-gray-300 p-5"> 
    <img
      src={book.image}
      alt="Shoes" className="h-[200px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{book.bookName}</h2>
    <h4>By {book.author}</h4>
    {/* <p>{book.review}</p> */}
    <div className="card-actions justify-between">
        <button className="btn btn-primary">{book.category}</button>
      <button className="btn bg-amber-300">{book.rating} <Star></Star></button>
    </div>
  </div>
            </div>
            </Link>
        </div>
    );
};

export default Book;