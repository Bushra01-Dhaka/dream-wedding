import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar";


const Home = () => {
    return (
        <div className="container mx-auto h-screen">
           <Navbar></Navbar>
           <Banner></Banner>
        </div>
    );
};

export default Home;