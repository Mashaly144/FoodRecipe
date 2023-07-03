import React from 'react';
import { states } from '../constant/data';
const States = () => {
  return (
    <section className='py-[50px] bg-sectionBg  relative'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-[30px] lg:space-y-0 flex-1 justify-between items-center '>
          {states.map((state, index) => {
            return (
              <div key={index} className='flex flex-col  items-center '>
                {/* image */}
                <div className='mb-5'>
                  <img
                    src={state.icon}
                    className='w-[30px] h-[30px] object-contain'
                    alt='icon'
                  />
                </div>
                {/* content */}
                <h4 className='mb-2 font-semibold text-xl'>{state.title}</h4>
                <p className=' font-semibold text-dimWhite'>
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

export default States;
