import Img from "../assets/nepal.gif";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="logo">
          <a href="/">
            <img src={Img} width={40} alt="logo" />
          </a>
        </div>
        <div className="navbar">
          <ul className="navItem">
            <li>
              <a href="/" className="p-5">
                home
              </a>
            </li>
            <li>
              <a href="#about" className="p-5">
                about me
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Header;
