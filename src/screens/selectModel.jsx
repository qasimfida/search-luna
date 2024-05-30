import { useModal } from "../components/modal";
import { StepHeader } from "../components/modal/stepHeader";
import { models } from "../screens/constants/index";
import { motion } from "framer-motion";
export const SelectModel = () => {
  const { setStep } = useModal();

  const handleModal = () => {
    setStep("4");
  };

  return (
    <div className="cc-p-4 xl:cc-p-10 xl:cc-flex xl:cc-flex-col xl:cc-w-[100%]">
      <StepHeader stepTitle="SELECT A Model" onClick={() => setStep('2')} />
      <motion.div className="cc-grid cc-gap-6 cc-grid-cols-2 xl:cc-grid-cols-4 xl:cc-overflow-y-auto  xl:cc-my-10" initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 20,
          duration: 1.2
        }}>
        {models.map((brand, index) => (
          <div key={index} className="cc-py-2 cc-cursor-pointer cc-text-center" onClick={handleModal}>
            <div className="cc-flex cc-justify-center">
              <img src={brand.image} className="cc-w-[186px] " alt={brand.name} />
            </div>

            <p className="cc-py-2 xl:cc-text-2xl ">{brand.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
