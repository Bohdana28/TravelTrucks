import { ClipLoader } from "react-spinners";
import css from "./CatalogOverlay.module.css";

export default function CatalogOverlay() {
  return (
    <div className={css.overlay}>
      <div className={css.card}>
        <ClipLoader
          size={48}
          color="#475467"
          speedMultiplier={0.9}
        />

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