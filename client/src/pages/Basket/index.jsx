import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basketContext'
import Navbar from '../../layout/Navbar'
import { Helmet } from 'react-helmet-async'

const Basket = () => {
    const { basket, decreaseCount, deleteBasket, increaseCount } = useContext(BasketContext)
    const subtotal = basket.reduce((acc,item)=>acc + item.price * item.count,0)

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navbar />
            <p>
                Subtotal:{subtotal}
            </p>
            {basket && basket.map((item) => {
                const total = item.price * item.count
                return (
                    <ul key={item._id}>
                        <li><img src={item.image} alt="" /></li>
                        <li>{item.title}</li>
                        <li>{item.price}</li>
                        <li>{item.count}</li>
                        <li><button onClick={() => increaseCount(item)}>+</button></li>
                        <li><button onClick={() => decreaseCount(item)}>+</button></li>
                        <li><button onClick={() => deleteBasket(item)}>Delete</button></li>
                        <li>Total:{total}</li>
                    </ul>
                )
            })}
           
        </div>
    )
}

export default Basket