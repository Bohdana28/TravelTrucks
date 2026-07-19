
import css from "./CatalogOverlay.module.css";

export default function CatalogOverlay() {
  return (
    <div className={css.overlay}>
      <div className={css.card}>
        <div className={css.spinner}></div>

        <h2 className={css.title}>Loading trucks...</h2>

        <p className={css.text}>
          Please wait while we fetch the best
          <br />
          travel trucks for you
        </p>
      </div>
    </div>
  );
}