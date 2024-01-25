import React, { useEffect, useState } from 'react'
import "./index.scss"
import { useParams } from 'react-router-dom'
import Navbar from '../../layout/Navbar'
import { Helmet } from 'react-helmet-async'

const Detail = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

    const fetchData = async () => {
        const resp = await fetch(`http://localhost:5500/api/products/${id}`)
        const jsonData = await resp.json()
        setDetail(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <Navbar />
            <div className='details'>
                {detail ?
                    <>
                        <ul>
                            <li><img src={detail.image} alt="" /></li>
                            <li>{detail.title}</li>
                            <li>{detail.price}</li>
                        </ul>
                    </>
                    : ""
                }
            </div>
        </>
    )
}

export default Detail