import React from "react";
import data from "./search";
import Space from "./Space/Space";
const App = () => {
  console.log(data.map((items) => items.launch));
  return (
    <>
      <Space />
    </>
  );
};

export default App;
