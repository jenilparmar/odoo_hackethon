
import React, { useEffect, useState, useCallback } from "react";
import Books from "@/Components/Books";
import { IoMdLogOut } from "react-icons/io";
import debounce from 'lodash.debounce';
import { useRouter } from "next/router";
import Nabar from "@/Components/Nabar";
const BookFeed = () => {
  const router = useRouter()
    const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/api/GetAllBooks?page=${page}`);
        const data = await response.json();
        setBooks((prevBooks) => [...prevBooks, ...data]);
        setLoading(false);
        setHasMore(data.length > 0); // Assuming the API returns an empty array when no more books are available
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [page]);

  const handleScroll = useCallback(debounce(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200 && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, 200), [hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
const name = localStorage.getItem("name")
  return (
   <>
    <div className="h-screen w-full flex flex-col">
      <div className="bg-pink-300 w-full h-16 rounded-2xl flex flex-row -mt-2 p-4 font-semibold md:justify-around text-xl">
        <div className="w-full self-center flex flex-row md:justify-center mt-2">
          Welcome {name}
        </div>
        <IoMdLogOut onClick={()=>{
          localStorage.removeItem('role');
          localStorage.removeItem('name');
          router.push("/")
        }} className="text-2xl text-white self-center mt-2 active:text-pink-400 transition-all md:text-4xl duration-100" />
      </div>
      
      {books.map((book, idx) => (
        <Books key={idx} book={book} />
      ))}
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more books to load</p>}
      <div className="h-40 w-screen mb-10"></div>
    <Nabar/>
    </div>
   </>
  );
};

export default BookFeed;
