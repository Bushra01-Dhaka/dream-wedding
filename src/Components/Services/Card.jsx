import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from 'prop-types';



const Card = ({ card }) => {
  const {id, service_title, service_description, cover_photo, average_price } = card;

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div>
      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"  className="card lg:w-[500px] mx-auto bg-base-100 shadow-xl px-4 lg:px-0">
        <figure>
          <img className="h-[300px] w-full"
            src={cover_photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{service_title}</h2>
          <p>{service_description}</p>
          <p className="font-medium">Price: {average_price} <span></span></p>
          <div className="card-actions">
            <Link to={`/services/${id}`}><p className="font-bold text-lg text-[#99627A]">Details</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card;
