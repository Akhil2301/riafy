import React from "react";
import { useState } from "react";
import Data from "./Data";
import Search from "./Search";
import axios from 'axios'
const Home = () => {
 const [search,setSearch]=useState('')
 const [item,setItem]=useState('')
  const changeHandler=(e)=>{
    setItem('')
    setSearch(e.target.value)
  }

  const listId= async(id)=>{
    setSearch("")
    const result=await axios.get(`http://localhost:5000/stockbyid/?stockid=${id}`)
    setItem(result.data)
  }
 

  return (
    <div className="h-screen">
      <h1 className="bg-slate-100 p-6 font-extrabold text-3xl">Stocks</h1>

      <div className="flex justify-center items-center flex-col text-center">
        <div className="mt-14">
          <h2 className="font-bold text-3xl">
            The easiest way to buy <br /> and sell stocks.
          </h2>
        </div>
        <div className="text-sm mt-2">
          <p>
            Stock analysis and screening tool for <br />
            investors in India.
          </p>
        </div>

        <div className="relative flex items-center w-1/2 h-14 mt-5 rounded-lg shadow-lg bg-white">
          <div className="text-gray-300 px-6">
            <svg
              
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              color="text-gray-300"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </div>
          <input
            onChange={changeHandler}
            className="w-full py-2 px-3"
            type="text"
            placeholder="search something ......"
          />
        </div>

      {search && <Search data={search} listId={listId}/>}  
      {item && <Data data={item}/>}
        
      </div>
    </div>
  );
};

export default Home;
