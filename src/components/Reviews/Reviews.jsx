import sprite from '../../assets/icons/symbol-defs.svg';
import css from './Reviews.module.css';

export default function Reviews({ reviews }) {
    if (!reviews || reviews.length === 0) {
        return <p className={css.noReviews}>No reviews yet.</p>;
    }

    return (
        <ul className={css.reviewList}>
            {reviews.map((review) => (
                <li key={review.reviewer_name + review.comment} className={css.revItem}>
                    
                    
                    <div className={css.reviewHeader}>
                        <div className={css.avatar}>
                            <span className={css.word}>
                                {review.reviewer_name.charAt(0)}
                            </span>
                        </div>
                        
                        <div className={css.metaInfo}>
                            <p className={css.nameCust}>{review.reviewer_name}</p>
                            <div className={css.starsWrapper}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className={css.iconStar} width='16' height='16'>
                                        <use
                                            href={
                                                star <= review.reviewer_rating
                                                    ? `${sprite}#icon-star`
                                                    : `${sprite}#icon-star-outline` 
                                            }
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>

                    
                    <p className={css.comment}>{review.comment}</p>
                </li>
            ))}
        </ul>
    );
}