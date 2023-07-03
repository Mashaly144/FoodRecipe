import Button from '../Ui/Button';
import hero1 from '../assets/heroSection.svg';
import React from 'react';
const Hero = () => {
  return (
    <section className=' sectionPaddingY '>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center space-y-[50px]'>
          {/* text */}
          <div className='flex flex-col text-center lg:text-left  justify-between items-center lg:items-start space-y-4 lg:space-y-10 '>
            {/* text */}
            <h1 className='text-xl lg:text-2xl sm:text-center font-semibold'>
              We are ready to deliver your favorite food items
            </h1>
            <p className='text-dimWhite  lg:w-[500px] text-xl'>
              Welcome to our culinary haven, where your cravings meet
              convenience! At Food,We take care of your favorite food items
              straight to your doorstep.
            </p>
            <Button name='Quick Order' />
          </div>
          {/* image */}
          <div className='justify-center'>
            <img src={hero1} className='w-[400px] animate-spin' alt='hero' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
