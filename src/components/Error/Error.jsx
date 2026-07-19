import { MdErrorOutline } from "react-icons/md";
import css from "./Error.module.css";

export default function Error({ onRetry }) {
  return (
    <div className={css.container}>
      <MdErrorOutline className={css.icon} />

      <h2 className={css.title}>Something went wrong</h2>

      <p className={css.text}>
        We couldn't load the campers. Please try again.
      </p>

      {onRetry && (
        <button className={css.button} onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}

