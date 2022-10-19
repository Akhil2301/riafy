import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Search = ({ data , listId}) => {
  const [searcList, setSearchList] = useState([]);
  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:5000/stock/?sname=${data}`
    );
    setSearchList(result.data);
  };
  
  return (
    <ul className="w-1/3 text-left shadow-xl mt-4  divide-y divide-slate-200">
      {searcList &&
        searcList.map((item, key) => {
          return <li key={key} className="m-2 p-2 text-red-400" onClick={()=> listId(item._id)}>{item.Name}</li>;
        })}
    </ul>
  );
};

export default Search;
