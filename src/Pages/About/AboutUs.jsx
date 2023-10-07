import Navbar from "../../Components/Header/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";




const AboutUs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto mt-16 ">
        <h1 className="text-center text-3xl mb-6 font-medium text-[#99627A] ">
          You deserve the best. <br></br> And Your love deserve the most
          beautiful celebration
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <div data-aos="fade-top " data-aos-delay="300">
            <img
              className="h-[500px]  mx-auto"
              src="https://i.ibb.co/9g4t5kB/founder.jpg"
              alt=""
            />
          </div>

          <div data-aos="fade-down" data-aos-delay="500" className="bg-[#E7CBCB] p-6 rounded shadow-xl">
            <h1 className="text-2xl md:text-3xl px-4 md:px-0 text-black ">
              About Dream Wedding
            </h1>
            <p className="my-4 p-4 md:p-0 text-gray-500 ">
              Dream Wedding is a wedding planning company founded in 2020 by
              Humayra, an experienced wedding planner. Dream {`Wedding's`} natural
              growth allowed us to expand and start planning destination
              weddings in different countries such as France, Italy, Spain,
              Greece, and Russia. Over the years, several of Dream {`Weeding's`}
              unique weddings have been featured in the best world wedding
              magazines, contributing to the {`company's`} reputation. <br />
              <br />
              Dream Weddings {`team's`} primary purpose is to provide the highest
              quality of service, entirely transparent and relatable to {`clients'`}
              requirements, allowing them to enjoy a stress-free wedding
              planning process. To perform our high-standard wedding planning
              services, we also rely on our staff of qualified international
              coordinators. Dream Wedding is available for worldwide wedding
              planning.
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="500" className="bg-[#E7CBCB] p-6 rounded shadow-xl">
          <h1 className="text-2xl md:text-3xl px-4 md:px-0 text-black ">
          Our Philosophy
            </h1>
            <p className="my-4 p-4 md:p-0 text-gray-500 ">
            Our primary focus is to imagine and create beautiful, meaningful and unforgettable Destination Weddings, not only for the Bride & Groom but also for their guests.
            <br /><br />
            To achieve this, we will work closely with you to deliver world-class bespoke services. There will be no question too many, and no detail spared.  Over the years, we have selected the best vendors across Asia to ensure your satisfaction & happiness and produce the event {`you've`} envisioned.
            <br /><br />
           <span className="text-[#99627A] text-xl font-semibold">{` "Details make perfection, and perfection is not a detail"`} </span>
            <br />~ Leonardo Da Vinci. 
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="500">
            <img  className="h-[500px]  mx-auto" src="https://i.ibb.co/6bZr9pZ/inspiration.jpg" alt="" />
          </div>



        </div>
      </div>
    </div>
  );
};

export default AboutUs;
