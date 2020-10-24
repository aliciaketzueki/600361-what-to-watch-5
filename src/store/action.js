export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`, // изменение фильтра по жанрам
  GET_MOVIES_LIST: `GET_MOVIES_LIST`, // получение списка фильмов в соответствии выбранным жанром.
};

export const ActionCreator = {
  changeGenre: (activeGenre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      genre: activeGenre,
    };
  },
};
