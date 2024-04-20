import React from "react";
import { Book } from "./book";
import { useFavoriteContext } from "./FavoriteContext";
import { useSearchContext } from "./SearchContext";
const url = "https://book-finder1.p.rapidapi.com/api/search";
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

const Booklist = () => {
  const { favoriteBooks, showFavorites } = useFavoriteContext();
  const { searchResults } = useSearchContext();

  let filteredBooks = showFavorites
    ? favoriteBooks
    : searchResults.length === 0
    ? (result && result.results) || []
    : (searchResults && searchResults.results) || [];

  return (
    <div className="booklist">
      {filteredBooks.map((book, index) => (
        <Book {...book} key={index} />
      ))}
    </div>
  );
};

export default Booklist;
