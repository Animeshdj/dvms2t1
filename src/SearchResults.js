import React, { useState } from "react";
import "./SearchResults.css";

export const SearchResults = ({ results, setValue, onReceiveData }) => {
  const [svalue, setSvalue] = useState("");
  const handleChange = (e) => {
    // console.log(e);
    // setValue(() => e);
    // setSvalue(e);
    // console.log(svalue);
    onReceiveData(e);
  };
  return (
    <div className="results-list">
      {results.map((result, id) => {
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
