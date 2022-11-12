import React from 'react'
import Rate from 'react-rating-stars-component'
import Price from 'react-price';

function ProductDetails({product}) {
  return (
    <div className='product-details-modal'>
        <div className='details-img-wrapper'>
            <img className='details-img mx-5' src={product.image} alt={product.title} />
        </div>
        <div className='details-body'>
            <div className='details-rate-wrapper mx-3 d-flex align-items-center'>
                <div className='details-rate'>
                    <Rate value={product?.rating?.rate} size={30} edit={false} />
                </div>
                <div className='mx-2 pt-1'>|</div>
                <div className='details-review-count pt-2 text-secondary'>{product?.rating?.count}</div>
            </div>
            <div className='details-price text-success mx-3 fs-3 fw-bold'><Price cost={product.price} currency={'$'} /></div>
            <div className='details-desc mx-3'>{product.description}</div>
        </div>
    </div>
  )
}

export default  ProductDetails;