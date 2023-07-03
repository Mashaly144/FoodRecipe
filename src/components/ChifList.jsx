import React from 'react';
import { chifLists } from '../constant/data';

const ChifList = () => {
  return (
    <div className='sectionPaddingY'>
      <div className='container mx-auto'>
        <div className='card'>
          {chifLists.map((chif, index) => {
            return (
              <div key={index} className='wovenCard rounded-xl'>
                <img src={chif.picture} alt={chif.name} />
                <div className=' bg-transparent flex flex-col justify-between  items-center'>
                  <h6>{chif.name}</h6>
                  <span className='text-center text-[15px]'>
                    {chif.experience}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChifList;
