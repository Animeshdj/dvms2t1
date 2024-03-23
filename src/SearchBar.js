import { SearchBarbar } from "./SearchBarbar";
import { SearchResults } from "./SearchResults";
import "./Searchbar.css";
import { useState } from "react";

export const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const svalueData = (data) => {
    setValue(data);
    // console.log(value);
  };

  return (
    <div className="sb-container">
      <SearchBarbar setResults={setResults} value={value} />
      <SearchResults results={results} onReceiveData={svalueData} />
    </div>
  );
};
