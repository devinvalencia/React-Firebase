import {
  NavLink
} from "react-router-dom";
import Home from "./Pages/Home";
import Article from "./Pages/Article";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const Header = () => {
  return (
    <div>
      <nav>
        <h1>My Articles</h1>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
