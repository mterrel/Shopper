import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProductList from '../Components/ProductList'
import products from '../Components/products'

const HomeScreen = () => {
  return (
    <>
          <h2>Latest Products</h2>
          <Row>
              {products?.map(product => {
                  return (
                      <Col sm={12} md={6} lg={4} xl={3}  key={product._id}>
                          <ProductList product={product }/>
                      </Col>
                  )
              })}
          </Row>
    </>
  )
}

export default HomeScreen
