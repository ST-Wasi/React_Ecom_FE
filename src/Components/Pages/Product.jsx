import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'




function Product() {
  const [products, setProducts] = useState(null)
  const navigate = useNavigate()

  const prdcts = [
    {
      name: "Iphone",
      price: 30000,
      author: "Wasiuddin"
    },
    {
      name: "Laptop",
      price: 45000,
      author: "Wasiuddin"
    },
    {
      name: "Bat",
      price: 1200,
      author: "Wasiuddin"
    },
    {
      name: "Lego Kit",
      price: 2500,
      author: "Wasiuddin"
    },
  ]

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.get(`${import.meta.env.VITE_API_URL}/products`, {
        headers: {
          Authorization: `${token}`
        }
      })
        .then((res) => {
          if (res.data.length > 0) {
            setProducts(res.data)
            console.log(res.data);
          } else{
            setProducts(prdcts)
          }
        })
        .catch((err) => {
          console.log(err);
        })
    } else {
      toast.error('Login Required')
      navigate('/login')
    }

  }, [])

  return (
    <div>
      <h1>This is The Product Page</h1>
      <div className='flex gap-[10px] justify-center items-center w-full flex-wrap'>
      {products && products.map((item,index)=>  (<div key={index} className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.author}</p>
          <div className="card-actions">
            <button className="btn btn-primary">{item.price}{" "}Buy Now</button>
          </div>
        </div>
      </div>))}
      </div>
    </div>
  )
}

export default Product
