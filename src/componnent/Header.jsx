import React, { useState } from "react";
import { useSubmit } from "react-router-dom";
import { animate, AnimatePresence, motion } from "framer-motion";

function Header() {

  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <div className="">
      <header className="container my-2">
        <div className="flex justify-between" >
          <div className=" cursor-pointer" onClick={isOpen}>
            <i class="bx bx-menu-alt-left text-[40px]"></i>
          </div>

          <div>
            <button className="font-[700] text-[14px] py-2 px-4 text-white bg-[#1D1D1F]">
              CONTACT ME
            </button>
          </div>
        </div>
      </header>
      <hr/>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container z-[2000] bg-[#f5f5f7] fixed w-full h-full top-0"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <div className=" flex flex-col text-[#1D1D1F] items-center uppercase text-[40px] font-[800] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div
                className="btn_close cursor-pointer bg-[#1D1D1F] px-3 mb-3 text-[20px] flex items-center rounded-[20px] text-center"
                onClick={closeMenu}
              >
                <i class="bx bx-x text-white text-[30px]"></i>

                {/* // <motion.li variants={linnkVers} initial = 'initial' animate = 'open' onClick={() => setShowMenu(!showMenu)} className='bg-[#1D1D1F] rounded-[20px] mb-[30px] '><i class='bx bx-x w-[34px] h-[34px] text-[30px] text-center text-white '></i></motion.li> */}
              </div>
              <motion.a
                href=""
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                Home
              </motion.a>
              <motion.a
                href=""
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.8,
                  },
                }}
              >
                About
              </motion.a>
              <motion.a
                href=""
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.6,
                  },
                }}
              >
                Portfolio
              </motion.a>
              <motion.a
                href=""
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.4,
                  },
                }}
              >
                Blog
              </motion.a>
              <motion.a
                href=""
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }}
              >
                Contact
              </motion.a>
              <motion.a
                href=""
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 0.2,
                  },
                }}
              >
                Wishlist
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
