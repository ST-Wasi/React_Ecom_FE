import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <React.Fragment>
      <h1>This is called The about page</h1>
      <Link to="/">Home</Link>
    </React.Fragment>
  )
}

export default About
