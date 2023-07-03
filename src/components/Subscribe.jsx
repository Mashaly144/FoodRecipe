import React from 'react';
import Button from '../Ui/Button';

const Subscribe = () => {
  return (
    <div className='py-[100px] bg-sectionBg relative'>
      <div className='overlayVegetable'></div>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between items-center space-y-10'>
          {/* text */}
          <h3>Subscribe our newsletter to get updates </h3>
          <form className='formSubscribe '>
            <input type='text' placeholder='Enter your email here' />

            <Button name='Subscribe' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
