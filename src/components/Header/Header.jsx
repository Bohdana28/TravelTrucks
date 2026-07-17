import Navigation from '../Navigation/Navigation.jsx';
import { Link } from "react-router-dom";
import css from './Header.module.css'
import sprite from "../../assets/icons/symbol-defs.svg";




export default function Header() {
    return (
        <header className={css.header}>
            <div className='container'>
                <nav className={css.navigation}>
                    <Link
                        className={css.mainLogo}
                        to='/'>
                        <svg className={css.logosvg}>
                            <use href={`${sprite}#icon-logo`} />
                        </svg>
                        

                        
                    </Link>
                    <Navigation/>

                </nav>

            </div>
            
            
        </header>
    )

}