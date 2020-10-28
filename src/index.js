import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";
import genres from "./mocks/genres";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm={promoFilm}
        genres={genres}
        films={films}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
