import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display:'flex',flexDirection:"column",color:"black"}}>
        <Link to='/state'>UseState</Link>
        <Link to='/effect'>usereffects</Link>
    </div>
  )
}

export default Hooks