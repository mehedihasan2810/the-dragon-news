import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div>
        <h2>Our terms and conditons</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ullam exercitationem reiciendis veniam! Accusamus qui, minus quae illo laudantium consequuntur!</p>
        <p>Go back to <Link to='/register'>Register</Link></p>
    </div>
  )
}

export default Terms