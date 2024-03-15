import "../../sass/layout/hero.scss";
import Button from "../UI/Button";
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero-title">
          <h2>Explore, Shop, Discover More!</h2>
          <p>
            Welcome to the world of endless possibilities! Discover new trends
            with us, find your favorite products and shop with stunning
            discounts. Meet us now for unique products and an unforgettable
            shopping experience!
          </p>
          <Button className="btn-normal">Discover</Button>
        </div>
        <div className="hero-img">
          <img src="img/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
