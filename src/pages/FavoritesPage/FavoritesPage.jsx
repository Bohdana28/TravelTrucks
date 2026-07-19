import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import CamperCard from "../../components/CamperCard/CamperCard";
import EmptyFavorites from '../../components/EmptyFavorites/EmptyFavorites'

export default function FavoritesPage() {
    const favorites = useSelector(selectFavorites);

    return (
        <section>
            {favorites.length === 0 ? <EmptyFavorites />
                : favorites.map(favorite => (
                    <CamperCard key={favorite.id}
                        camper={favorite} />
                ))}
        </section>
    )
}