import React from "react";

type Props = {
    header:string;
 topDescription: string;
    bottomDescription: string; 
};

const Description = ({ header, topDescription,bottomDescription }: Props) => {
  return (
    <div
    //   style={{ textShadow: "0 0 10px #FFFFFF" }}
      className='move-up text-white bg-white bg-opacity-40 px-5 rounded-2xl w-[500px] h-96 mt-16 hover:shadow-white hover:shadow-lg '
    >
      <h1
        style={{ textShadow: "0 0 20px #FFFFFF" }}
        className='  text-[25px] font-bold text-center '
      >
        {header}
      </h1>
      <p className="mt-8">
        {topDescription}
        <br/><br/> {bottomDescription}
      </p>
    </div>
  );
};

export default Description;
