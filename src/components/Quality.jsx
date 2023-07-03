import Button from '../Ui/Button';
import hero2 from '../assets/heroSection2.svg';
import React from 'react';

const Quality = () => {
  return (
    <section className=' sectionPaddingY'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center space-y-[50px]'>
          {/* image */}
          <div className='justify-center'>
            <img src={hero2} className='w-[400px]' alt='hero' />
          </div>
          <div className='flex flex-col text-center lg:text-left  justify-between items-center lg:items-start space-y-4 lg:space-y-10'>
            {/* text */}
            <h1 className='text-2xl lg:text-3xl font-semibold'>
              We are ready to deliver your favorite food items
            </h1>
            <p className='text-dimWhite  lg:w-[500px] text-[15px] lg:text-xl'>
              With our state-of-the-art delivery service, we prioritize
              efficiency without compromising on quality. Whether you're a busy
              professional.
            </p>
            <Button name='Discover More' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
