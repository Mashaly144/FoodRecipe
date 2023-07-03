import React from 'react';
import { servicesState } from '../constant/data';
const ServicesState = () => {
  return (
    <section className='py-[50px] bg-sectionBg'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-[30px] lg:space-y-0 justify-between items-center '>
          {servicesState.map((state, index) => {
            return (
              <div
                key={index}
                className='p-5 cardShadow flex flex-col  items-center cursor-pointer'
              >
                {/* image */}
                <div className='mb-5'>
                  <img
                    src={state.icon}
                    className='w-[50px] h-[50px] object-contain'
                    alt='icon'
                  />
                </div>
                {/* content */}
                <h4 className='mb-2 font-semibold text-xl'>{state.title}</h4>
                <p className=' font-semibold text-[14px] text-dimWhite max-w-[250px] text-center'>
                  {state.discription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesState;
