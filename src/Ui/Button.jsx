const Button = ({ name }) => {
  return (
    <div className='bg-buttonColor hover:scale-95 transition-all cursor-pointer w-fit text-center  lg:font-semibold text-[16px] text-white rounded-[40px] p-3'>
      {name}
    </div>
  );
};

export default Button;
