import React from 'react';
import { Link } from 'react-router-dom';
import './product-card.css'

const ProductCard = (props: any) => {
  let data = props.data
  const handleChange = props.handleChange
  const availability = data.available.toString()
  return (
    <div className="page-container product-card">
      <Link to="/">&larr; Back to Home</Link>
      <h1 className="page-title">{data.name}</h1>
      <div className="card full-width">
        <div className="image-container">
          <img src={data.imageUrl} alt={data.name} />
        </div>
        <div className="container">
          <p>{data.category}</p>
          <p>{data.description}</p>
          <fieldset>
            <legend>Availability & Price</legend>
            <div className="item">
              <label>Available</label>
              <select
                name="available"
                value={availability}
                onChange={(e: any) => handleChange(data.itemId, e.target.name, e.target.value )}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className="item">
              <label>Price</label>
              <input
                name="price"
                value={data.price}
                onChange={(e: any) => handleChange(data.itemId, e.target.name, e.target.value )}
              />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
