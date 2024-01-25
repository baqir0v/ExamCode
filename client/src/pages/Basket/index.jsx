import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basketContext'
import Navbar from '../../layout/Navbar'
import { Helmet } from 'react-helmet-async'
import "./index.scss"

const Basket = () => {
    const { basket, decreaseCount, deleteBasket, increaseCount } = useContext(BasketContext)
    const subtotal = basket.reduce((acc, item) => acc + item.price * item.count, 0)

    return (
        <div id='basket'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navbar />
            <h1>
                Subtotal:{subtotal}
            </h1>
            <div className='basket'>
                {basket && basket.map((item) => {
                    const total = item.price * item.count
                    return (
                        <ul key={item._id}>
                            <li><img src={item.image} alt="" /></li>
                            <li>{item.title}</li>
                            <li>Price:{item.price}</li>
                            <li>Count:{item.count}</li>
                            <li className='btns'>
                                <button onClick={() => increaseCount(item)}>+</button>
                                <button onClick={() => decreaseCount(item)}>-</button>
                            </li>
                            <li><button className='deletebutton' onClick={() => deleteBasket(item)}>Delete</button></li>
                            <li>Total:{total}</li>
                        </ul>
                    )
                })}
            </div>

        </div>
    )
}

export default Basket