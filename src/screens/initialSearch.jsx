import { motion, AnimatePresence } from 'framer-motion';
import PaintBucket from '../assets/paint-bucket.png';
import { useModal } from '../contexts/Modal';

export const InitialSearch = ({ isVisible = true }) => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='initial-screen'
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="initial-screen__text">
            Your search results are moments away...
          </div>
          <div className="initial-screen__img">
            <img className='cc-m-auto' src={PaintBucket} alt="Paint Bucket" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
