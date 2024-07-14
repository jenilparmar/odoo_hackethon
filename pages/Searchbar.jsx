'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { TbFilterEdit } from "react-icons/tb";

function Searchbar() {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
        params: {
          q: `isbn:${search}`,
          key: process.env.NEXT_PUBLIC_BOOK_API,
        },
      });

      const bookItems = response.data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
        publishedDate: item.volumeInfo.publishedDate,
        rating: item.volumeInfo.averageRating || 'No Rating',
        categories: item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : 'Unknown Genre',
      }));

      setBooks(bookItems);
      console.log(bookItems); // Logging the updated book items array
    } catch (error) {
      console.error('Error fetching books:', error);
      if (error.response && error.response.status === 429) {
        setError('Too many requests. Please try again later.');
      } else {
        setError('An error occurred while fetching books.');
      }
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <div className="bg-pink-300 w-full h-16 rounded-2xl flex flex-row p-4 font-semibold text-xl -mt-3">
        <div className="w-full flex flex-row justify-center mt-2">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
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
          <TbFilterEdit className="font-medium text-2xl self-center text-black active:text-xl transition-all duration-100" />
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-4 w-full flex flex-col items-center">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="bg-white p-4 m-2 rounded shadow-md w-8/12">
              <h3 className="text-lg font-bold text-pink-300">{book.title}</h3>
              <p className="text-sm text-gray-700">Author(s): {book.authors}</p>
              <p className="text-sm text-gray-700">Published year: {book.publishedDate}</p>
              <p className="text-sm text-gray-700">Rating: {book.rating}/5</p>
              <p className="text-sm text-gray-700">Genre: {book.categories}</p>
              <p className="text-sm text-gray-700">Cost: ${'6'} / 5 days</p>
              <button className="p-2 bg-pink-300 rounded-md font-medium">Withdraw</button>
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
