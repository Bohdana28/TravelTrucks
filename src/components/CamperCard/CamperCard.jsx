import css from './CamperCard.module.css'
import { Link } from 'react-router-dom'


export default function CamperCard({ camper }) {
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
                    <p>€{camper.price}</p>
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