import React from "react";
import userExpr from "../images/user-experience (1).png";
import develop from "../images/coding.png";
import logo from "../images/FB_IMG_1705437194399.jpg";
import reactLogo from "../images/react-icon-black.png";
import reduxLogo from "../images/redux-logo-black-and-white.png";
import nextLogo from "../images/next-js-logo-black.png";
import tailwindLogo from "../images/tailwind-icon-black.png";
import javascriptLogo from "../images/js-black.png";
import framerLogo from "../images/brand-framer-motion-icon-black.png";
import typescriptLogo from "../images/typ-black.png";
import figmaLogo from "../images/figma-black.png";
import logoabd from "../images/BERHOUCH@4x.png";
import htmlLogo from "../images/html5-logo-black.png";
import cssLogo from "../images/css-logo-black.png";
import educationProject from "../images/project-Education.png"
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";

function Home() {
  const text = "AVAILABLE FOR FREELANCE".split(" ");
  const textSkils =
    " We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.".split(
      " "
    );

  return (
    <div className="relative">
      {/* Hero */}
      <div className="py-[150px] left-0 right-0 mr-auto ml-auto">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <i class="bx bxs-polygon text-[#61CE70]"></i>
            {/* <h3 className="font-[600]">AVAILABLE FOR FREELANCE</h3> */}
            <div className="App">
              {text.map((el, i) => (
                <motion.span
                  className="font-[600]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="text-[55px] tracking-[-2px] leading-[50px] font-[900] flex flex-col items-center overflow-hidden">
            <div className="overflow-hidden">
              <motion.h1
                className=""
                initial={{ y: 80 }}
                animate={{ y: 1 }}
                transition={{
                  duration: 0.3,
                }}
              >
                ABDELGHANI
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="overflow-hidden"
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.3,
                }}
              >
                BERHOUCH
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 text-[30px] p container">
        <i class="bx bxl-github"></i>
        <i class="bx bxl-linkedin-square"></i>
        <i class="bx bxl-instagram-alt"></i>
      </div>
      <hr />
      {/* services */}
      <div className="bg-[#161519] py-[50px] text-white  ">
        <div className="flex flex-col gap-3">
          <div className="flex uppercase flex-col items-center text-[30px] font-[800] leading-[30px]">
            <h1>My Quality</h1>
            <h1> expertise</h1>
          </div>
          {/* <p className="text-center pt-2 px-[40px] font-[450] leading-[17px]">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p> */}
          <div className="text-center pt-2 px-[40px] font-[550] leading-[17px]">
            {textSkils.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 mt-5 gap-5 overflow-hidden">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="bg-[#d90a2c] p-[20px]   flex  flex-col rounded-[20px]"
          >
            <div className="flex items-center gap-2 pb-3">
              <img src={userExpr} className="w-[40px]" />
              <h2 className="text-[25px] font-[600] uppercase pb-1">
                UI/UX Design
              </h2>
            </div>
            <p className=" text-[20px] leading-[18px] font-[600] text- ">
              Craft intuitive navigation that makes features accessible. Choose
              layouts and graphics that fit your app's personality.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="bg-box p-[20px]   flex  flex-col rounded-[20px]"
          >
            <div className="flex items-center gap-2 pb-3">
              <img src={develop} className="w-[40px]" />
              <h2 className="text-[25px] font-[600] uppercase pb-1">
                web developer
              </h2>
            </div>
            <p className=" text-[20px] leading-[18px] font-[600] text- ">
              Blend of functionality with aesthetics to create delightful
              experience.
            </p>
          </motion.div>
        </div>
      </div>
      {/* projects */}
      <div className="container py-[30px] bg-box-w">
        <div className="flex uppercase flex-col items-center text-[30px] font-[800] leading-[30px]">
          <h1>My Recent </h1>
          <h1>Works</h1>
        </div>
        <div className="pt-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.4,
            }}
            className="flex flex-col items-center gap-1 pt-1"
          >
            <img
              className="rounded-[20px]"
              src={educationProject}
            />
            <h3 className="text-[20px] font-[550]">Digital Agency</h3>
            <div className="flex items-center gap-2  text-[18px]">
              <i class="bx bxl-html5"></i>
              <i class="bx bxl-tailwind-css"></i>
              <i class="bx bxl-typescript"></i>
              <i class="bx bxl-react"></i>
              <i class="bx bxl-javascript"></i>
            </div>
            <span className="text-[15px]">Agency , Portfolio</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.4,
            }}
            className="flex flex-col items-center gap-1 pt-1"
          >
            <img
              className="rounded-[20px]"
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/24/Demo6_Home.webp"
            />
            <h3 className="text-[20px] font-[550]">Showcase Interactive</h3>
            <div className="flex items-center gap-2  text-[18px]">
              <i class="bx bxl-html5"></i>
              <i class="bx bxl-tailwind-css"></i>
              <i class="bx bxl-redux"></i>
              <i class="bx bxl-react"></i>
              <i class="bx bxl-javascript"></i>
            </div>
            <span className="text-[15px]">Agency, Studio, Portfolio</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.4,
            }}
            className="flex flex-col items-center gap-1 pt-1"
          >
            <img
              className="rounded-[20px]"
              src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/24/Demo25_Home.webp"
            />
            <h3 className="text-[20px] font-[550]">Personal Blog</h3>
            <div className="flex items-center gap-2  text-[18px]">
              <i class="bx bxl-html5"></i>
              <i class="bx bxl-tailwind-css"></i>
              <i class="bx bxl-redux"></i>
              <i class="bx bxl-react"></i>
              <i class="bx bxl-javascript"></i>
            </div>
            <span className="text-[15px]">Blog, News</span>
          </motion.div>
        </div>
      </div>
      {/* About */}
      <div className="container my-[50px]">
        <div>
          <div className="text-[26px] uppercase tracking-[-1px] leading-[26px] font-[900] flex flex-col items-center overflow-hidden">
            <div className="overflow-hidden">
              <motion.h1
                className=""
                initial={{ y: 80 }}
                animate={{ y: 1 }}
                transition={{
                  duration: 0.3,
                }}
              >
                more about
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="overflow-hidden"
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.3,
                }}
              >
                abdelghani©
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="pt-[40px] px-[30px] origin-bottom overflow-hidden">
          <motion.img
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.8,
            }}
            src={logo}
            className="rounded-[50px] md:w-[200px] "
          />
        </div>
        <div className="text-center px-[10px] uppercase leading-[30px] font-[800] text-[23px] pt-[40px]">
          <p>
            I'M AN INNOVATIVE DESIGNER AND WEB developer IN MOROCCO. <br /> MY
            PASSION FOR MINIMALIST AESTHETICS, ELEGANT , <br /> AND INTUITIVE
            DESIGN SHINES THROUGH IN MY WORK.
          </p>
        </div>
        <div className="text-center pt-[40px]">
          <button className="font-[700] text-[15px] uppercase py-2 px-4 text-white rounded-[20px] bg-[#1D1D1F]">
            Download Resume
          </button>
        </div>
      </div>
      {/* Skills */}
      <div className=" ">
        <div className=" py-[20px] container">
          <div className="pb-6">
            <h2 className="text-[26px] uppercase font-[900] text-center">
              skills
            </h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-center">
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={cssLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] leading-[14px] uppercase">
                  css 3
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={htmlLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] leading-[14px] uppercase">
                  html 5
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={reactLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] leading-[14px]">
                  REACT JS
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={reduxLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] uppercase leading-[14px]">
                  Redux
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={nextLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] uppercase leading-[14px]">
                  next js
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={tailwindLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] uppercase text-center leading-[14px]">
                  taliwind css
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={javascriptLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] uppercase text-center leading-[14px]">
                  javascript
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={framerLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] uppercase text-center leading-[14px]">
                  framer motion
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={typescriptLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] uppercase text-center leading-[14px]">
                  typescript
                </h3>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.4,
              }}
              className="bg-[#f5f5f7] w-[150px] h-[150px] relative  rotate-[-4deg] rounded-[30px]"
            >
              <div className="flex flex-col gap-3 items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <img src={figmaLogo} className="w-[90px]  " />
                <h3 className="font-[700] text-[15px] uppercase text-center leading-[14px]">
                  figma
                </h3>
              </div>
            </motion.li>
          </ul>
          {/* <SliderSkils /> */}
        </div>
      </div>
      {/** */}
      <div className="container mt-4">
        <div className="pb-4">
          <h2 className="text-[26px] uppercase font-[900]   ">motivation</h2>
        </div>
        <div className="">
          <p className="font-[500] text-[20px]">
            More than a job, web developer is an outlet for your vision. You
            have the power to take an idea from concept to reality. Your sites
            can tell a story,<strong>"show off a brand"</strong>, or change
            lives. As the web expands, so do the possibilities. You also have
            the flexibility to work remotely or in a fun agency setting. And
            nothing beats the rush of seeing your live sites in action.
          </p>
          <p className="font-[500] text-[20px] pt-4">
            As a web developer, you get to blend art and technology to create
            <strong>"digital experiences"</strong> that inform, entertain, and
            inspire. Every day is different - one day you may be sketching site
            layouts on paper, the next you're coding up responsive page
            templates. Web design keeps you on your toes!
          </p>
        </div>
        <div className="pt-8">
          <img src={logoabd} className="w-[300px]" />
        </div>
      </div>
    </div>
  );
}

export default Home;
