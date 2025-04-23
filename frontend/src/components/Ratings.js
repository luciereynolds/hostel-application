import React from "react";
import Stars from "./stars";

const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0; 
  }

  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
};

const HostelRatings = ({ item,index }) => {
  const averageRating = calculateAverageRating(item.ratings);
  return (
    <>
          <h6>Average Rating:</h6>
          <p>{averageRating.toFixed(1)}/5</p>
        <p>Your Rating:</p>
        <Stars position={index} />

    </>
  );
};

export default HostelRatings;