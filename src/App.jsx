import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup';
import Layout from './Layout';
import './App.css'
import Product from './Components/Pages/Product';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/products' element={<Product />}>
            <Route index element={<About />} ></Route>
            <Route path=':id' element={<h1>specific product</h1>}></Route>
          </Route>
        </Routes>
        <ToastContainer />
    </>
  )
}

export default App
