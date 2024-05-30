import React, { useState } from "react";
import searchIcon from "../../assets/searchIcon.png";
import { useModal } from "../../contexts/Modal";
import { motion, AnimatePresence } from "framer-motion";

export const RedirectModal = ({ setShowModal, searchQuery, setSearchTerms }) => {
  const {setStep, setHasSearchValue, setIsLoading} = useModal()
  const [isVisible, setIsVisible] = useState(true); 

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.75,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const closeModal = () => {
    setIsVisible(false); 
    setTimeout(() => setShowModal(false), 500); 
  };

  const handleSearch = () => {
    setHasSearchValue(false);
      setIsLoading(false);
      setSearchTerms({q: ''});
      setStep("1");
    const url = `https://www.google.com/search?q=${encodeURIComponent(searchQuery.q)} color code`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="cc-fixed cc-inset-0 cc-z-50 cc-flex cc-items-center cc-justify-center cc-bg-black cc-bg-opacity-75"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <motion.div
            className="cc-relative cc-p-4 cc-w-full cc-max-w-2xl cc-max-h-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
          >
            <div className="cc-relative cc-rounded-lg cc-shadow cc-bg-[#0D1120]">
              <div className="cc-flex cc-items-center cc-justify-between cc-p-4 md:cc-p-5 cc-border-b cc-rounded-t dark:cc-border-gray-600">
                <h3 className="cc-text-[18px] cc-text-white cc-font-black cc-uppercase cc-font-heading">
                  Sorry.... We can't find what you're looking for &#x1F61E;
                </h3>
              
                <button
                  type="button"
                  className="cc-text-gray-400 cc-bg-transparent hover:cc-bg-gray-200 hover:cc-text-gray-900 cc-rounded-lg cc-text-sm cc-w-8 cc-h-8 ms-auto cc-inline-flex cc-justify-center cc-items-center dark:hover:cc-bg-gray-600 dark:hover:cc-text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="cc-w-3 cc-h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="cc-sr-only">Close modal</span>
                </button>
              </div>
              <div className="cc-p-4 md:cc-px-5 cc-bg-[#ffffff] cc-flex cc-items-center cc-gap-2">
                <p className="cc-text-center">
                  Click the search button and we'll help you find the color code
                  in Google 😉
                </p>
                <button
                  type="submit"
                  onClick={handleSearch}
                  className="cc-inline-flex cc-ml-2 cc-py-4 cc-px-4 cc-items-center cc-gap-2 cc-bg-cc-blue cc-text-white cc-text-lg cc-font-semibold lg:cc-py-2 lg:cc-px-2 cc-rounded-md"
                >
                  <img
                    src={searchIcon}
                    alt="Search icon"
                    className="cc-h-6 cc-w-8 rotate-icon md:cc-w-6 md:cc-h-6"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
