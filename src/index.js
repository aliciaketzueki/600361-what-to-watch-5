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

const reviews = [
  {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9
  },
  {
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8
  },
  {
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    author: `Amanda Greever`,
    date: `November 18, 2015`,
    rating: 8
  },
  {
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    author: `Matthew Lickona`,
    date: `December 20, 2016`,
    rating: 7.2
  },
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
    rating: 7.6
  },
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
    rating: 7
  },
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
    rating: 7
  },
];

ReactDOM.render(
    <App movieInfo={movieInfo} genres={genres} moviesList={moviesList} reviews={reviews} />,
    document.querySelector(`#root`)
);
