import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Content } from './Components/Content';
import { Footer } from './Components/Footer';

import {useState} from 'react';

const Nav = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Cocktails", link: "/cocktails" },
  { name: "Ingredients", link: "/ingredients" },
  { name: "Register", link: "/register" },
  { name: "Login", link: "/login" },
  
  
]

const AuthNav = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Cocktails", link: "/cocktails" },
  { name: "Ingredients", link: "/ingredients" },
  { name: "Add Cocktails", link: "/addCocktails" },
  { name: "Add Ingredients", link: "/addIngredients" },
  { name: "Log out", link: "/logout" },
]

function App() {
  const [auth,setAuth] = useState( false )

  return (
    <div className="App">
      <Header name="Cocktail Advisor" navigation={ (auth) ? AuthNav : Nav } />
      <Content authHandler = {setAuth}/>
      <Footer />
    </div>
  );
}

export default App;
