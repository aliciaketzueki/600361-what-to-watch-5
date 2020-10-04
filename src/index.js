import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const movieInfo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

const genres = [
  {name: `All genres`, active: true},
  {name: `Crime`, active: false},
  {name: `Comedies`, active: false},
  {name: `Documentary`, active: false},
  {name: `Dramas`, active: false},
  {name: `Horror`, active: false},
  {name: `Kids & Family`, active: false},
  {name: `Romance`, active: false},
  {name: `Sci-Fi`, active: false},
  {name: `Thrillers`, active: false}
];

const moviesList = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    name: `Bohemian Rhapsody`,
    src: `bohemian-rhapsody.jpg`,
  },
  {
    name: `Macbeth`,
    src: `macbeth.jpg`,
  },
  {
    name: `Aviator`,
    src: `aviator.jpg`
  },
  {
    name: `We need to talk about Kevin`,
    src: `we-need-to-talk-about-kevin.jpg`,
  },
  {
    name: `What We Do in the Shadows`,
    src: `what-we-do-in-the-shadows.jpg`,
  },
  {
    name: `Revenant`,
    src: `revenant.jpg`,
  },
  {
    name: `Johnny English`,
    src: `johnny-english.jpg`
  },
  {
    name: `Shutter Island`,
    src: `shutter-island.jpg`
  },
  {
    name: `Pulp Fiction`,
    src: `pulp-fiction.jpg`
  },
  {
    name: `No Country for Old Men`,
    src: `no-country-for-old-men.jpg`
  },
  {
    name: `Snatch`,
    src: `snatch.jpg`
  },
  {
    name: `Moonrise Kingdom`,
    src: `moonrise-kingdom.jpg`
  },
  {
    name: `Seven Years in Tibet`,
    src: `seven-years-in-tibet.jpg`
  },
  {
    name: `Midnight Special`,
    src: `midnight-special.jpg`
  },
  {
    name: `War of the Worlds`,
    src: `war-of-the-worlds.jpg`
  },
  {
    name: `Dardjeeling Limited`,
    src: `dardjeeling-limited.jpg`
  },
  {
    name: `Orlando`,
    src: `orlando.jpg`
  },
  {
    name: `Mindhunter`,
    src: `mindhunter.jpg`,
  },
  {
    name: `Midnight Special`,
    src: `midnight-special.jpg`
  }
];

ReactDOM.render(
    <App movieInfo={movieInfo} genres={genres} moviesList={moviesList} />,
    document.querySelector(`#root`)
);
