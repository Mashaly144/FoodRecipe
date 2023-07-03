import React from 'react';

const SectionHeading = (props) => {
  return (
    <div className='container mx-auto py-[50px]'>
      <div className='flex flex-col justify-between items-center space-y-4 lg:space-y-8 my-10'>
        <h1 className='text-primary text-2xl  font-bold'>{props.name}</h1>
        <h1 className='text-lg font-semibold'>{props.title}</h1>
        <p className='w-[300px] lg:w-[500px] lg:text-[17px] text-center text-sm text-dimWhite'>
          {props.discription}
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
