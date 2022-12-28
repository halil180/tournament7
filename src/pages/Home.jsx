import React from 'react'
import {Link} from "react-router-dom"
function Home() {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-3xl font-bold m-6">Tournament 7</h1>
    <Link to="four" className="btn-blue-500  focus:outline-none focus:shadow-outline rounded-full py-2 px-4 text-lg font-bold m-4 hover:bg-sky-700 hover:text-white  border-4  border-sky-600">4 players</Link>
    <Link to="four" className="btn-red-500 hover:bg-red-700 focus:outline-none focus:shadow-outline rounded-full py-2 px-4 text-lg font-bold m-4  hover:text-white   border-4  border-red-600">8 Players</Link>
    <Link  to="four" className="btn-green-500 hover:bg-green-700 focus:outline-none focus:shadow-outline rounded-full py-2 px-4 text-lg font-bold m-4  hover:text-white  border-4  border-green-600">16 player</Link>
  </div>
  )
}

export default Home