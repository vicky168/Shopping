import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

     useEffect(()    =>    {
    // Fetch details of a specific product
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id],);
     console.log(product);
    if (!product) {
           return <div>Loading...</div>; // Handle product not found or still loading
 }
  return (
      <div className='text-center border text-dark' style={{width:'700px',height:'500px',margin:'auto',backgroundColor:'lightgrey',paddingTop:'100px'}}>
      <h2>Product Details</h2> 
      <img src={product.image} alt=""  className='prodimg2' style={{width:'200px', height:'200px',float:'left'}}/>
      <h5 className='pt-3 text-success id2'>Product ID: {product.id}</h5>
      <p className='pt-3 title2'>Product Title: {product.title}</p>
      <p className='pt-3 price2'>Price: ${product.price}</p>
      <p className='pt-3 description2'>Description: {product.description}</p>
      {/* Display other product details here */}
    </div>
  );
}

export default ProductDetails;
