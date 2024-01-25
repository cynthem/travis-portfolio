import React, { useState, useEffect, useRef } from "react";
import Temp from './Tempeh';
import NoPara from './NoPara';
import Temp2 from './TempehTwo';
import Temp3 from './TempehThree';

function App() {
  return (
    <div className="App">
      <Temp />
      <NoPara />
      <Temp2 />
      <NoPara />
      <Temp3 />
    </div>
  );
}

export default App;