import { useEffect, useState } from "react";
import css from "./Gallery.module.css";

export default function Gallery({ gallery, name }) {
  const [activeImage, setActiveImage] = useState(gallery[0]);

  
  useEffect(() => {
    setActiveImage(gallery[0]);
  }, [gallery]);

  return (
    <div className={css.gallery}>
      <div className={css.mainImageWrapper}>
        <img
          className={css.mainImage}
          src={activeImage.original}
          alt={name}
        />
      </div>

      <ul className={css.thumbnailList}>
        {gallery.map((image) => (
          <li key={image.thumb}>
            <img
              className={`${css.thumbnail} ${
                activeImage.thumb === image.thumb ? css.active : ""
              }`}
              src={image.thumb}
              alt={name}
              onClick={() => setActiveImage(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}