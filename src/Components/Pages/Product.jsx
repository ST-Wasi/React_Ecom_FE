import React,{useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'




function Product() {
 const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log(token)
    if(token){
      axios.get(`${import.meta.env.VITE_API_URL}/products`,{
        headers:{
        Authorization: `${token}`
        }
      })
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
    }else{
      toast.error('Login Required')
      navigate('/login')
    }
    
  },[])

  return (
    <>
      <h1>This is The Product Page</h1>
    </>
  )
}

export default Product
