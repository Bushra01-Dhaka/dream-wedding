import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Reviews = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-[60vh] bg-[#E7CBCB]">
          <div className="hero-content text-center">
            <div data-Aos="fade-down" data-aos-delay="500"  className="max-w-md">
              <h1 className="text-5xl font-bold">{`Client's`} Review</h1>
              <p className="py-6">
                Thanks to all my Clients. Your reviews are like shining stars in
                our client galaxy, lighting up our path and guiding us towards
                even greater horizons. Thank you for being the constellations of
                our success!
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div data-Aos="fade-up" data-aos-delay="500"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
            <div className="card h-[450px] bg-base-100 shadow-xl rounded">
              <figure>
                <img className="h-[200px] p-4 rounded shadow-lg" src="https://i.ibb.co/2Kcjv57/photography2.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <p>Dream Wedding made our dream come true! Every detail was pure magic, from the enchanting decor to the seamless coordination. We felt like royalty on our special day. Thank you for making it an unforgettable experience!</p>
                <p className="text-[#99627A] font-semibold">Alex & Kate <br />From Lisbon</p>
              </div>
            </div>

            <div className="card h-[450px] bg-base-100 shadow-xl rounded">
              <figure>
                <img className="h-[200px] p-4 rounded shadow-lg"
                  src="https://i.ibb.co/6bZr9pZ/inspiration.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p>Our hearts are filled with gratitude for Dream Wedding. You turned our vision into a reality with elegance and grace. It was truly a fairytale wedding. We {`couldn't`} be happier!</p>
                <p className="text-[#99627A] font-semibold">Kevin & Julia <br />From Finland</p>
              </div>
            </div>

            <div className="card h-[450px] bg-base-100 shadow-xl rounded">
              <figure>
                <img className="h-[200px] p-4 rounded shadow-lg"
                  src="https://i.ibb.co/jWhhzsW/ph1.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p>Dream Wedding exceeded our expectations. They weaved our love story into every element of our celebration, creating a day {`we'll`} cherish forever. Thank you for making our wedding dreams a reality.</p>
                <p className="text-[#99627A] font-semibold">Monica & Chandler <br />From USA</p>
              </div>
            </div>

            <div className="card h-[450px] bg-base-100 shadow-xl rounded">
              <figure>
                <img className="h-[200px] p-4 rounded shadow-lg"
                  src="https://i.ibb.co/ZS85Yds/dance.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p>Dream Wedding is synonymous with perfection. Our day was flawless, and every moment felt like a scene from a romantic movie. Thank you for creating a masterpiece out of our wedding.</p>
                <p className="text-[#99627A] font-semibold">Barry & Irish <br />From Australia</p>
              </div>
            </div>

            <div className="card h-[450px]  bg-base-100 shadow-xl rounded">
              <figure>
                <img className="h-[200px] p-4 rounded shadow-lg" 
                  src="https://i.ibb.co/ctnNPNd/photo3.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <p>Dream Wedding is simply the best! They transformed our ideas into a spectacular event that left everyone in awe. It was the wedding of our dreams, and we owe it all to them. Highly recommended!</p>
                <p className="text-[#99627A] font-semibold">Harry & Megan <br />From England</p>
              </div>
            </div>

          </div>
        </div>

        <div className="hero bg-[#E7CBCB] py-8 mt-14">
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

export default Reviews;
