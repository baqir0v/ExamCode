import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../layout/Navbar'
import { WishlistContext } from '../../Context/wishlistContext'
import "./index.scss"

const Wishlist = () => {
    const { wishlist, addToWishlist } = useContext(WishlistContext)

    return (
        <div>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <Navbar />
            <div className='wishlist'>
                {wishlist && wishlist.map((item) => (
                    <ul key={item._id}>
                        <li><img src={item.image} alt="" /></li>
                        <li>{item.title}</li>
                        <li>Price:{item.price}</li>
                        <li><i style={{ cursor: "pointer" }} onClick={() => addToWishlist(item)} className="fa-solid fa-heart"></i></li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Wishlist