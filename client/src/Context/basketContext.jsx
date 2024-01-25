import React, { createContext, useEffect, useState } from 'react'
export const BasketContext = createContext()

const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])

    const addToBasket = (product) => {
        const findBasket = basket.find(x => x._id === product._id)

        if (!findBasket) {
            setBasket([...basket, { ...product, count: 1 }])
        } else {
            findBasket.count++
            setBasket([...basket])
        }
    }

    const increaseCount = (product) => {
        const findBasket = basket.find(x => x._id === product._id)
        findBasket.count++
        setBasket([...basket])
    }
    const decreaseCount = (product) => {
        const findBasket = basket.find(x => x._id === product._id)
        findBasket.count--
        if (findBasket.count === 0) {
            setBasket(basket.filter(x => x._id !== product._id))
        } else {
            setBasket([...basket])
        }
    }
    const deleteBasket = (product) => {
        setBasket(basket.filter(x => x._id !== product._id))
    }

    useEffect(() => {
      localStorage.setItem("basket",JSON.stringify(basket))
    }, [basket])
    
    const data = {basket,addToBasket,decreaseCount,deleteBasket,increaseCount}
    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider