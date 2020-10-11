import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";
import genres from "./mocks/genres";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      movieInfo={movieInfo}
      genres={genres}
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
