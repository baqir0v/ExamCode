import React from 'react'
import "./index.scss"

const Header = () => {
    return (
        <header id='header'>
            <div className="headerbox">
                <div className="headerleft">
                    <img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
                </div>
                <div className="headerright">
                    <h2>Flat 75%Off</h2>
                    <h1>IT’S HAPPENING
                        THIS SEASON!</h1>
                    <button>PURCHASE NOW</button>
                </div>
            </div>
        </header>
    )
}

export default Header