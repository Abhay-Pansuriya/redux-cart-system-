import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from '../UI/Pages/Home/Home';
import Product from '../UI/Pages/Product/Product';
import Cart from '../UI/Pages/Cart/Cart';
import MainPage from '../UI/Pages/Admin/MainPage';
import ProductDesc from '../UI/Pages/Product/ProductDesc';
const RouterComp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/products" exact element={<Product />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/admin" exact element={<MainPage />} />
                <Route path="/products/:id" exact element={<ProductDesc />} />
            </Routes>
        </Router>
    )
}

export default RouterComp