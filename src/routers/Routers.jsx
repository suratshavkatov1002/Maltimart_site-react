
import { Route, Routes, Navigate } from "react-router-dom"
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetals from '../pages/ProductDetals'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import SignAp from '../pages/SignAp'


export default function Routers() {
    return(
        <Routes>
            <Route path = '/' element = { <Navigate to = '/home '/>}/>
            <Route path="home"  element = {<Home/>} />
            <Route path="shop"  element = {<Shop/>} />
            <Route path="shop/:id"  element = {<ProductDetals/>} />
            <Route path="cart"  element = {<Cart/>} />
            <Route path="checkout"  element = {<Checkout/>} />
            <Route path="login"  element = {<Login/>} />
            <Route path="signu"  element = {<SignAp/>} />
        </Routes>
    )
}