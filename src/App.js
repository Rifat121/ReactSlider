import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    // className: "center",
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 746,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20 carousel">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.name}
                className="bg-white h-[280px] text-black rounded-xl mb-4"
              >
                <div className="h-28 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img
                    src={
                      "https://www.eag-led.com/wp-content/uploads/2017/04/Product-Image-Coming-Soon.png"
                    }
                    alt=""
                    className="h-24 w-24 rounded-full"
                  />
                </div>

                <div className="flex flex-col items-center justify-center gap-1 xl:gap-4 p-4">
                  <p className="text-lg font-semibold">{d.name}</p>
                  <p className="text-center text-sm">{d.review}</p>
                  <button className="bg-indigo-500 text-white text-sm px-6 py-1 rounded-xl">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: `Laptop`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    name: `DSLR`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    name: `Mobile`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    name: `Speaker`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    name: `Headphone`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    name: `Earpod`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    name: `Tablet`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    name: `Camera`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
];

export default App;
