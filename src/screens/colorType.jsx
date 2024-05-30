  import { useState } from 'react'
  import { StepHeader } from "../components/modal/stepHeader";
  import { tiles } from "./constants"
  import { useModal } from '../components/modal';

  export const ColorsType = () => {  
      const [selectedColor, setSelectedColor] = useState(null)
    const { setStep } = useModal();

  const handleColor = () => {
    setStep("5");
  };
  return (
    <div className="cc-p-4 xl:cc-p-10 xl:cc-flex xl:cc-flex-col xl:cc-w-[100%]">
      <StepHeader stepTitle="SELECT A COLOR TYPE" onClick={() => setStep('3')}/>
      <div className="cc-grid cc-gap-4 cc-grid-cols-2 xl:cc-grid-cols-3 xl:cc-overflow-y-scroll cc-pt-4">
        {tiles.map((tile, index) => {
          return (
            <div key={index}>
              <div
                className={`cc-flex cc-m-auto cc-flex-col cc-h-[120px] ${tile.clrClass} cc-cursor-pointer xl:cc-shrink-0 xl:cc-w-60 ${tile.clrName === 'White' && 'cc-border-2 cc-border-solid cc-border-gray-950'}`} onClick={handleColor}
              />
              <h3 className="cc-text-center">{tile.clrName}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
