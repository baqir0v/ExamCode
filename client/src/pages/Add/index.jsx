import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../layout/Navbar'
import "./index.scss"
import axios from "axios"
import { Helmet } from 'react-helmet-async';

const AddPage = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState(null)

    const fetchData = async () => {
        const resp = await fetch("http://localhost:5500/api/products")
        const jsonData = await resp.json()
        setData(jsonData)
    }

    const handleDelete = async (_id) => {
        const res = await axios.delete(`http://localhost:5500/api/products/${_id}`)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div id='addpage'>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <Navbar />
            <Formik
                initialValues={{ title: '', image: '', price: '' }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Required'),
                    image: Yup.string()
                        .required('Required'),
                    price: Yup.string().required('Required'),
                })}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    const handleAdd = async () => {
                        const res = await axios.post("http://localhost:5500/api/products", values)
                        fetchData()
                    }
                    handleAdd()
                    resetForm()
                }}
            >
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="text" placeholder="Title" />
                    <ErrorMessage name="title" />

                    <label htmlFor="image">Image</label>
                    <Field name="image" type="text" placeholder="Image" />
                    <ErrorMessage name="image" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="number" min="0" placeholder="Price" />
                    <ErrorMessage name="price" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <div className="searchsort">
                <input type="text" onChange={(e)=>setSearch(e.target.value)} />
                <button onClick={()=>setSort({property:"title",asc:true})}>1-9</button>
                <button onClick={()=>setSort({property:"title",asc:false})}>9-1</button>
                <button onClick={()=>setSort(null)}>Default</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data
                    .filter(x=>x.title.toLowerCase().trim().includes(search.toLowerCase()))
                    .sort((a,b)=>{
                        if (sort && sort.asc === true) {
                            return a[sort.property] > b[sort.property] ? 1 : b[sort.property] > a[sort.property] ?-1 : 0
                        } else if(sort && sort.asc === false) {
                            return a[sort.property] < b[sort.property] ? 1 : b[sort.property] < a[sort.property] ?-1 : 0
                        }
                        else{
                            return 0 
                        }
                    })
                    .map((item) => (
                        <tr key={item._id}>
                            <td><img src={item.image} alt="" /></td>
                            <td>{item.title}</td>
                            <td>{item.title}</td>
                            <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AddPage