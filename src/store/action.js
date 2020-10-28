export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`, // изменение фильтра по жанрам
  SHOW_MORE: `SHOW_MORE`, // получение списка фильмов в соответствии выбранным жанром.
};

export const ActionCreator = {
  changeGenre: (activeGenre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      genre: activeGenre,
    };
  },

  showMore: (filmsRendered) => {
    return {
      type: ActionType.SHOW_MORE,
      num: filmsRendered
    };
  },
};
