import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from "react-redux";


import rootReducer from "./store/reducers/root-reducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import {AuthorizationStatus} from "./utils/const";
import {fetchFilms, fetchPromoFilm, fetchReviews, fetchFilm} from "./store/api-actions";

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
  rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
    )
);


Promise.all([
  store.dispatch(fetchFilms()),
  store.dispatch(fetchPromoFilm()),
  // store.dispatch(fetchReviews()),
  // store.dispatch(fetchFilm()),
])
.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
})
