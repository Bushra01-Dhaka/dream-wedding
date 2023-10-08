import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from 'prop-types';

const DestinationCard = ({ card }) => {
  const { country_name, images, average_cost } = card;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div data-Aos="fade-down" data-aos-delay="500" className="card w-full lg:w-[300px] bg-base-100 shadow-xl rounded">
        <figure>
          <img className=""
            src={images.image_1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
             <h1 className="text-center">{country_name}</h1>
             <p className="text-center">Budget: {average_cost}</p>
        </div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
    card: PropTypes.object.isRequired
}

export default DestinationCard;
