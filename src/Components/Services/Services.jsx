import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Services = () => {
    const cards = useLoaderData();
    console.log(cards);
    return (

        <div className="container mx-auto mt-24">
            <h1 className="text-center text-3xl mb-12">Our Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {
                cards.map(card => <Card key={card.id} card={card}></Card>)
               }

            </div>
        </div>
    );
};

export default Services;