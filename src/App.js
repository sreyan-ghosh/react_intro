import React from 'react';
import {render} from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bosco",
      animal: "Dog",
      breed: "Terrier",
    }),
    React.createElement(Pet, {
      name: "Meowth",
      animal: "Cat",
      breed: "House Cat",
    }),
    React.createElement(Pet, {
      name: "Spearow",
      animal: "Bird",
      breed: "Sparrow",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
