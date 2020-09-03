import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  // return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Bosco",
  //       animal: "Dog",
  //       breed: "Terrier",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Meowth",
  //       animal: "Cat",
  //       breed: "House Cat",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Spearow",
  //       animal: "Bird",
  //       breed: "Sparrow",
  //     }),
  //   ]);
  // };
  const theme = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
