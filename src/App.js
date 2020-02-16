import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// Componente global
const App = () => {
  // Uso de props
  return React.createElement(
    //CreateElement() para crear un componente.
    "div",
    { id: "cool-attribute" },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Tobias",
        animal: "Dog",
        kind: "Schnauzer"
      }),
      React.createElement(Pet, {
        name: "Zyko",
        animal: "Dog",
        kind: "Chow Chow"
      }),
      React.createElement(Pet, {
        name: "Froggie",
        animal: "Frog",
        kind: "Green savage"
      })
    ]
  );
};

// Renderizado
render(React.createElement(App), document.getElementById("root"));
