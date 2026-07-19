import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCurrentCamper, selectError, selectLoading } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/campers/operations";
import Gallery from "../../components/Gallery/Gallery";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import CamperDescription from "../../components/CamperDescription/CamperDescription";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import css from './CamperPage.module.css'


export default function CamperPage() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const currentCamper = useSelector(selectCurrentCamper);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);


    useEffect(() => {
        dispatch(fetchCamperById(id))
    }, [dispatch, id]);

    if (isLoading) return <Loader />;
    if (isError) return <Error onRetry={() => window.location.reload()} />;
    if (!currentCamper) return <p>Not Found</p>;

    return (
        <section className={css.camperPage}>
            <div className="container">
                <div className={css.pageWrapper}>
                    <Gallery key={currentCamper.id} gallery={currentCamper.gallery} name={currentCamper.name} /> 
                    <CamperDescription details={currentCamper} />
                    <div className={css.wrapper}>
                        <h2 className={css.title}>Reviews</h2>
                        <div className={css.reviewPart}>
                        <Reviews reviews={currentCamper.reviews} />
                        <BookingForm />
                        </div>

                    </div>
                    
                </div>
                
            </div>
            
        </section>
    )


}