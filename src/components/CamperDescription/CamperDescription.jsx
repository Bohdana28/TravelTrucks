import css from './CamperDescription.module.css'
import sprite from "../../assets/icons/symbol-defs.svg";
import Features from '../Features/Features';

export default function CamperDescription({ details }) {
    const reviewsCount = details.reviews ? details.reviews.length : 0;

    return (
        <ul className={css.listDescr}>
            <li className={css.itemDescr}>
                
                <h2 className={css.title}>{details.name}</h2>
           
                <div className={css.metaRow}>
                    <p className={css.ratingText}><svg className={css.iconStar} width="16" height="16">
                        <use href={`${sprite}#icon-star`}/>
                        </svg>{details.rating}({reviewsCount} {reviewsCount === 1 ? 'Review' : 'Reviews'})</p>
                
                    <p className={css.locationText}><svg className={css.iconStar} width="16" height="16">
                        <use href={`${sprite}#icon-map`}/>
                        </svg>{details.location}</p>
                </div>
                <p className={css.price}>€{details.price.toFixed(2).replace(".", ",")}</p>
                <p className={css.description}>{details.description}</p>
            </li>
            <li className={css.itemDescr}>
                <Features details={details}  />
            </li>
        </ul>
    )
}