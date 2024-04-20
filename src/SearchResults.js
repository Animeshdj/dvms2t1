import React, { useState } from "react";
import { useSearchContext } from "./SearchContext";
import "./SearchResults.css";

export const SearchResults = ({ onReceiveData }) => {
  const { searchResults } = useSearchContext();

  if (
    !searchResults ||
    !searchResults.results ||
    !Array.isArray(searchResults.results)
  ) {
    return null; // or render a loading state or an empty message
  }
  const handleChange = (e) => {
    // console.log(e);
    // setValue(() => e);
    // setSvalue(e);
    // console.log(svalue);
    onReceiveData(e);
  };
  return (
    <div className="results-list">
      {searchResults.results.map((result, id) => {
        // const ChangeValue = ({ result }) => {
        //   //   props.resultClicked(result.title);
        //   console.log({ result });
        // };
        return (
          <a
            href="#"
            key={id}
            className="search-result"
            onClick={() => handleChange(result.title)}
          >
            {result.title}
          </a>
        );
      })}
    </div>
  );
};
