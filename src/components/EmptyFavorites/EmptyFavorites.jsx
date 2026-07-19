import noCampersDesktop from "../../assets/img/nocampers/nocampersdesktop.png";
import noCampersDesktop2x from "../../assets/img/nocampers/nocampersdesktop@2x.png";
import css from './EmptyFavorites.module.css'
import { Link } from "react-router-dom";


export default function EmptyFavorites() {
  return (
    <div className={css.emptyComp}>
      <img
        src={noCampersDesktop}
        srcSet={`${noCampersDesktop2x} 2x`}
        alt="No campers found"
        className={css.image}
      />
      <h2 className={css.title}>No favorite campers yet</h2>
      <p className={css.text}>Add campers from the catalog to see them here.</p>

      <Link to="/catalog"
      className={css.button}>
          Browse campers
      </Link>
    </div>
  );
}