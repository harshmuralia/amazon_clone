import ProductListApp from "./components/template/productList/ProductListApp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CheckoutApp from "./views/user/CheckoutApp";

import AllProducts from "./views/user/AllProducts";

import ErrorPageApp from "./views/user/ErrorPageApp";

import AccountApp from "./views/user/AccountApp";

import LoginApp from "./views/user/LoginApp";

import OrderApp from "./views/user/OrderApp";

import Home from "./views/user/Home";


import Seller_login from "./views/seller/Seller_login_page";



function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/product/:path/:id" element={<AllProducts />}></Route>
                    <Route path="/today-deals" element={<ProductListApp />}></Route>
                    <Route path="/checkout" element={<CheckoutApp />}></Route>
                    <Route path="/account" element={<AccountApp />}></Route>

                    <Route path='/seller_login' element={<Seller_login/>} />
                    <Route path="/orders" element={<OrderApp />}></Route>
                    <Route path="/login" element={<LoginApp />}></Route>
                    
                    <Route path="/Seller_login" element={<Seller_login />}></Route>

                    <Route path="*" element={<ErrorPageApp />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;