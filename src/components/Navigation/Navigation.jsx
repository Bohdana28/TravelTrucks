
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'

export default function Navigation() {
    return (
        <ul className={css.mainlist}>
            <li className={css.item} >
                <NavLink to='/'
                    className={({ isActive }) =>
                    `${css.link} ${isActive ? css.active : ""}`
                    }
                >Home</NavLink>
            </li>
            <li className={css.item}>
                <NavLink
                to="/catalog"
                className={({ isActive }) =>
                `${css.link} ${isActive ? css.active : ""}`
                }   
                >
                Catalog
                </NavLink>
                
            </li>
   
            
            
        </ul>
    )
}