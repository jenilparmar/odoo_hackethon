  'use client';
  import axios from 'axios';
  import React, { useState } from 'react';

  function Searchbar() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearch = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
          params: {
            q: `isbn:${search}`,
            key: process.env.NEXT_PUBLIC_BOOK_API,
          },
        });
        setBooks(response.data.items);
        console.log(books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    

    return (
      <div className="h-screen w-full flex flex-col items-center">
        <div className="bg-pink-300 w-full h-16 rounded-2xl flex flex-row p-4 font-semibold text-xl -mt-3">
          <div className="w-full flex flex-row justify-center mt-2">
            <input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="h-10 w-8/12 self-center px-2 font-normal placeholder:px-2 rounded-md"
              placeholder="Search Books"
            />
            <button
              type="button"
              className="p-2 h-8 self-center font-medium text-sm active:bg-pink-500 transition-colors duration-100 bg-pink-400 mx-2 rounded-lg"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="mt-4 w-full flex flex-col items-center">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id} className="bg-white p-4 m-2 rounded shadow-md w-8/12">
                <h3 className="text-lg font-bold">{book.volumeInfo.title}</h3>
                <p className="text-sm text-gray-700">{book.volumeInfo.authors?.join(', ')}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No books found. Try searching for a book.</p>
          )}
        </div>
      </div>
    );
  }

  export default Searchbar;
