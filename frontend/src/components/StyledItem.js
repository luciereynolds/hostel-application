import React from "react";
import Accordion from "react-bootstrap/Accordion";

// calculates the average rating from backend instead of just displaying array
const calculateAverageRating = (ratings) => {
  if (ratings.length === 0) {
    return 0; 
  }
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
};

const Item = ({ item }) => {
  const averageRating = calculateAverageRating(item.ratings);
  return (
    <>
     <Accordion.Header> {item.name}</Accordion.Header>
     <Accordion.Body>
        <p>{item.address}</p>
        <p>{item.postcode}</p>
        {/* Displays the calculated average rating to 1 decimal place*/}
        <div>
          <h6>Average Rating:</h6>
          <p>{averageRating.toFixed(1)}/5</p>
        </div>
      </Accordion.Body>

    </>
  );
};

export default Item;