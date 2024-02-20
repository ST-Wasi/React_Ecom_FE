import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios'

function Signup() {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: ""
  })

  const handleChange = (e)=>{
    const { name, value, type, checked } = e.target;
  const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevValue)=>{
      return({
        ...prevValue,
        [name]: newValue
      })
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/signup`,formData).then((res)=>{
      toast.success("Account Created. Please Login Now")
      navigate('/login')
    })
    .catch((err)=>{
      toast.error('Unexpected Error Occured. Try After Somoetime')
    })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      toast.success("Already LoggedIn")
      navigate('/products')
    }
  }, [])
  


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Wasi"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register With Us
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method='post' action='' onSubmit={handleSubmit}>
            <div>
            <div className="flex items-center justify-between">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <div className="flex items-center justify-between">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="btn-group">
                Want To Register As ? : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" className="btn-check" name="role" id="buyer" value="buyer" autoComplete="off" checked={formData.role === 'buyer'}
  onChange={handleChange} />
                <label className="btn btn-secondary" htmlFor="buyer" data-mdb-ripple-init>Buyer</label>
              
                <input type="radio" className="btn-check" name="role" id="seller" value="seller" autoComplete="off" 
                checked={formData.role === 'seller'}
                onChange={handleChange}/>
                <label className="btn btn-secondary" htmlFor="seller" data-mdb-ripple-init>Seller</label>

              </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Have an Account?{' '}
            <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
  )
}

export default Signup
