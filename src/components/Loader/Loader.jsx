import { ClipLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <ClipLoader
        size={60}
        color="#6d7b75"
        speedMultiplier={0.9}
      />
    </div>
  );
}