import React from 'react'
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom";
import Rating from './Rating';


const ProductList = ({product}) => {
  return (
    <Card className="mb-3 product_list">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={ product.image} variant="top"/>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="text-decoration-none">
          <Card.Title as="div" className="text-center ">
            <strong>{product.name }</strong>
          </Card.Title>
          
          <Card.Title as="div" className="text-center ">
            <Rating value={product.rating } text={`${product.numReviews} reviews`}  />
          </Card.Title>
          <Card.Title as="h3" className="text-center ">
            ${product.price}
          </Card.Title>
        </Link>
      </Card.Body>
   </Card>
  )
}

export default ProductList
