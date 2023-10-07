import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar";
import Services from "../../Components/Services/Services";


const Home = () => {
    return (
        <div className="container mx-auto">
          <div className="h-screen">
          <Navbar></Navbar>
           <Banner></Banner>
          </div>
        
          <About></About>
          <Services></Services>

          <Footer></Footer>

        </div>
    );
};

export default Home;