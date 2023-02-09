import roundedCitrus from "../assets/desktop/roundcitrus.jpg";
import arrowImage from "../assets/desktop/icon-arrow-down.svg"
const Header = () => {
  return (
    <section className="relative flex flex-col  justify-center items-center bg-Blue">
      <h1 className="font-Headingfront absolute lg:top-24 top-0 text-3xl w-64 lg:w-full text-center lg:text-5xl text-white font-extrabold tracking-widest">WE ARE CREATIVES</h1>
      <img src={arrowImage} alt="orange" className="absolute lg:h-20 h-12" />
      <img src={roundedCitrus} alt="orange" className="lg:w-8/12 w-full " />
    </section>
  );
};

export default Header;
