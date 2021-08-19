import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Content } from './Components/Content';
import { Footer } from './Components/Footer';

import {useState} from 'react';

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

//Library creation
library.add(fab, fas);

const Nav = [
  { name: "Home", link: "/" , icon:"home"},
  { name: "About", link: "/about" , icon:"user-friends"},
  { name: "Cocktails", link: "/cocktails", icon:"cocktail"},
  { name: "Ingredients", link: "/ingredients", icon:"lemon" },
  { name: "Places", link: "/places", icon:"map-marked" },
  { name: "Register", link: "/register", icon:"user-plus" },
  { name: "Login", link: "/login", icon:"sign-in-alt" },
  
]

const AuthNav = [
  { name: "Home", link: "/" , icon:"home"},
  { name: "About", link: "/about" , icon:"user-friends"},
  { name: "Cocktails", link: "/cocktails" , icon:"cocktail"},
  { name: "Ingredients", link: "/ingredients", icon:"lemon" },
  { name: "Places", link: "/places" , icon:"map-marked"},
  { name: "Admin", link: "",  icon:"user-cog",
    submenu:[
      { name: "Add Cocktails", link: "/addCocktails", icon:"glass-cheers" },
      { name: "Add Ingredients", link: "/addIngredients", icon:"lemon" },
      { name: "Add Places", link: "/addPlaces", icon:"home" },
    ]
  },
  { name: "Log out", link: "/logout", icon:"sign-out-alt" },
]

function App() {
  const [auth,setAuth] = useState( false )
  const [searchHandler ,setSearchHandler] = useState( false )

  return (
    <div className="App">
      <Header name="Cocktail Advisor" navigation={ (auth) ? AuthNav : Nav } searchHandler = {setSearchHandler} />
      <Content authHandler = {setAuth}/>
      <Footer />
    </div>
  );
}

export default App;
