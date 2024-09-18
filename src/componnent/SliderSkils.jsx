import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactLogo from '../images/react-icon-black.png'

function SliderSkils() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel 
          swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
        >
        <div>
          <li className="bg-[#f5f5f7] w-[250px] h-[250px] relative  rotate-[-4deg] rounded-[30px]">
            <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <img src={reactLogo} className="w-[140px]  " />
              <h3 className="font-[700] text-[20px]">REACT JS</h3>
            </div>
          </li>
        </div>
        <div>
          <li className="bg-[#f5f5f7] w-[250px] h-[250px] relative  rotate-[-4deg] rounded-[30px]">
            <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <img src={reactLogo} className="w-[140px]  " />
              <h3 className="font-[700] text-[20px]">REACT JS</h3>
            </div>
          </li>
        </div>
      </Carousel>
    </div>
  );
}

export default SliderSkils;
