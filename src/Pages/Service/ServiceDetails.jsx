import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";

const ServiceDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  console.log(card);

  useEffect(() => {
    Aos.init();
  }, []);

  const {
    service_title,
    service_description,
    cover_photo,
    images,
    details_description,
  } = card;
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-[80vh] bg-base-200">
          <div className="hero-content text-center">
            <div data-aos="fade-top " data-aos-delay="300" className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl text-[#643843] font-bold">
                {service_title}
              </h1>
              <p className="py-6 "> {service_description} </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          <div data-aos="fade-top " data-aos-delay="300">
            <img
              className="h-[500px] w-[100%] mx-auto"
              src={cover_photo}
              alt=""
            />
          </div>
          <div>
            <p
              data-aos="fade-down "
              data-aos-delay="500"
              className="text-gray-500 leading-8 px-4 lg:px-0"
            >
              {details_description}
            </p>
          </div>
        </div>

        <div className="container mx-auto my-28">
          <h1
            data-aos="fade-up "
            data-aos-delay="500"
            className="text-3xl text-center text-[#643843]"
          >
            HAVE A LOOK AT OUR MOST INSPIRING <br />
            {service_title} PROJECTS SO FAR
          </h1>

          <div
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0 gap-6 my-8"
          >
            <img
              className="h-[400px] w-[500px] rounded"
              src={images.image_1}
              alt=""
            />
            <img
              className="h-[400px] w-[500px] rounded"
              src={images.image_2}
              alt=""
            />
            <img
              className="h-[400px] w-[500px] rounded"
              src={images.image_3}
              alt=""
            />
          </div>
        </div>

        <div className="hero bg-[#E7CBCB] py-8">
          <div className="hero-content container mx-auto text-center">
            <div data-aos="fade-left " data-aos-delay="500" className="max-w-md">
              <h1 className="text-center text-3xl">
                Are You Looking for Destination Wedding Plan?
              </h1>
              <Link to="/destination">
                <button className="btn my-6 text-[#643843]">
                  Explore our packages
                </button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ServiceDetails;
