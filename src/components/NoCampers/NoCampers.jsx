import css from "./NoCampers.module.css";
import noCampersDesktop from "../../assets/img/nocampers/nocampersdesktop.png";
import noCampersDesktop2x from "../../assets/img/nocampers/nocampersdesktop@2x.png";

import sprite from '../../assets/icons/symbol-defs.svg'

export default function NoCampers({ onClearFilters }) {
  return (
    <div className={css.wrapper}>
      <img
        src={noCampersDesktop}
        srcSet={`${noCampersDesktop2x} 2x`}
        alt="No campers found"
        className={css.image}
        />

      <h2 className={css.title}>No campers found</h2>

      <p className={css.text}>
        We couldn't find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
          </p>

        <div className={css.actions}>
        <button
          type="button"
          className={css.clearBtn}
          onClick={onClearFilters}
        >
        <svg className={css.logosvg}>
            <use href={`${sprite}#icon-close`}
            width='24'
            height='24'/>
        </svg>Clear filters
        </button>

        <button
        type="button"
        className={css.viewBtn}
        onClick={onClearFilters}
        >
        View all campers
        </button>

      </div>  
    </div>
  );
}