import React from 'react';
import CardButton from '../Ui/CardButton';
import Button from '../Ui/Button';
import { cards } from '../constant/data';
const Card = () => {
  return (
    <div className='bg-sectionBg py-[50px]'>
      <div className='container mx-auto'>
        <div>
          <div className='card'>
            {cards.map((card, index) => {
              return (
                <div key={index} className='card-item cursor-pointer'>
                  {/* image */}
                  <img
                    className='mb-3 w-full h-[250px]'
                    src={card.imageCard}
                    alt={card.name}
                  />
                  {/* card content */}
                  <div className='p-4 space-y-4 flex justify-between items-center flex-col'>
                    {/* name and price */}
                    <div className='flex w-full justify-between items-center'>
                      <h3>{card.name}</h3>
                      <span className='text-secondary text-[18px]'>
                        {card.price}
                      </span>
                    </div>
                    {/* discription */}
                    <p>{card.discription}</p>
                    {/* button */}
                    <CardButton />
                  </div>
                </div>
              );
            })}
          </div>
          <div className='w-fit relative left-[50%] transform -translate-x-1/2 mt-4'>
            <Button name='Load More' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
