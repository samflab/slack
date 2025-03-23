import { heroDescription, heroHeading } from '../constants';
import './styles/hero.scss';

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <h1 className="hero-heading">{heroHeading}</h1>
        <p className="hero-description">{heroDescription}</p>

        <button className="primary-button">Try for Free</button>

        <button className="google-sigin-btn">
          <div>
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              height="40"
              width="40"
              alt="icon"
            />
          </div>
          Sign up with google
        </button>
      </div>

      <div className="img-container">
        <img
          src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/static/hero@2x.IN.jpg"
          alt="slack-poster"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
