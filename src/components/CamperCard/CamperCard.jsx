import { useDispatch, useSelector } from 'react-redux'
import css from './CamperCard.module.css'
import { Link } from 'react-router-dom'
import { selectFavorites } from '../../redux/favorites/selectors';
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { toggleFavorite } from '../../redux/favorites/slice';
import sprite from '../../assets/icons/symbol-defs.svg'



export default function CamperCard({ camper }) {
    const dispatch = useDispatch();

    const favorites = useSelector(selectFavorites);

    const isFavorite = favorites.some(
        item => item.id === camper.id
    );

    const reviewsCount = camper.reviews ? camper.reviews.length : 0;
    const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';





    return (
        <div className={css.card}>
            <img
                src={camper.gallery[0].thumb || camper.gallery[0]}
                alt={camper.name}
                width='250'
                className={css.cardImg}
            
            />
            <div className={css.content}>
                <div className={css.headerRow}>
                    <h2 className={css.title}>{camper.name}</h2>
                    <div className={css.priceWrapper}>
                        <p className={css.price}>€{camper.price.toFixed(2).replace(".", ",")}</p>
                        <button
                        className={css.heartBtn}
                        onClick={() => dispatch(toggleFavorite(camper))}
                        >{isFavorite ? <FaHeart className={css.heartIconFilled} /> : <FiHeart className={css.heartIconfull} />}</button>
                    </div>
                    
                </div> 

                <div className={css.metaRow}>
                    <p className={css.ratingText}><svg className={css.iconStar} width="16" height="16">
                        <use href={`${sprite}#icon-star`}/>
                    </svg>{camper.rating}({reviewsCount} {reviewsCount === 1 ? 'Review' : 'Reviews'})</p>

                    <p className={css.locationText}><svg className={css.iconStar} width="16" height="16">
                        <use href={`${sprite}#icon-map`}/>
                    </svg>{camper.location}</p>
                </div>
                
                <p className={css.description}>{camper.description}</p>

                <ul className={css.categoriesList}>
                    <li className={css.categoryItem}><svg className={css.iconStar} width="20" height="20">
                        <use href={`${sprite}#icon-petrol`}/>
                    </svg>{capitalize(camper.engine)}</li>

                    <li className={css.categoryItem}><svg className={css.iconStar} width="20" height="20">
                        <use href={`${sprite}#icon-automatic`}/>
                    </svg>{capitalize(camper.transmission)}</li>

                    <li className={css.categoryItem}><svg className={css.iconStar} width="20" height="20">
                        <use href={`${sprite}#icon-car`}/>
                    </svg>{capitalize(camper.form)}</li>
                </ul>

                <Link
                className={css.button}
                to={`/catalog/${camper.id}`}
                >
                Show more
                </Link>
            </div>

            
            
        </div>
    )
}