import About from "./About";
import HeroPIc from "../assets/bg-big.png";
// import Preloading from "../animation/Preloading";

const Hero = () => {
  return (
    <>
      <div className="hero-main container">
        {/* <Preloading /> */}
        <div className="main-sub container">
          <div className="sub-1">
            <img src={HeroPIc} className="img-block" loading="lazy" />
          </div>
          <div className="secondary-sub">
            <h1 className="sec-main-heading">
              Hello! My name is <span>Purna B. Shrestha</span>
            </h1>
            <p className="sub-para">
              Greetings! As an enthusiastic web developer and a certified AWS
              Cloud Practitioner, I am thrilled and eager to collaborate with
              you. 😊
            </p>
            <div className="sub-2">
              <a href="#about">About me</a>
              <a href="https://www.github.com/nuastha" target="_target">
                GitHub <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <About />
    </>
  );
};

export default Hero;
