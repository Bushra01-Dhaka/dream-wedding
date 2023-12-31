import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 60000, easing: (t) => t };

const Banner = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div>
      <div className="hero min-h-[40vh] bg-[#E7CBCB]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-[#643843]">Dream Wedding</h1>
            <p className="py-6">
            Crafting Dreams into Unforgettable Moments {`-`} Your Perfect Wedding, Our Passionate Planning.
            </p>
          </div>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img
            src="https://i.ibb.co/4mwYGnV/flower-gate.jpg"
            className="w-full h-[80vh] object-cover"
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img
            src="https://i.ibb.co/mqK7dCF/table.jpg"
            className="w-full  h-[80vh] object-cover"
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img
            src="https://i.ibb.co/HY741t5/mr-mrs.jpg"
            className="w-full  h-[80vh] object-cover"
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img
            src="https://i.ibb.co/6bZr9pZ/inspiration.jpg"
            className="w-full  h-[80vh] object-cover"
          />
        </div>
      </div>




    </div>
  );
};

export default Banner;

// trial

// const Banner = () => {

//   return (
//     <div>
//       <div className="carousel  w-full">
//         <div id="item1" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/4mwYGnV/flower-gate.jpg"
//             className="w-full h-[90vh] object-cover"
//           />
//         </div>
//         <div id="item2" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/mqK7dCF/table.jpg"
//             className="w-full  h-[90vh] object-cover"
//           />
//         </div>
//         <div id="item3" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/HY741t5/mr-mrs.jpg"
//             className="w-full  h-[90vh] object-cover"
//           />
//         </div>
//         <div id="item4" className="carousel-item w-full">
//           <img
//             src="https://i.ibb.co/GdwXFWV/together.jpg"
//             className="w-full  h-[90vh] object-cover"
//           />
//         </div>
//       </div>

//     </div>

//   );
// };

// export default Banner;
