import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "./ui/dialog"
  

export const CustomModal = ({children, isOpen, onClose}) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
        {children}
    </Dialog>
  );
};
