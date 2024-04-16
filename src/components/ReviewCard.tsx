import React from "react";

import Image from "next/image";
import Star from "../assets/star.svg";
import  {Reviews}  from "../constants/ReviewCons";


const ReviewCard = () => {
 
 

  return (
    <div className="m-6 ">
        {Reviews.map((review) => (
          <>
            <div className="flex justify-center items-center">
              <Image  src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
            </div>
            <p className="mt-6 text-center text-2xl font-normal">{review.feedback}</p>
            <h3 className="mt-6 text-center text-lg font-normal">{review.customerName}</h3>
          </>
        ))}
    
    </div>
  );
};

export default ReviewCard;


