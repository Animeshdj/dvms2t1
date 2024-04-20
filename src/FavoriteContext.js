import React, { createContext, useState, useContext, useEffect } from "react";

const FavoriteContext = createContext();

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favoriteBooks, setFavoriteBooks] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteBooks));
  }, [favoriteBooks]);

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
