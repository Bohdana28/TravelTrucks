import { Link } from "react-router-dom";
import css from "./HomePage.module.css";


export default function HomePage() {
  return (
      <section className={css.hero}>
          <div className="container">
        <div className={css.homePage}>
          <div className={css.taxtAndtitle}>
              <h1 className={css.mainTitle}>Campers of your dreams</h1>
              <p className={css.text}>You can find everything you want in our catalog</p>
          </div>
                
                <Link to='/catalog'
                className={css.viewbtn}
                >View Now</Link>
              </div>
          </div>
          

    </section>
  );
}