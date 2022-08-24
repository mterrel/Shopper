import React,{useEffect} from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import products from "../Components/products"
import { useParams, Link } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'
import Rating from '../Components/Rating'
import { fetchSIngleProductAction } from '../Actions/productActions'
import Loader from "../Components/Loader"
import Message from "../Components/Message"


const ProductScreen = () => {
    const dispatch = useDispatch()
    const { Product,loading,error } = useSelector(state => state.fetchSingleProduct)
    console.log("product", Product)
    const { id } = useParams()
    
    useEffect(() => {
        dispatch(fetchSIngleProductAction(id))
    },[])
   
  return (
      <div className='py-5'>
          {
              loading ? <Loader /> : error ? <Message text={error} variant="danger"/>:<Row>
              <Col  md={3}  >
                  <Image src={Product[0]?.image} alt={Product[0]?.image} fluid/>
                  
              </Col>
              <Col>
                  <ListGroup variant="flush">
                      <ListGroupItem>
                          <h3>{ Product[0]?.name}</h3>
                      </ListGroupItem>
                      <ListGroupItem>
                          <Rating value={ Product[0]?.rating} text={`${Product[0]?.numReviews} reviews`} />
                      </ListGroupItem>
                      <ListGroupItem>
                          Price : ${Product[0]?.price}
                      </ListGroupItem>
                      <ListGroupItem>
                          Description : {Product[0]?.description}
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
                                      ${Product[0]?.price}
                                  </Col>
                            </Row>
                          </ListGroupItem>
                          <ListGroupItem>
                           <Row>
                                  <Col>
                                      Status
                                  </Col>
                                  <Col>
                                      {Product[0]?.countInStock> 0? "In stock":"out of stock"}
                                  </Col>
                            </Row>
                          </ListGroupItem>
                          <ListGroupItem>
                              <Row>
                                   <Button className="btn-block" type="button" disabled={Product[0]?.countInStock === 0}>Add to cart</Button>
                             </Row>
                          </ListGroupItem>
                      </ListGroup>
                  </Card>
              </Col>
          </Row>
          }
          
          <Link to="/" className="btn my-3">Go back</Link>
    </div>
  )
}

export default ProductScreen
