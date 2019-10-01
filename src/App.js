import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Cora",
      animal: "dog",
      breed: "Cocker"
    }),
    React.createElement(Pet, {
      name: "Lucas",
      animal: "duck",
      breed: "Black"
    })
  ]);

render(React.createElement(App), document.getElementById("root"));
