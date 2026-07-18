import css from './CamperDescription.module.css'
import sprite from "../../assets/icons/symbol-defs.svg";
import Features from '../Features/Features';

export default function CamperDescription({details}) {
    return (
        <ul>
            <li>
                
                <h2>{details.name}</h2>
           
                <div>
                    <p>
                        <svg className={css.starsvg}>
                            <use href={`${sprite}#icon-star`}
                            width='16'
                            height='16'/>
                        </svg>{details.rating}</p>
                    <p><svg className={css.mapsvg}>
                        <use href={`${sprite}#icon-map`}
                            width='16'
                            height='16'/>
                        </svg>{details.location}</p>
                </div>
                <p>€{details.price}</p>
                <p className={css.description}>{details.description}</p>
            </li>
            <li>
                <Features details={details}  />
            </li>
        </ul>
    )
}