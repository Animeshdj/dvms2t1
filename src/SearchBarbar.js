import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBarbar.css";
import { useSearchContext } from "./SearchContext";
import { SearchResults } from "./SearchResults";

export const SearchBarbar = ({ setResults, value }) => {
  const { setSearchResults } = useSearchContext();
  const [input, setInput] = useState("");
  const [searchBarResults, setSearchBarResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://book-finder1.p.rapidapi.com/api/search?title=${input}&results_per_page=50&page=1`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8136b0e848msh69e703b229d38d0p16c7cdjsn29e3b56397fb",
          "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      return data;
    };

    if (input) {
      fetchData().then((data) => {
        setSearchBarResults(data);
        // console.log(searchBarResults);
      });
    }
  }, [input]);

  useEffect(() => {
    setSearchResults(searchBarResults);
  }, [searchBarResults]);

  const textChange = (value) => {
    setInput(value);
    // searchbarResults(value);
  };

  // const searchbarResults = (value) => {
  //   const results = response.filter((book) => {
  //     return (
  //       value && book && book.title.toLowerCase().includes(value.toLowerCase())
  //     );
  //   });
  //   setResults(results);
  //   setSearchResults(results);
  //   // console.log(results);
  // };

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
