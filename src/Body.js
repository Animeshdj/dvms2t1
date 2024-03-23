import React from "react";
import "./Body.css";
import Booklist from "./Booklist";
const Body = ({ favoritebtn }) => {
  return (
    <>
      <div className="body-main">
        <Booklist favoritebtn={favoritebtn} />
      </div>
    </>
  );
};

export default Body;
