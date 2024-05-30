import { useModal } from "../components/modal";
import { StepHeader } from "../components/modal/stepHeader";
import { brands } from "../screens/constants/index";
import { motion } from "framer-motion";

export const SelectBrand = () => {
  const { setStep, setIsSidebarCollapsed } = useModal();
  const handleBrand = (brand) => {
    setStep("3");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
    },
  };

  const handleBrandBack = () => {
    setStep("1");
    setIsSidebarCollapsed(false);
  }
  return (
    <div className="cc-p-10 xl:cc-flex xl:cc-flex-col xl:cc-w-65">
      <StepHeader stepTitle="SELECT A Brand" onClick={handleBrandBack} />
      <motion.div
        className="cc-grid cc-gap-6 cc-grid-cols-2 sm:cc-grid-cols-2 md:cc-grid-cols-3 xl:cc-grid-cols-3 xl:cc-overflow-y-auto xl:cc-flex cc-flex-wrap xl:cc-justify-start xl:cc-my-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="cc-py-2 cc-cursor-pointer"
            onClick={() => handleBrand(brand)}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src={brand.image}
              className="cc-w-[80px] cc-h-[80px]"
              alt={brand.name}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
