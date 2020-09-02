import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

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
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
