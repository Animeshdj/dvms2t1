import React from "react";
import { useFavoriteContext } from "./FavoriteContext";

export const Favoritebtn = () => {
  const { showFavorites, toggleShowFavorites } = useFavoriteContext();

  return (
    <div className="nav-3">
      <label>
        <input
          type="checkbox"
          checked={showFavorites}
          onChange={toggleShowFavorites}
        />
        Favorites
      </label>
    </div>
  );
};