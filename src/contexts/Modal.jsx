import { useState, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { CustomButton } from '@/components/button';
import { CustomModal } from '@/components/dialog';
import { Dialog } from '@/components/ui/dialog';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState('1');
    const [hasSearchValue, setHasSearchValue] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    function openModal() {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '0px';
    }

    function closeModal() {
        setStep('1');
        setHasSearchValue(false);
        setIsLoading(false);
        setIsOpen(false);
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = 'initial';
    }

    const value = { isOpen, openModal, closeModal, step, setStep, isLoading, setIsLoading, hasSearchValue, setHasSearchValue, isSidebarCollapsed, setIsSidebarCollapsed };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => useContext(ModalContext);

export function Modal({ children, ...props }) {
    const { isOpen, closeModal, step, hasSearchValue } = useModal();
    const portalRoot = document.body;
    const { className, ...propsRest } = props;

    if (!isOpen) {
        return null;
    }

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`cc-fixed cc-z-[999] cc-w-full cc-h-full cc-top-0 cc-left-0 cc-overflow-y-auto cc-overflow-x-hidden cc-bg-black/50`}
            {...propsRest}
        >
            <CustomModal isOpen={isOpen} onClose={closeModal}>
                <div className='cc-w-auto cc-relative md:cc-mx-auto md:cc-my-7 md:cc-max-w-[95%] cc-border-[#ffffff] cc-border-4 cc-rounded-xl'>
                <div className="cc-relative cc-w-full cc-bg-white cc-overflow-hidden md:cc-rounded lg:cc-min-h-[calc(100dvh-2*1.75rem)]">
                    <button onClick={closeModal} className={`close-btn cc-bg-transparent cc-font-heading ${step === '1' && hasSearchValue ? 'cc-text-white' : '!cc-text-black'} cc-text-4xl cc-absolute cc-top-1 cc-right-2 cc-cursor-pointer`}>&times;</button>
                    {children}
                </div>
                </div>
            </CustomModal>
        </motion.div>,
        portalRoot
    );
}
