import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import Carousel from "react-multi-carousel";

const ButtonGroup = ({ dots, next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="overflow-auto w-full absolute -bottom-[100px] ">
      <div className="flex gap-3 min-w-max ">
        {dots?.map((dot, index) => (
          <button
            onClick={() => goToSlide(index)}
            key={index}
            className={`w-[80px] h-[80px] ${
              currentSlide == index ? "border border-primary" : ""
            }`}
          >
            <Image
              src="https://dummyimage.com/80x80"
              alt="dummyimage"
              className="w-full"
              height={80}
              width={80}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default function ProductSlider({ className = "" }) {
  return (
    <>
      {/* <div className="h-full bg-red-500" /> */}
      <div
        className={`h-[300px] bg-foreground-100  relative ${className} mb-[80px]`}
      >
        <Carousel
          // responsive={responsive}
          className="rounded-xl"
          // showDots
          renderButtonGroupOutside
          // renderDotsOutside
          customButtonGroup={<ButtonGroup dots={Array(5).fill(null)} />}
          responsive={{
            all: {
              breakpoint: { max: 4000, min: 0 },
              items: 1,
            },
          }}
        >
          {Array(5)
            .fill(null)
            .map((item, index) => (
              <div className="h-[300px] " key={index}>
                <Image
                  src="https://dummyimage.com/500x300"
                  alt="dummyimage"
                  className="h-[400px]"
                  height={300}
                  width={500}
                />
                {/* Slide {index} */}
              </div>
            ))}
        </Carousel>
      </div>
    </>
  );
}
