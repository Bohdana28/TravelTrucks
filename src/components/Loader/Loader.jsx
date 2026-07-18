import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <ClipLoader
        size={60}
        color="#E44848"
        speedMultiplier={0.9}
      />
    </div>
  );
}