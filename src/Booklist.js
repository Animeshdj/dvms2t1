import React, { useState } from "react";
import { Book } from "./book";
import { SearchBarbar } from "./SearchBarbar";
// import Nav from "./Nav";
// import { result } from "./fetch";

const url =
  "https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8136b0e848msh69e703b229d38d0p16c7cdjsn29e3b56397fb",
    "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
  },
};

const response = await fetch(url, options);
const result = await response.json();
// console.log(result);

// const [id, setId] = useState([]);

const Booklist = ({ favoritebtn }) => {
  // console.log(favoritebtn);
  return (
    <div className="booklist">
      {result.results.map((book, index) => {
        return <Book {...book} key={index} isFavorite={false} />;
      })}
    </div>
  );
};

export default Booklist;
