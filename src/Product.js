
import React from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const product = location.state;

  // Check if product exists before rendering
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-center border text-white bg-dark' style={{width:'700px',height:'500px',margin:'auto',backgroundColor:'lightgrey'}}>
      <img src={product.image} alt=""  className='prodimg2' style={{width:'200px', height:'200px'}}/>
      <h5 className='pt-3 text-success id2'>Product ID: {product.id}</h5>
      <p className='pt-3 title2'>Product Title: {product.title}</p>
      <p className='pt-3 price2'>Price: ${product.price}</p>
      <p className='pt-3 description2'>Description: {product.description}</p>
      {/* Display other product details here */}
    </div>
  );
}

export default Product;


