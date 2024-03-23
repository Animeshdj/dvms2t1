import React from "react";

let fbtna = true;
export const Favoritebtn = (props) => {
  const { isfavoritedown } = props;
  const testfunc = () => {
    if (fbtna == true) {
      isfavoritedown(true);
      fbtna = false;
    } else {
      isfavoritedown(false);
      fbtna = true;
    }
    // isfavoritedown(1);
  };
  return (
    <div className="nav-3">
      <form>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" onClick={() => testfunc()}>
          Favorites
        </label>
      </form>
    </div>
  );
};
