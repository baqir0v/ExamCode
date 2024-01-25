import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../layout/Navbar'
import { WishlistContext } from '../../Context/wishlistContext'

const Wishlist = () => {
    const {wishlist, addToWishlist } = useContext(WishlistContext)

  return (
    <div>
        <Helmet>
            <title>Wishlist</title>
        </Helmet>
        <Navbar/>
        {wishlist && wishlist.map((item)=>(
            <ul key={item._id}>
                <li><img src={item.image} alt="" /></li>
                <li>{item.title}</li>
                <li>{item.price}</li>
                <li><i style={{cursor:"pointer"}}  onClick={()=>addToWishlist(item)} className="fa-solid fa-heart"></i></li>
            </ul>
        ))}
    </div>
  )
}

export default Wishlist