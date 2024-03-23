import React from "react";
import { useFavoriteContext } from "./FavoriteContext";

export const Favoritebtn = () => {
  const { showFavorites, toggleShowFavorites } = useFavoriteContext();

  return (
    <div className="nav-3">
      <form>
        <label>
          <input
            type="checkbox"
            checked={showFavorites}
            onChange={toggleShowFavorites}
          />
          <div className="favorite-btn">Favorites</div>
        </label>
      </form>
    </div>
  );
};
