import React from 'react'
import "./index.scss"

const Categories = () => {
    return (
        <section id='categories'>
            <div className="cattextx">
                <h1>Shop for Different Categories
                </h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="categoriesbox">
                <div className="catleft">
                    <div className="top">
                        <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" />
                        <img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" />
                    </div>
                    <div className="bottom">
                        <img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />
                    </div>
                </div>
                <div className="catright">
                    <img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Categories