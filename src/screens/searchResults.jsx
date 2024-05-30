import { useCallback, useState } from "react";
import { StepHeader } from "../components/modal/stepHeader";
import { useModal } from "../components/modal";
import { RedirectModal } from "../components/modal/redirectModal";
import { motion } from "framer-motion";
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
    <div className="cc-p-4 xl:cc-p-10 xl:cc-flex xl:cc-flex-col xl:cc-w-65">
      <StepHeader
        stepTitle="Results | Select a color"
        onClick={() => setStep("1")}
      />
      <div className="cc-grid cc-gap-4 cc-grid-cols-2 md:cc-grid-cols-3 md:cc-overflow-x-hidden 2xl:cc-grid-cols-4 lg:cc-overflow-y-scroll cc-p-4 ">
        {data.map((color, index) => (
          <motion.div 
          initial={{ x: '100vw' }} 
          animate={{ x: 0 }} 
          transition={{ stiffness: 50, delay: index * 0.2 }} 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.8 }} 
          className="cc-m-auto" 
          key={color.id}>
            <div
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
            </div>
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
