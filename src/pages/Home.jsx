import Helmet from "../componets/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import '../styles/Home.css'
import Services from "../services/Services";
import ProductList from "../componets/UI/ProductsList";
import products from '../assets/data/products'
import { useEffect, useState } from "react";
import timerImg from '../assets/images/counter-timer-img.png'
import Clock from "../componets/UI/Clock";



export default function Home() {

    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSalesProducts, setBestsalesProducts] = useState([])
    const [mobileProducts, setMobileProducts] = useState([])
    const [watchProducts, setwatchProducts] = useState([])
    const [ProductProducts, setProductProducts] = useState([])

    const year = new Date().getFullYear()


    useEffect(() => {
        const trendingProductsFiltered = products.filter(
            (item) => item.category === 'chair'
        );

        const bestSalesProductsFiltered = products.filter(
            (item) => item.category === 'sofa'
        );

        const mobilProductsFiltered = products.filter(
            (item) => item.category === 'mobile'
        );

        const watchProductsFiltered = products.filter(
            (item) => item.category === 'wireless'
        );

        const PopularProductsFiltered = products.filter(
            (item) => item.category === 'watch'
        );

        setwatchProducts(watchProductsFiltered)
        setMobileProducts(mobilProductsFiltered)
        setTrendingProducts(trendingProductsFiltered)
        setBestsalesProducts(bestSalesProductsFiltered)
        setProductProducts(PopularProductsFiltered)
    }, [])



    return (
        <Helmet title={'Home'}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                                <p className="hero__subtitle">Trending  product in {year}</p>

                                <h2>Make Your InterIor More Minimalistic  Modern</h2>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse minus consectetur veniam magnam nobis quidem obcaecati ratione nostrum dolores nulla id beatae repellat voluptas, voluptatibus porro quae fuga rerum.</p>

                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Services />

            <section className="trending__products">
                <Container>
                    <Row>
                        <Col className="text-center" lg='12'>
                            <h2 className="section__title"> Trending Products</h2>
                        </Col>

                        <ProductList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col className="text-center" lg='12'>
                            <h2 className="section__title"> Best Sales</h2>
                        </Col>
                        <ProductList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="clock__top-content">
                                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                                <h3 className="text-white fs-5 mb-3">Quality Armachair</h3>
                            </div>

                            <Clock />

                            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn  store__btn">
                                <Link to='/shop' >Visit Store</Link>
                            </motion.button>
                        </Col>

                        <Col lg='6' md='6' className="text-end">
                            <img src={timerImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="wirales">
                <Container>
                    <Row>
                        <Col className="text-center" lg='12'>
                            <h2 className="section__title"> New Arrivals </h2>
                        </Col>
                        <ProductList data={mobileProducts} />
                        <ProductList data={watchProducts} />
                    </Row>
                </Container>
            </section>

            <section className="popular__category">
                <Container>
                    <Row>
                        <Col className="text-center" lg='12'>
                            <h2 className="section__title"> Popular in Categry </h2>
                        </Col>
                        <ProductList data={ProductProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}


