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
    const Product = products.find(p => +p._id === +id)
    
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
                      <ListGroupItem>
                          Price : ${Product.price}
                      </ListGroupItem>
                      <ListGroupItem>
                          Description : {Product.description}
                      </ListGroupItem>
                  </ListGroup>
              </Col>
              <Col md={3}>
                  <Card>
                      <ListGroup>
                          <ListGroupItem>
                           <Row>
                                  <Col>
                                      Price
                                  </Col>
                                  <Col>
                                      ${Product.price}
                                  </Col>
                            </Row>
                          </ListGroupItem>
                          <ListGroupItem>
                           <Row>
                                  <Col>
                                      Status
                                  </Col>
                                  <Col>
                                      {Product.countInStock> 0? "In stock":"out of stock"}
                                  </Col>
                            </Row>
                          </ListGroupItem>
                          <ListGroupItem>
                              <Row>
                                   <Button className="btn-block" type="button" disabled={Product.countInStock === 0}>Add to cart</Button>
                             </Row>
                          </ListGroupItem>
                      </ListGroup>
                  </Card>
              </Col>
          </Row>
          <Link to="/" className="btn my-3">Go back</Link>
    </div>
  )
}

export default ProductScreen
