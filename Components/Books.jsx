import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const Books = ({ book }) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes`, {
          params: {
            q: `isbn:${book.isbn}`,
            key: process.env.NEXT_PUBLIC_BOOK_API,
          },
        });
        
        const bookItems = response.data.items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
          publishedDate: item.volumeInfo.publishedDate,
          rating: item.volumeInfo.averageRating || 'No Rating',
          categories: item.volumeInfo.categories ? item.volumeInfo.categories.join(', ') : 'Unknown Genre',
        }));
        
        setBookData(bookItems);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBookData();
  }, [book.isbn]);

  if (!bookData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-fit w-11/12 bg-slate-200 py-2 self-center justify-start flex flex-row mt-2">
      <div className="w-28 h-32 bg-transparent p-2 border-2 rounded-md">
       <Image
  src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-S.jpg`}
  width={120}
  height={150}
  layout="responsive"
  objectFit="cover" 
/>
      </div>
      <div className="flex flex-col p-2">
        <p className="font-medium">Name: {bookData[0]?.title}</p>
        <p className="font-medium">Genre: {bookData[0]?.categories}</p>
        <p className="font-medium">Year: {bookData[0]?.publishedDate}</p>
        <p className="font-medium">Cost: ${book.cost} $/hour</p>
      </div>
    </div>
  );
};

export default Books;
