import Link from "next/link";


function page() {
  return (
    <div className="w-screen h-screen flex flex-col justify-start">
      <div className="w-10/12 h-fit py-8  flex flex-col self-center shadow-lg mt-28">
        <div className="w-8/12 bg-slate-200  justify-center gap-2 self-center flex flex-row">
          <Link href={'/AddBooks'}>
          <p className="active rounded-lg p-2  text-center font-medium self-center">
            Add
          </p>
          </Link>
          <Link href={'/UpdateBooks'}>

          <p className="text-center rounded-lg p-2  font-medium self-center">
            Update

          </p>
          </Link>

          <Link href={'/DeleteBooks'}>

          <p className="text-center rounded-lg p-2  font-medium self-center">
            Remove
          </p>
          </Link>

        </div>
        <label htmlFor="ISBN" className="px-6 font-medium mt-2">ISBN number:</label>
        <input type="number" name="ISBN" className="w-10/12 bg-slate-200 border-2 h-10 self-center font-medium px-2"/>

        <label htmlFor="items" className="px-6 font-medium mt-2">Available Peices:</label>
        <input type="number" name="items" className="w-10/12 bg-slate-200 border-2 h-10 self-center font-medium px-2"/>

        <label htmlFor="cost " className="px-6 font-medium mt-2">Cost(per 5 days) :</label>
        <input type="number" name="cost " className="w-10/12 bg-slate-200 border-2 h-10 self-center font-medium px-2"/>

        <button
        type="button"
        className="w-10/12 self-center bg-pink-300 p-2 mt-2 rounded-md font-medium active:bg-pink-400 transition-colors duration-100"
      >
        Update Book
      </button>


      </div>
    </div>
  );
}

export default page;
