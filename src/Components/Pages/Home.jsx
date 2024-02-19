import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../Hero'

function Home() {
  console.log(window.location.pathname)
  return (
    <React.Fragment>
      <Hero />
    </React.Fragment>
  )
}

export default Home
