import React from "react";

type Props = {
  description: string;
};

const Description = ({ description }: Props) => {
  return (
    <div
    //   style={{ textShadow: "0 0 10px #FFFFFF" }}
      className='move-up text-white bg-white bg-opacity-40 px-5 rounded-2xl w-[500px] h-96 mt-16 hover:shadow-white hover:shadow-lg '
    >
      <h1
        style={{ textShadow: "0 0 20px #FFFFFF" }}
        className='  text-[25px] font-bold text-center '
      >
        How it works
      </h1>
      <p className="mt-8">
        We use a machine learning model to predict the probability of a person
        having COVID-19 based on their symptoms.
        <br/><br/> The model is trained on a
        dataset of 5644 patients with COVID-19 and 14000 patients without
        COVID-19. The model is trained on 21 symptoms. 
      </p>
    </div>
  );
};

export default Description;
