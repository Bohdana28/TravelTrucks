import sprite from '../../assets/icons/symbol-defs.svg'

export default function Reviews({reviews}) {
    return (
        <ul>
            {reviews.map((review) => (
                <li key={review.reviewer_name + review.comment}>
                    <div>
                        <div>
                            {review.reviewer_name.charAt(0)}
                        </div>
                        <div>
                            <p>{review.reviewer_name}</p>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star}>
                                    <use
                                        href={
                                            star <= review.reviewer_rating
                                                ? `${sprite}#icon-star`
                                                : `${sprite}#icon-star-outline`
                                        }
                                        width='16'
                                        height='16'
                                    />
                                </svg>
                            ))}
                        </div>

                    </div>
                    <p>{review.comment}</p>
                </li>
            ))}
        </ul>
    );
}