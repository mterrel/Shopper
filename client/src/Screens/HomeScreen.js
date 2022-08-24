import React,{useState,useEffect} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProductList from '../Components/ProductList'
// import products from '../Components/products'
import axios from "axios"
const HomeScreen = () => {
  const [products,setProducts] = useState([])
   const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/products")
      setProducts(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  },[])
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
