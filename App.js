import React, { useState } from "react";
import axios from "axios";
// import Intro fromm"./Intro""
const App = () => {
  const [search, setSearch] = useState();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {/* // <Intro/> */}
      <input
        value={search ?? ""}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
      />

      <br></br>
      {data
        .filter((items) =>
          items.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((items) => {
          return (
            <div key={items.id}>
              {" "}
              {items.id}
              {items.title}
            </div>
          );
        })}
    </>
  );
};

export default App;
