import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


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
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1"><img
            src="https://i.ibb.co/4mwYGnV/flower-gate.jpg"
            className="w-full h-[90vh] object-cover"
          /></div>
      <div className="keen-slider__slide number-slide2">
      <img
            src="https://i.ibb.co/mqK7dCF/table.jpg"
            className="w-full  h-[90vh] object-cover"
          />
      </div>
      <div className="keen-slider__slide number-slide3">
      <img
            src="https://i.ibb.co/HY741t5/mr-mrs.jpg"
            className="w-full  h-[90vh] object-cover"
          />
      </div>
      <div className="keen-slider__slide number-slide4">
      <img
            src="https://i.ibb.co/GdwXFWV/together.jpg"
            className="w-full  h-[90vh] object-cover"
          />
      </div>
{/* 
     <div className="keen-slider__slide number-slide5">
      <img
            src="https://i.ibb.co/GdwXFWV/together.jpg"
            className="w-full  h-[90vh] object-cover"
          />
      </div>
      <div className="keen-slider__slide number-slide6">
      <img
            src="https://i.ibb.co/GdwXFWV/together.jpg"
            className="w-full  h-[90vh] object-cover"
          />
      </div> */}


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
