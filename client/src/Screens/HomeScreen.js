import React,{useState,useEffect} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {useDispatch, useSelector} from "react-redux"
import ProductList from '../Components/ProductList'
import { fetchProductsAction } from '../Actions/productActions'
import Loader from '../Components/Loader'
import Message from "../Components/Message"

import axios from "axios"
const HomeScreen = () => {
  const dispatch = useDispatch()
  const { loading, products, error } = useSelector(state => state.fetchProducts)
  // console.log("error",error)
  
  useEffect(() => {
    dispatch(fetchProductsAction())
  },[dispatch])
  return (
    <>
      <h2>Latest Products</h2>
      {
        loading ? <Loader /> : error ?<Message text={error } variant="danger" /> : (
           <Row>
              {products?.map(product => {
                  return (
                      <Col sm={12} md={6} lg={4} xl={3}  key={product._id}>
                      <ProductList product={product}/>
                      </Col>
                  )
              })}
          </Row>
        )
      }
         
    </>
  )
}

export default HomeScreen
