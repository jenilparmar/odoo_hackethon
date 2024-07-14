import React from 'react'

function books() {
  return (
    <div className="h-fit w-11/12 bg-slate-200 py-2 self-center justify-center flex flex-row mt-2">
    <div className="w-28 h-32 bg-white p-2 border-2 rounded-md"></div>
    <div className="flex flex-col p-2">
      <p className="font-medium">Name:- Harry potter</p>
      <p className="font-medium">Genre:- Sci-fi,action</p>
      <p className="font-medium">Year:- 1992</p>
      <p className="font-medium">Cost:- 10 $/hour</p>
    </div>
  </div>
  )
}

export default books
