//импортируем .svg картинки как компоненты Реакт
import * as React from "react";
import { ReactComponent as StarWarsLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Characters from "../../data/characters.json";
import Plantes from "../../data/starships.json";
import Starships from "../../data/starships.json";

//массив данных ссылок
const filter = createFilterOptions();
const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];

export const Header = ({ fan }) => {
  const [value, setValue] = React.useState(null);
  let names = [...Characters, ...Plantes, ...Starships];

  //console.log(names);
  return (
    <header>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <StarWarsLogoSVG />
      <div className="search-layout">
        <IconSearchSVG className="search-icon" />
        <Autocomplete
          id="free-solo-demo"
          className="header-input"
          freeSolo
          options={names.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Search StarWars" />
          )}
        />
        {/* <input placeholder="Search Star Wars" type="text" /> */}
        <div style={{ color: "white", paddingTop: "1rem" }}>
          I am fan of: {fan}
        </div>
      </div>
    </header>
  );
};
