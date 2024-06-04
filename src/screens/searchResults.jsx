import { useCallback, useState } from "react";
import { StepHeader } from "../components/modal/stepHeader";
import { useModal } from "../components/modal";
import { RedirectModal } from "../components/modal/redirectModal";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card"
import NewCard from "@/components/NewCard";
import { Button } from "@/components/ui/button"
const NO_IMAGE =
  "https://storage.googleapis.com/luna-colors/lib/no-image-xs.png";

export const SearchResults = ({
  imageQueries,
  data,
  onColorClick,
  searchQuery,
  setResultsLoading,
  setSearchTerms
}) => {
  const { setStep, step } = useModal();
  const [showModal, setShowModal] = useState(true);

  const getColorImage = useCallback(
    (color) => {
      const query = imageQueries.find((query) => query?.data?.id === color.id);
      return query?.data?.path || NO_IMAGE;
    },
    [imageQueries]
  );

  const handleColor = (color) => {
    onColorClick(color);
    setStep("6");
    setResultsLoading(true);
    setTimeout(() => {
      setResultsLoading(false);
    }, 3000);
  };


  return (
    <div className="cc-p-4 xl:cc-p-10 xl:cc-flex xl:cc-flex-col xl:cc-w-100">

      {/* Filter Button - TO BE USED LATER */}
      {/* <motion.div className="cc-flex cc-justify-end cc-py-2 cc-mr-10"
        animate={{
          y: 0,
          x: 0
        }}

        transition={{ duration: 0.8 }}
        initial={{ x: -499 }}
      >
        <Button variant="outline" className="cc-flex cc-gap-2"><span><svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 12.8016V10.8016H11V12.8016H7ZM3 7.80164V5.80164H15V7.80164H3ZM0 2.80164V0.801636H18V2.80164H0Z" fill="#1C1B1F" />
        </svg></span>Filter</Button>
      </motion.div> */}
      <div className="cc-grid cc-gap-6 cc-grid-cols-1 sm:cc-grid-cols-2 md:cc-grid-cols-3 md:cc-overflow-x-scroll 2xl:cc-grid-cols-3 lg:cc-overflow-hidden cc-p-4 cc-mx-auto">
        {data.map((color, index) => (
          <motion.div
            initial={{ y: '100vw' }}
            animate={{ y: 0 }}
            transition={{ stiffness: 50, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="cc-m-auto cc-w-full cc-flex cc-justify-center"
            key={color.id}>
            {/* <div
              className="cc-rounded-sm cc-flex cc-flex-col cc-w-[160px] cc-h-[180px] md:cc-h-[220px] md:cc-w-[13rem] cc-cursor-pointer cc-border-[2px] cc-border-solid cc-border-gray-950 hover:cc-border-[#6DC3F7] hover:cc-border-[4px] xl:cc-shrink-0"
              onClick={() => handleColor(color)}
              key={color.id}
            >
              <div className="cc-flex cc-flex-col cc-flex-grow cc-justify-between cc-bg-gray-100">
                <div className="cc-text-[0.65rem] lg:cc-text-sm cc-text-black cc-font-body cc-px-3 cc-my-1">
                  {color["fullBrand"]}
                </div>
                <h4 className="cc-text-xs lg:cc-text-lg cc-text-black cc-font-body cc-px-3 cc-my-3 cc-line-clamp-2">
                  {color["code"]} / {color["name"]}
                </h4>
                <div className="cc-text-[0.65rem] lg:cc-text-sm cc-text-black cc-font-body cc-px-3 cc-my-1">
                  {color["year"]}
                </div>
              </div>
              
              <div
                className="cc-h-10 xl:cc-h-16 cc-shrink-0 cc-bg-cover md:cc-bg-contain"
                style={{
                  backgroundImage: `url('${getColorImage(color)}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="cc-h-full cc-bg-gradient-to-b cc-from-transparent cc-via-white cc-opacity-30">
                  &nbsp;
                </div>
              </div>
            </div> */}
            <NewCard
              colorCode={color.code}
              colorName={color.name}
              brand={color.fullBrand}
              yearRange={color.year}
              imageUrl={getColorImage(color)}
              onClick={() => handleColor(color)}
            />
          </motion.div>

        ))}
      </div>
      {!data.length && showModal && (
        <div>
          <RedirectModal
            setShowModal={setShowModal}
            searchQuery={searchQuery}
            setSearchTerms={setSearchTerms}
          />
        </div>
      )}
    </div>
  );
};
