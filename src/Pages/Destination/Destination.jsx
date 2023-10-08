import { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import DestinationCard from "./DestinationCard";
import DestinationDetals from "./DestinationDetals";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUs/ContactUs";

const Destination = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("destination.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  console.log(cards);

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="grid-cols-1 md:grid-cols-2 gap-6">
          <div className="my-6 ">
            <h1 className="text-xl font-bold md:text-2xl lg:text-5xl text-center ">
              Destination Weeding In Europe
            </h1>
            <p className="md:w-[70%] my-6 mx-auto text-center">
              Not much could be more romantic than a destination wedding in
              Europe, a continent full of history, including the location of
              some of the greatest love stories of all time. Whether you dream
              of being married in a Tuscan villa, romantic cathedral or a
              medieval castle, Europe has plenty of venues and wedding packages
              for any {`couple's`} budget.
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 md;grid-cols-2 lg:grid-cols-4 px-4 gap-4">
           
            {
                cards.map(card => <DestinationCard key={card.id} card={card}></DestinationCard> )
            }

          </div>
        </div>

          <div className="container mx-auto px-4 lg:px-0 ">
                {
                     cards.map(card => <DestinationDetals key={card.id} card={card}></DestinationDetals> )
                }
          </div>

        </div>

        <ContactUs></ContactUs>

        <Footer></Footer>
      </div>
    
  );
};

export default Destination;
