import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export const StepHeader = ({ stepTitle, onClick }) => {
  return (
    <div className="cc-flex cc-gap-2  cc-items-center xl:cc-items-start">
      <ArrowLongLeftIcon
        className="cc-w-16 cc-h-16  cc-cursor-pointer xl:cc-float-left lg:-cc-mt-4"
        onClick={onClick}
      />
      <h3 className="cc-text-[12px] xl:cc-text-2xl cc-text-black cc-font-black cc-uppercase cc-font-heading">
        {stepTitle}
      </h3>
    </div>
  );
};
