import React, { useState } from "react";
import "./App.css";
import CarsList from "./component/CarsList";
import Curency from "./component/Curency";

function App() {

  return (
    <div className="App">
      {/* <CarsList topCars={topCars}/> */}
      <Curency money={money}/>
    </div>
  );
}

export default App;
