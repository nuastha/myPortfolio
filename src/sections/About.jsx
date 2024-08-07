import AboutImg from "../assets/preview.png";

const About = () => {
  const skills = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "Git",
    "Github",
    "Figma",
    "AWS",
    "Linux",
  ];
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
            {skills.map((data) => {
              return (
                <li key={data.id} className="about-li">
                  {data}
                </li>
              );
            })}

            {/* <ul>
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
            </ul> */}
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
      <div className="columns-2 ml-8 rounded-md mb-10">
        <div className="text-right">
          <h3 className="text-6xl mb-5 text-blue-500">Contact Us</h3>
          <p>fill the form</p>
          <p>for get more info about the dream to reality </p>
          <p>for business leads and website.</p>
          <p> thank you for your visiting.</p>
        </div>
        <iframe
          src="https://ggrelativity.xyz/lead-form/c4ca4238a0b923820dcc509a6f75849b"
          width="100%"
          height="500px"
          frameBorder="0"
          className="rounded-lg resize-none "
          sandbox="allow-forms allow-modals"
          allow="none"
          referrerPolicy="no-referrer"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
