import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Header/Navbar";


const Gallery = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto">

                <div className="my-24 max-w-md mx-auto">
                    <h1 className="text-center text-2xl font-bold text-[#643843] lg:text-3xl">Captured Love: Wedding Photo Gallery</h1>
                    <p className="text-center py-6">Your Love Deserves the Finest Celebration</p>
                </div>
                
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 lg:px-0">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/2Kcjv57/photography2.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/9y9wG3D/elegent-cover.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/WHcpvxb/table2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/6bZr9pZ/inspiration.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/HY741t5/mr-mrs.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/jkRbN03/family.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/jWhhzsW/ph1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/wK2kLCk/table1.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/jVqkrTH/song1.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/R75gxPc/cake2.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/ZS85Yds/dance.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/KVVrmQC/photo2.jpg" alt=""/>
        </div>
    </div>
</div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Gallery;