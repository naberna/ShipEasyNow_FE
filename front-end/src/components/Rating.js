import React from 'react';
import { BsStarFill, BsStarHalf, BsStar} from "react-icons/bs";

export default function Rating(props) {
  const { rating, numReviews, caption } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? <BsStarFill/>
              : rating >= 0.5
              ? <BsStarHalf/>
              : <BsStar/>
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? <BsStarFill/>
              : rating >= 1.5
              ? <BsStarHalf/>
              : <BsStar/>
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? <BsStarFill/>
              : rating >= 2.5
              ? <BsStarHalf/>
              : <BsStar/>
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? <BsStarFill/>
              : rating >= 3.5
              ? <BsStarHalf/>
              : <BsStar/>
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? <BsStarFill/>
              : rating >= 4.5
              ? <BsStarHalf/>
              : <BsStar/>
          }
        ></i>
      </span>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span>{numReviews + ' reviews'}</span>
      )}
    </div>
  );
}