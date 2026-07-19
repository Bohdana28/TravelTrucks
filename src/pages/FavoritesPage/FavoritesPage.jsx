import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";
import EmptyFavorites from '../../components/EmptyFavorites/EmptyFavorites'
import css from './FavoritesPage.module.css'
import { FaHeart } from "react-icons/fa";

export default function FavoritesPage() {
    const favorites = useSelector(selectFavorites);

    return (
        <section className={css.page}>
            <div className="container">

                <div className={css.wrapper}>
                    <div className={css.mainTitle}>
                        <FaHeart className={css.heartIconFilled} />
                        <h2 className={css.title}>Favorite campers</h2>
                    </div>
                    
                    <p className={css.text}>{favorites.length} saved campers</p>
                </div>

                {favorites.length === 0
                ? <EmptyFavorites />
                : (
                    <ul className={css.list}>
                            {favorites.map(favorite => (
                                <li key={favorite.id}
                                className={css.items}>
                                    <CamperCard
                                        camper={favorite} />
                                </li>)
                            )} 
                    </ul>
                )}

            </div>
        </section>
        
    )
}