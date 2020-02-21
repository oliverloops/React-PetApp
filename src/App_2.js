// Using JSX components
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// Componente global
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { themehook: "peru" };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.themehook}>
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
    );
  }
}

// Renderizado
ReactDOM.render(<App />, document.getElementById("root"));
