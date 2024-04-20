import { SearchBarbar } from "./SearchBarbar";
import { SearchResults } from "./SearchResults";
import "./Searchbar.css";
import { useState } from "react";

export const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const onReceiveData = (data) => {
    setValue(data);
    // console.log(value);
  };

  return (
    <div className="sb-container">
      <SearchBarbar Results={results} value={value} />
      <SearchResults results={results} onReceiveData={onReceiveData} />
    </div>
  );
};
