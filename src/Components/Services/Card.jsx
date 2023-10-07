import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PropTypes from 'prop-types';



const Card = ({ card }) => {
  const { service_title, service_description, cover_photo } = card;

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div>
      <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"  className="card w-[500px] mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] w-full"
            src={cover_photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service_title}</h2>
          <p>{service_description}</p>
          <div className="card-actions">
            <Link><p className="font-bold text-lg text-[#99627A]">Details</p></Link>
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
