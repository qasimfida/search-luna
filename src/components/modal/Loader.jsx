import React from "react";
import { motion } from "framer-motion";

const spinTransition = {
  repeat: Infinity,
  duration: 1,
};

export const ModalLoader = () => {
  return (
    <div className="cc-relative cc-w-12 cc-h-12 cc-mx-auto md:cc-m-auto">
      <motion.span
        className="cc-block cc-w-full cc-h-full cc-border-4 cc-border-solid cc-border-[#eee] cc-border-t-[#6DC3F7] cc-rounded-full cc-box-border cc-absolute cc-top-0 cc-left-0"
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};
