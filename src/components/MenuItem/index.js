import React from "react";
const MenuItem = ({itemPrice, itemName, itemDescription }) => {
  return (
    <div>
      <span>${itemPrice}</span>
      <h2>{itemName}</h2>
      <p>{itemDescription}</p>
      <button>Add to Cart</button>
    </div>);};
export default MenuItem;
