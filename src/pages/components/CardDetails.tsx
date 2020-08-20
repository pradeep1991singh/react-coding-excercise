import React from 'react';
import './card.css'

const CardDetails = (props: any) => {
  let data = props.data
  return (
    <div className="card-details">
      <p className="category">Category: <em>{data.category}</em></p>
      <p className="description">Description: <em>{data.description}</em></p>
      <p className="available">Available: <em>{data.available.toString()}</em></p>
      <p className="price">Price: <em>{data.price}</em></p>
    </div>
  );
};

export default CardDetails;
