import React, { createContext, useState, useContext } from "react";

const FavoriteContext = createContext();

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorite = (book) => {
    const index = favoriteBooks.findIndex((b) => b.title === book.title);
    if (index === -1) {
      setFavoriteBooks([...favoriteBooks, book]);
    } else {
      const updatedFavorites = [...favoriteBooks];
      updatedFavorites.splice(index, 1);
      setFavoriteBooks(updatedFavorites);
    }
  };

  const toggleShowFavorites = () => {
    setShowFavorites((prevState) => !prevState);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteBooks,
        toggleFavorite,
        showFavorites,
        toggleShowFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
