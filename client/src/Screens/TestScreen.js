import React,{useState,useEffect} from 'react'
import axios from "axios"

const TestScreen = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/product")
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>
      <h3>Hi</h3>
    </div>
  )
}

export default TestScreen
