import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { BasketContext } from '../../Context/basketContext'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../Context/wishlistContext'

const Products = () => {
  const [data, setData] = useState([])
  const { addToBasket } = useContext(BasketContext)
  const { addToWishlist } = useContext(WishlistContext)


  const fetchData = async () => {
    const resp = await fetch("http://localhost:5500/api/products")
    const jsonData = await resp.json()
    setData(jsonData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section id='products'>
      <div className="productstop">
        <h1>New realeased Products for Women</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className="productsbottom">
        {data && data.map((item) => (
          <ul key={item._id}>
            <li className='cardimg'>
              <img src={item.image} alt="" />
              <div className="productdetails">
                <div className='icon' onClick={()=>addToWishlist(item)}><i className="fa-solid fa-heart"></i></div>
                <div className='icon' onClick={() => addToBasket(item)}><i className="fa-solid fa-cart-shopping"></i></div>
                <div className='icon'><Link to={`/detail/${item._id}`}><i className="fa-solid fa-eye"></i></Link></div>
              </div>
            </li>
            <li><h5>{item.title}</h5></li>
            <li><h3>{item.price}</h3></li>
          </ul>
        ))}
      </div>
    </section>
  )
}

export default Products