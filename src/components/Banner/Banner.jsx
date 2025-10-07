// import React, { useEffect, useState } from 'react';
import BannerBook from '../../assets/books.jpg'

const Banner = () => {
    return (
            <div>
                <div>
                    <div className="hero bg-base-200 min-h-screen px-16">
                          <div className="hero-content flex-col lg:flex-row-reverse">
                            <img
                              src={BannerBook}
                              className="max-w-sm rounded-lg shadow-2xl"
                            />
                            <div className='flex flex-col justify-start items-start gap-6'>
                              <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                              <button className="btn btn-primary">View The List</button>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
     );
};

export default Banner;