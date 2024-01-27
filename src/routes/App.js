import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Link to ={`contact`}>Contact</Link>
      <Link to ={`tipper`}>Tempy</Link>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;