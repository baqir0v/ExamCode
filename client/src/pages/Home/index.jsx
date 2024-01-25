import React from "react";
import "./index.scss";
import Navbar from "../../layout/Navbar";
import Header from "../../components/Header";
import Products from "../../components/Products";
import Categories from "../../components/ShopCategories";
import ForMen from "../../components/ForMen";
import { Helmet } from "react-helmet-async";
import Footer from "../../layout/Footer";
import Searched from "../../components/Searched";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <Header />
      <Categories />
      <ForMen />
      <Products />
      <Searched/>
      <Footer/>
    </div>
  );
};

export default Home;
