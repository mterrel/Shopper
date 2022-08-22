import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import products from "../Components/products"
import { useParams, Link } from "react-router-dom"
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import Rating from '../Components/Rating'


const ProductScreen = () => {
    const { id } = useParams()
    const Product = products.find(p => p._id = id)
    if(Product){console.log(Product)}
  return (
      <div>
          {/* <h3>{Product.name}</h3> */}
          <Row>
              <Col  md={3}  >
                  <Image src={Product.image} alt={Product.image} fluid/>
                  
              </Col>
              <Col>
                  <ListGroup variant="flush">
                      <ListGroupItem>
                          <h3>{ Product.name}</h3>
                      </ListGroupItem>
                      <ListGroupItem>
                          <Rating value={ Product.rating} text={`${Product.numReviews} reviews`} />
                      </ListGroupItem>
                  </ListGroup>
              </Col>
          </Row>
          <Link to="/" className="btn my-3">Go back</Link>
    </div>
  )
}

export default ProductScreen
