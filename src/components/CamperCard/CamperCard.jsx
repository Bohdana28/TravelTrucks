import { useDispatch, useSelector } from 'react-redux'
import css from './CamperCard.module.css'
import { Link } from 'react-router-dom'
import { selectFavorites } from '../../redux/favorites/selectors';
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { toggleFavorite } from '../../redux/favorites/slice';



export default function CamperCard({ camper }) {
    const dispatch = useDispatch();

    const favorites = useSelector(selectFavorites);

    const isFavorite = favorites.some(
        item => item.id ===camper.id
    )





    return (
        <div className={css.card}>
            <img
                src={camper.gallery[0].thumb}
                alt={camper.name}
                width='250'
                className={css.cardImg}
            
            />
            <div className={css.content}>
                <div className={css.namePrice}>
                    <h2>{camper.name}</h2>
                    <div className={css.priceWrapper}>
                        <p>€{camper.price}</p>
                        <button
                        className={css.heartBtn}
                        onClick={() => dispatch(toggleFavorite(camper))}
                        >{isFavorite ? <FaHeart/> : <FiHeart/>}</button>
                    </div>
                    
                </div> 

                <div>
                    <p>{camper.rating}</p>
                    <p>{camper.location}</p>
                </div>
                <p className={css.description}>{camper.description}</p>
                <ul>
                    <li>{camper.engine}</li>
                    <li>{camper.transmission}</li>
                    <li>{camper.form}</li>
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