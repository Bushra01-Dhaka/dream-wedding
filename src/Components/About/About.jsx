import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto mt-24 ">
      <h1 className="text-center text-2xl mb-6 font-medium text-[#99627A] ">
        You deserve the best. <br></br> And Your love deserve the most beautiful
        celebration
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <div data-aos="fade-left " data-aos-delay="300">
          <img
            className="h-[500px]  mx-auto"
            src="https://i.ibb.co/9g4t5kB/founder.jpg"
            alt=""
          />
        </div>

        <div data-aos="fade-right" data-aos-delay="500">
          <h1 className="text-2xl md:text-3xl px-4 md:px-0 text-black font-medium">
            About Dream Wedding
          </h1>
          <p className="my-4 p-4 md:p-0 text-gray-500">
            Dream Wedding is a wedding planning company founded in 2020 by
            Humayra, an experienced wedding planner. Dream {`Wedding's`} natural
            growth allowed us to expand and start planning destination weddings
            in different countries such as France, Italy, Spain, Greece, and
            Russia. Over the years, several of Dream {`Wedding's`} unique weddings
            have been featured in the best world wedding magazines, contributing
            to the {`company's`} reputation. <br /><br />
            Dream Weddings  {`team's`} primary purpose is to provide the
            highest quality of service, entirely transparent and relatable to
            {`clients'`} requirements, allowing them to enjoy a stress-free wedding
            planning process. To perform our high-standard wedding planning services, we also rely on our staff of qualified international coordinators. Dream Wedding is available for worldwide wedding planning.
          </p>
          <Link to='/about'><button className="btn mx-4 lg:mx-0 mt-4 w-[140px] h-[44px] bg-[#99627A] hover:bg-[#643843] rounded text-white font-medium ">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
