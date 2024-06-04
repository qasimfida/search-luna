import { useCallback } from 'react';
import gallonOne from '../assets/gallon-one.png';
import gallonTwo from '../assets/gallon-two.png';
import gallonThree from '../assets/gallon-three.png';
import { StepHeader } from '../components/modal/stepHeader';
import { useModal } from '../contexts/Modal';
import useRecipeImages from '@/hooks/useRecipeImages';
import Stripe from 'stripe';
import { CustomButton } from '@/components/button';
import { motion } from "framer-motion"
const getPrice = (size, suffix) => {
  const prices = {
    Gallon: {
      A: 240,
      B: 299,
      C: 325,
      D: 370,
      E: 410,
      F: 455,
    },
    Quart: {
      A: 52,
      B: 65,
      C: 720,
      D: 82,
      E: 90,
      F: 99,
    },
    Pint: {
      A: 27,
      B: 33,
      C: 36,
      D: 40,
      E: 45,
      F: 50,
    },
  };

  return prices[size][suffix] || 0;
};

export const ConfirmColor = ({
  selectedColor,
  onRecipeClick,
  getColorImage,
  recipeData,
  setRemove
}) => {
  const undercoatImage = useRecipeImages([
    { id: recipeData.undercoatId, parentId: recipeData.undercoatId },
  ]);
  setRemove(true)
  const getUndercoatImg = (color) => {
    const query = undercoatImage.find((query) => query?.data?.id === color);
    return query?.data?.path;
  };

  const { setStep } = useModal();

  const cans = [
    {
      name: 'Gallon',
      img: gallonOne,
    },
    {
      name: 'Quart',
      img: gallonTwo,
    },
    {
      name: 'Pint',
      img: gallonThree,
    },
  ];

  const numericCode = recipeData?.undercoat?.replace(/[^\d]/g, '');

  const handleCheckout = async (e, bucket) => {
    e.preventDefault();

    const stripe = new Stripe(
      'sk_test_51JMI1YJQpNhtnElbc4Ugt84LAi6NOEYF14HDD8zKH6EimtdJcVX7ysm1jbcnYkGHPaQXp1nkiRSJTvDfPM5O2oPY00kdOH25f0'
    );

    const price = getPrice(bucket.name, recipeData.suffix);

    const lineItems = [
      {
        price_data: {
          currency: 'USD',
          product_data: {
            name: bucket.name,
            images: ['https://i.ibb.co/X7c96sf/luna-paint-search.png'],
            description: `${selectedColor['code']} / ${selectedColor['name']}`
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ];

    var baseUrl = window.location.origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}`,
      cancel_url: baseUrl,
      allow_promotion_codes: true,
    });

    window.location.href = session.url;
  };
  const initialDivVariants = {
    initial: { width: "100%" },
    shrink: { width: "35%" },
  };

  return (
    <div className="cc-p-10 cc-border-solid cc-flex-grow xl:cc-flex   xl:cc-flex-col xl:cc-w-100">
      {/* <StepHeader stepTitle="Confirm your Color Choice" onClick={() => setStep('5')} /> */}
      <motion.h2 className='cc-text-black cc-font-semibold cc-text-center cc-text-2xl cc-py-6'
       animate={{ y: 0 ,
        x:0
      }}
      variants={initialDivVariants}
      transition={{ duration: 1.1 }}
      initial={{y: -499}}
      
      >Confirm your color choice</motion.h2>
      <motion.div className="cc-flex cc-flex-col cc-flex-grow cc-gap-10 cc-items-center lg:cc-flex-row xl:cc-items-center lg:cc-gap-5 cc-justify-center "
       animate={{ y: 0 ,
        x:0
      }}
      variants={initialDivVariants}
      transition={{ duration: 0.8 }}
      initial={{y: -499}}
      >
        <div>
          <h4 className='cc-text-lg cc-text-black cc-font-medium cc-mb-4'>Your Selected Color</h4>
          <div
            className="cc-w-30  cc-rounded-sm cc-flex cc-flex-col cc-cursor-pointer  cc-bg-white cc-border-[1px] cc-border-solid cc-border-gray-950 lg:cc-w-60 lg:cc-h-72 lg:cc-shrink-0"
            onClick={() => onRecipeClick()}
            style={{
              borderRadius: '16px',
              border: '1px solid #DDD',
              background: '#FFF',
              boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'
            }}
          >

            <div
              key={selectedColor.id}
              className="cc-flex cc-flex-col cc-flex-grow cc-justify-between cc-bg-gray-100"
            >
              <div
                className="cc-h-10 cc-h-[100px] xl:cc-h-[157px] cc-shrink-0 cc-rounded-lg"
                style={{
                  backgroundImage: `url('${getColorImage(selectedColor)}')`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="cc-h-full cc-bg-gradient-to-b cc-from-transparent cc-via-white cc-opacity-30">
                  &nbsp;
                </div>
              </div>
              <div className="cc-text-[0.65rem] lg:cc-text-sm cc-text-black cc-font-body cc-px-3 cc-my-1">
                {selectedColor['fullBrand']}
              </div>
              <h4 className="cc-text-xs lg:cc-text-lg cc-text-black cc-font-body cc-px-3 cc-my-3 cc-line-clamp-2">
                {selectedColor['code']} / {selectedColor['name']}
              </h4>
              <div className="cc-text-[0.65rem] lg:cc-text-sm cc-text-black cc-font-body cc-px-3 cc-my-1">
                {selectedColor['year']}
              </div>
            </div>

          </div>
        </div>

        <div>
          <div className="cc-flex cc-items-end cc-justify-center">
            {cans.map((bucket, index) => (
              <div key={`bucket-${index}`} className="">
                <img className="cc-bg-no-repeat" src={bucket.img} alt={bucket.name} />
                <h3 className="cc-font-heading cc-text-center cc-mt-2 cc-font-black cc-text-xs lg:cc-text-sm cc-uppercase">
                  {bucket.name}
                </h3>

                <div className="flex">
                <p className="cc-text-black cc-py-2 cc-text-sm">{`$${(getPrice(bucket.name, recipeData.suffix))}`}</p>
                <CustomButton onClick={(e) => handleCheckout(e, bucket)}>Buy</CustomButton>
              </div>
              </div>
            ))}

          </div>
          <p className='cc-text-center cc-font-medium cc-text-lg cc-mt-10'>Available Sizes</p>
        </div>


      </motion.div>

      {/* {recipeData.undercoat != '' && ( */}
      <motion.div className="cc-rounded-lg cc-border cc-border-gray-300 cc-bg-white cc-py-4 cc-my-4"
       animate={{ y: 0 ,
        x:0
      }}
      variants={initialDivVariants}
      transition={{ duration: 0.8 }}
      initial={{x: -499}} 
      >
        <div>
          <p className="cc-text-black cc-text-lg cc-font-normal cc-text-center">
            *This colour requires an ‘Undercoat color’. This means you must spray the undercoat before you spray the final color.
          </p>
          <div className="cc-px-8 xl:cc-flex cc-justify-center ">
            <div className="cc-grid cc-grid-cols-1 lg:cc-grid-cols-2 cc-gap-8 xl:cc-py-4">
              <div>
                <h4 className="cc-text-lg cc-text-black cc-font-medium cc-mb-4">Undercoat you need</h4>
                <div
                  className="cc-w-full cc-rounded-sm cc-cursor-pointer cc-bg-white cc-border-[1px] cc-border-solid cc-border-gray-950 cc-shadow-md"
                  onClick={() => onRecipeClick()}
                  style={{
                    borderRadius: '12px',
                    border: '1px solid #DDD',
                    background: '#FFF',
                    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <div
                    key={selectedColor.id}
                    className="cc-flex cc-flex-col cc-flex-grow cc-justify-between cc-bg-gray-100"
                  >
                    <div
                      className="cc-h-10 cc-h-[100px] xl:cc-h-[132px] cc-shrink-0 cc-rounded-lg"
                      style={{
                        backgroundImage: `url('${getColorImage(selectedColor)}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="cc-h-full cc-bg-gradient-to-b cc-from-transparent cc-via-white cc-opacity-30">
                        &nbsp;
                      </div>
                    </div>
                    <div className="cc-text-[0.65rem] lg:cc-text-sm cc-text-black cc-font-body cc-px-3 cc-my-1">
                      {selectedColor['fullBrand']}/{selectedColor['year']}
                    </div>
                    <h4 className="cc-text-xs lg:cc-text-lg cc-text-black cc-font-body cc-px-3 cc-line-clamp-2">
                      {selectedColor['code']} / {selectedColor['name']}
                    </h4>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="cc-text-lg cc-text-black cc-font-medium cc-mb-4">Recommended Undercoat</h4>
                <div
                  className="cc-w-full cc-rounded-sm cc-cursor-pointer cc-bg-white cc-border-[1px] cc-border-solid cc-border-gray-950 cc-shadow-md"
                  onClick={() => onRecipeClick()}
                  style={{
                    borderRadius: '12px',
                    border: '1px solid #DDD',
                    background: '#FFF',
                    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <div
                    key={selectedColor.id}
                    className="cc-flex cc-flex-col cc-flex-grow cc-justify-between cc-bg-gray-100"
                  >
                    <div
                      className="cc-h-10 cc-h-[100px] xl:cc-h-[132px] cc-shrink-0 cc-rounded-lg"
                      style={{
                        backgroundImage: `url('${getColorImage(selectedColor)}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="cc-h-full cc-bg-gradient-to-b cc-from-transparent cc-via-white cc-opacity-30">
                        &nbsp;
                      </div>
                    </div>
                    <div className="cc-text-[0.65rem] lg:cc-text-sm cc-text-black cc-font-body cc-px-3 cc-my-1">
                      {selectedColor['fullBrand']}/{selectedColor['year']}
                    </div>
                    <h4 className="cc-text-xs lg:cc-text-lg cc-text-black cc-font-body cc-px-3 cc-line-clamp-2">
                      {selectedColor['code']} / {selectedColor['name']}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="cc-text-black cc-text-sm cc-font-normal cc-text-center cc-mt-4">
            You can select this on the Luna product page as these are standard undercoats.
          </p>
        </div>
      </motion.div>

      {/* )} */}
    </div>
  );
};
