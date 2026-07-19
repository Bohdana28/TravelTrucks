import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { useEffect, useState, useRef } from "react";
import { selectCampers, selectError, selectLoading, selectHasMore, selectOverlayLoading, } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import CamperList from "../../components/CamperList/CamperList";
import css from './CatalogPage.module.css'
import Filters from "../../components/Filters/Filters";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import Error from '../../components/Error/Error';
import { selectFilters } from "../../redux/filters/selectors";
import NoCampers from "../../components/NoCampers/NoCampers";
import CatalogOverlay from "../../components/CatalogOverlay/CatalogOverlay";

export default function CatalogPage() {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const filtersRef = useRef(null);
   

    const campers = useSelector(selectCampers);
    const isLoading = useSelector(selectLoading);
    const isOverlayLoading = useSelector(selectOverlayLoading);
    const isError = useSelector(selectError);
    const filters = useSelector(selectFilters);
    const hasMore = useSelector(selectHasMore);

    useEffect(() => {
    dispatch(fetchCampers({ page: 1 }));
    }, [dispatch]);

    useEffect(() => {
    if (page > 1) {
        dispatch(
        fetchCampers({
            ...filters,
            page,
        })
        );
    }
    }, [dispatch, page, filters]);

    const handleClearFilters = () => {
  filtersRef.current?.clearFilters();
    };
    
    if (isLoading && campers.length === 0 && !isOverlayLoading) {
  return <Loader />;
}
    
    
    return (
        <section className={css.catalogSection}>
            {isOverlayLoading && <CatalogOverlay />}
            {isError && <Error onRetry={() => window.location.reload()}/>}
            <Filters
                ref={filtersRef}
            onSearch={(newFilters) => {
                setPage(1);
                dispatch(
                fetchCampers({
                    ...newFilters,
                    page: 1,
                })
                );
            }}
            />
            <div className={css.content}>
                {!isLoading && !isError && campers.length === 0 && (
                    <NoCampers onClearFilters={handleClearFilters}/>
                )}

                {campers.length > 0 && (
                    <>
                    <CamperList campers={campers} />

                    {hasMore && (
                        <LoadMoreButton
                        onClick={() => setPage(prev => prev + 1)}
                        />
                    )}
                    </>
                )}
            </div>
            
            

        </section>
    )

}