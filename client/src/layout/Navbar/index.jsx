import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./index.scss"

const Navbar = () => {
  const [isnavopen, setisnavopen] = useState(false)

  const handleNav = ()=>{
    setisnavopen(!isnavopen)
  }
  return (
    <nav id='navbar'>
      <div className="navbarbox">
        <div className='navbox'>
          <div className="navleft">
            <Link to={"/"}><img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" /></Link>
          </div>
          <div className="navright">
            <ul className='navul'>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/add"}>Add</Link></li>
              <li><Link to={"/basket"}>Basket</Link></li>
              <li><Link to={"/wishlist"}>Wishlist</Link></li>
            </ul>
            <span className='navopener' onClick={handleNav}><i className="fa-solid fa-bars"></i></span>
          </div>
        </div>
        <div className={isnavopen? "sidebar" : "dnone"}>
          <ul className='navul'>
          <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/add"}>Add</Link></li>
              <li><Link to={"/basket"}>Basket</Link></li>
              <li><Link to={"/wishlist"}>Wishlist</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar