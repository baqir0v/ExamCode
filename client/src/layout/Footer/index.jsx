import React from 'react'
import "./index.scss"

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footerbox">
                <div className="footertop">
                    <div className="footerone">
                        <h6>About Us</h6>
                        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit, <br /> sed do eiusmod tempor <br />incididunt ut labore dolore <br /> magna aliqua.</p>
                    </div>
                    <div className="footerone">
                        <h6>Newsletter</h6>
                        <p>Stay update with our latest</p>
                        <div className="input">
                            <input type="text" /><i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="footerone">
                        <h6>Instragram Feed</h6>
                        <div className="imgs">
                            <div className="top">
                                <img src="https://preview.colorlib.com/theme/shop/img/i1.jpg" alt="" />
                                <img src="https://preview.colorlib.com/theme/shop/img/i2.jpg" alt="" />
                                <img src="https://preview.colorlib.com/theme/shop/img/i3.jpg" alt="" />
                                <img src="https://preview.colorlib.com/theme/shop/img/i4.jpg" alt="" />
                            </div>
                            <div className="bottom">
                                <img src="https://preview.colorlib.com/theme/shop/img/i5.jpg" alt="" />
                                <img src="https://preview.colorlib.com/theme/shop/img/i6.jpg" alt="" />
                                <img src="https://preview.colorlib.com/theme/shop/img/i7.jpg" alt="" />
                                <img src="https://preview.colorlib.com/theme/shop/img/i8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="footerone">
                        <h6>Follow Us</h6>
                        <p>Let us be social</p>
                        <div className="icons">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-dribbble"></i>
                            <i className="fa-brands fa-behance"></i>
                        </div>
                    </div>
                </div>
                <div className="footerbottom">
                    <p>Copyright ©2024 All rights reserved | This template is made with <i className="fa-solid fa-heart"></i> by Colorlib</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer