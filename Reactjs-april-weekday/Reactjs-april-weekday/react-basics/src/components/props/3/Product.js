import React from 'react';
import './product.css';

const Product = ({title,price,image} ) => {
    
  return (
   <>
    <div className='col-sm-3 m-2 p-2'>
    <div className="card">
  <img src={image} className="card-img-top img-set" alt="product"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"><span className='fw-bold'>Price:</span>{price}</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>

    </div>
   </>
  )
}

export default Product