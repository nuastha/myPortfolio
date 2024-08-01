import AboutImg from "../assets/preview.png";

const About = () => {
  return (
    <div id="about" className="container mx-auto">
      <section className="container section">
        <div className="main-div-2">
          <div className="container">
            <h1 className="about-h1">About me</h1>
            <h2 className="about-h2">
              My name is
              <span className="text-green-200"> Purna Bahadur Shrestha</span>
            </h2>
            <p className="container about-p w-9/12">
              I am a certified
              <span className="text-red-400"> AWS Cloud Practitioner</span>. I
              am a passionate learner and I am always seeking new challenges. I
              am a maybe not quick learner but I am always willing to learn new
              skills. I am a team player and I am always willing to work with
              others.
            </p>
            <p>My Tech Stack.</p>
            <ul>
              <li>
                React <i className="fa-brands fa-react text-teal-200 "></i>
              </li>
              <li>
                Javascript <i className="fa-brands fa-js text-yellow-300"></i>
              </li>
              <li>
                Python <i className="fa-brands fa-python text-blue-400"></i>
              </li>
              <li>
                Linux <i className="fa-brands fa-linux text-gray-200"></i>
              </li>
              <li>
                AWS Cloud <i className="fa-brands fa-aws text-red-500"></i>
              </li>
            </ul>
          </div>
          <div className="secondary-div-2 mt-8">
            <a href="https://www.github.com/nuastha" target="_target">
              GitHub <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/purna-s-a7a053288/"
              target="_target"
            >
              LinkedIn <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="about-img-div">
          <img className="about-img" src={AboutImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
