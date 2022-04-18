import React, { useEffect, useState } from "react";
import Movies from "./CloneIMBD/Movies";
import Details from "./CloneIMBD/Details";
import Search from "./CloneIMBD/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Search />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
