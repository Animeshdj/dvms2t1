import { Favoritebtn } from "./Favoritebtn.js";
import { SearchBar } from "./SearchBar.js";
import { useState } from "react";

const Nav = () => {
  const [favoritebtn, setFavoritebtn] = useState();
  const onReceiveDatafbtn = (e) => {
    setFavoritebtn(e);
    // console.log(favoritebtn);
  };
  return (
    <nav className="nav-bar">
      <div className="nav-1">
        <a href="https://animeshdj.github.io/dvms2t1/">HOME</a>
      </div>
      <div className="nav-2">
        <SearchBar />
      </div>
      <Favoritebtn isfavoritedown={onReceiveDatafbtn} />
    </nav>
  );
};

export default Nav;
