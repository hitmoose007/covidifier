import React from "react";
type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <div className='w-full   py-4 '>
        <p
          className={`poof flex justify-center   font-bold text-white `}
        >
          <span
            style={{ textShadow: "0 0 10px #FFFFFF" }}
            className=' text-[60px]   px-8 '
          >
            {" "}
            Covidifier
          </span>
        </p>
      </div>
    </>
  );
};

export default Banner;
