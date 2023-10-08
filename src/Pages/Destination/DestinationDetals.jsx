import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const DestinationDetals = ({ card }) => {
    useEffect(() => {
        Aos.init();
      }, []);
      
  const { country_name, description, images } = card;
  return (
    <div>
      <h1 className="text-xl lg:text-4xl text-center py-16 px-4 lg:px-0 ">
        Destination Wedding in {country_name}
      </h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <div data-Aos="fade-left" data-aos-delay="500">
          <img
            className="h-[500px] rounded mx-auto"
            src={images.image_1}
            alt=""
          />
        </div>
        <div data-Aos="fade-right" data-aos-delay="500" className="bg-[#E7CBCB] p-6 rounded shadow-xl">
            <p className="my-4 p-4 md:p-0 text-gray-500 ">{description}</p>
        </div>

      </div>
    </div>
  );
};

DestinationDetals.propTypes = {
    card: PropTypes.object.isRequired
}

export default DestinationDetals;
