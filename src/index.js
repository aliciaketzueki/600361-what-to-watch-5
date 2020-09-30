import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App movieInfo = {movieInfo}/>,
    document.querySelector(`#root`)
);
