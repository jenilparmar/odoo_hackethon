import React, { useEffect, useState } from "react";
import Books from "@/Components/Books";
import { IoMdLogOut } from "react-icons/io";

const BookFeed = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/GetAllBooks');
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="bg-pink-300 w-full h-16 rounded-2xl flex flex-row -mt-2 p-4 font-semibold md:justify-between text-xl">
        <div className="w-full self-center flex flex-row md:justify-center mt-2">
          Welcome Jenil
        </div>
        <IoMdLogOut className="text-2xl text-white self-center mt-2 active:text-pink-400 transition-all md:text-4xl duration-100" />
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book, idx) => (
          <Books key={idx} book={book} />
        ))
      )}
      <div className="h-40 w-screen mb-10"></div>
    </div>
  );
};

export default BookFeed;
