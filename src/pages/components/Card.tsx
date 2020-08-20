import React from 'react';
import { Link } from 'react-router-dom';

import CardDetails from './CardDetails'
import './card.css'

const Card = (props: any) => {
  let data = props.data
  return (
    <div className="card">
      <div className="image-container">
        <img src={data.imageUrl} alt={data.name} />
      </div>
      <div className="container">
        <Link to={`/product/${data.itemId}`}>{data.name}</Link>
        <CardDetails data={data} />
      </div>
    </div>
  );
};

export default Card;
