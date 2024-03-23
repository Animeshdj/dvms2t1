import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBarbar.css";
import { useSearchContext } from "./SearchContext";
import { SearchResults } from "./SearchResults";

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
const x = (json) => {
  const result = Array();
  if (json) {
    for (var i = 0; i < json.length; i++) {
      result.push(json[i]);
    }
  }
  return result;
  // console.log(result);
};

export const SearchBarbar = ({ setResults, value }) => {
  const { setSearchResults } = useSearchContext();

  const response = x(result.results);
  // console.log(response);
  React.useEffect(() => {
    setInput(value);
  }, [value]);
  const [input, setInput] = useState("");

  const textChange = (value) => {
    setInput(value);
    searchbarResults(value);
  };

  const searchbarResults = (value) => {
    const results = response.filter((book) => {
      return (
        value && book && book.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(results);
    setSearchResults(results);
    // console.log(results);
  };

  return (
    <div className="searchbar-bar">
      <FaSearch id="search-icon" />
      <input
        placeholder="Enter book title..."
        className="searchbar-input"
        value={input}
        onChange={(e) => textChange(e.target.value)}
        type="text"
      />
    </div>
  );
};
