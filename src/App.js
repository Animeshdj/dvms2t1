import "./App.css";
import Body from "./Body.js";
import Nav from "./Nav.js";
import { useState } from "react";

function App() {
  const [favoritebtn, setFavoritebtn] = useState();
  const somename = (e) => {
    setFavoritebtn(e);
    console.log(somename);
  };
  return (
    <>
      <Nav onReceiveDatafbtn={somename} />
      <Body favoritebtn={favoritebtn} />
    </>
  );
}

export default App;
