import {createFilmCard} from "../utils/utils";

const filmNames = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];

export const films = createFilmCard(filmNames);
export const userFilms = createFilmCard(filmNames.slice(2, 5));
export const promoFilm = createFilmCard([filmNames[3]])[0];
