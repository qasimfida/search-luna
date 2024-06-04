import React from 'react';
import { motion } from "framer-motion";
const NewCard = ({ colorCode, colorName, brand, yearRange, imageUrl, onClick, variant }) => {
  return (
    <motion.div className="cc-bg-white cc-rounded-lg cc-shadow-md cc-w-60 md:cc-w-[264px] cc-min-w-[264px] xl:cc-h-[300px] cc-h-[250px] cc-cursor-pointer" onClick={onClick} 
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.8 }}>
      >
      <div className="cc-h-[100px] xl:cc-h-[187px] cc-rounded-2xl cc-bg-cover cc-bg-center" style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}></div>
      <div className="cc-p-4 flex-grow flex flex-col justify-between">
        <div className='cc-flex cc-flex-col'>
          <h2 className="cc-text-lg cc-font-semibold">{ variant === 'undercoat' ? colorName : colorName / colorCode}</h2>
          <div className='cc-flex cc-justify-between'>
          <p className="cc-text-sm cc-text-gray-600 cc-flex cc-items-center cc-mt-2">
            <svg className="cc-h-4 cc-w-4 cc-mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            {brand}
          </p>
          <p className="cc-text-sm cc-text-gray-600 cc-mt-2">{yearRange}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewCard;
