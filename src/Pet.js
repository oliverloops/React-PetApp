import React from "react";
// Este es un componente particular (y esta modularizado)

export default function Pet({ name, animal, kind }) {
  //puede usarse la variable "props" o usar destructuring
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name), //se puede usar "props.name"
    React.createElement("h2", {}, animal), //se puede usar "props.animal"
    React.createElement("p", {}, kind) //se puede usar "props.class"
  ]);
}
