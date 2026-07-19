import css from './LoadMoreButton.module.css'

export default function LoadMoreButton({ onClick }) {
  return (
    <button
      className={css.loadMorebtn}
      onClick={onClick}>
      Load More
    </button>
  );
}