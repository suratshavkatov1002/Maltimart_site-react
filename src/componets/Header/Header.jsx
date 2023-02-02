import { NavLink, useNavigate } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import { motion } from "framer-motion"
import './Header.css'

import React, { useEffect, useRef } from 'react'
import logo from '../../assets/images/eco-logo.png'
import User_icm from '../../assets/images/user-icon.png'
import {useSelector} from  "react-redux"

const nav_link = [
    {
        path: 'home',
        display: 'Home'
    },

    {
        path: 'shop',
        display: 'Shop'
    },

    {
        path: 'cart',
        display: 'Cart'
    }
]

export default function Header() {

    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const navigate = useNavigate()

    const totalQuantity = useSelector((state)=> state.cart.totalQuantity)

    const sitckHeaderrRef = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }


    useEffect(() => {
        sitckHeaderrRef()
        return () => window.removeEventListener('scroll', sitckHeaderrRef)
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')


    const navigateToCart = () => {
        navigate('/cart')
    }

    return (
        <header ref={headerRef} className='header'>
            <Container>
                <Row>
                    <div className="naw__wrapper">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div>
                                <h1>Multimart</h1>

                            </div>
                        </div>

                        <div className="navigation" ref={menuRef} onClick={menuToggle}>
                            <ul className='menu'>
                                {
                                    nav_link.map((item, index) => (
                                        <li className='navigation__item' key={index}>
                                            <NavLink
                                                className={(navClass) => navClass.isActive ? "nav__active" : ""}
                                                to={item.path}
                                            >
                                                {item.display}
                                            </NavLink>
                                        </li>

                                    ))
                                }
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className='fav_icon'>
                                <i className="ri-heart-line"></i>
                                <span className='badge'>1</span>
                            </span>

                            <span onClick={navigateToCart} className='cart_icon'>
                                <i className="ri-shopping-bag-line"></i>
                                <span className='badge'>{totalQuantity}</span>
                            </span>

                            <span>
                                <motion.img whileTap={{ scale: 1.2 }} src={User_icm} alt="user_img" />
                            </span>

                            <div className="mobil__menu">
                                <span onClick={menuToggle}>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>


                    </div>
                </Row>
            </Container>
        </header>
    )
}