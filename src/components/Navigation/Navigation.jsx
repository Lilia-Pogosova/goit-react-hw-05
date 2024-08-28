import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";


const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
    return (
        <nav className={css.navigation}>
            <NavLink to="/" className={getLinkClass}>
                
                &nbsp;Home
            </NavLink>
            <NavLink to="/movies" className={getLinkClass}>
                
                &nbsp;Movies
            </NavLink>
        </nav>
    );
};

export default Navigation;