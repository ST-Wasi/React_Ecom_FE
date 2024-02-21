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
      author: "Wasiuddin",
      description: "lorem ipsum dolor sit amit dev"
    },
    {
      name: "Laptop",
      price: 45000,
      author: "Wasiuddin",
      description: "lorem ipsum dolor sit amit dev"
    },
    {
      name: "Bat",
      price: 1200,
      author: "Wasiuddin",
      description: "lorem ipsum dolor sit amit dev"
    },
    {
      name: "Lego Kit",
      price: 2500,
      author: "Wasiuddin",
      description: "lorem ipsum dolor sit amit dev"
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
          } else {
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
    const handleContextmenu = e => {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
    }

  }, [])

  return (
    <div>
      <div className='flex gap-[10px] justify-center items-center w-full flex-wrap'>
        {products && products.map((item, index) => (<div key={index} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="card-image" class="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {item.name}
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ${item.price}
              </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              {item.description}
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button">
              Add to Cart
            </button>
          </div>
        </div>))}
        // we are implem 6:17 --- 17:22
      </div>
    </div>
  )
}

export default Product
