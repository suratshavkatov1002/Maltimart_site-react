import { Link } from "react-router-dom";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import logo from '../../assets/images/eco-logo.png'
import './Footer.css'


export default function Footer() {

    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4'>
                        <div className="logo">
                            <img src={logo} alt="" />

                            <div>
                                <h1 className="text-white">Multimart</h1>
                            </div>
                        </div>


                        <p className="footer__text mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatibus asperiores.loremwac esahcv,
                            wabclawbc 
                            wkbcwk
                        </p>
                    </Col>

                    <Col lg='3'>
                        <div className="footer__quik-links">
                            <h4 className="quick__links-title">Top Categories</h4>

                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0  border-0">
                                    <Link to='#' >Moile Phones</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0  border-0">
                                    <Link to='#' >Modern Sofa</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0  border-0">
                                    <Link to='#' >Arm Chair</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0  border-0">
                                    <Link to='#' >Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="footer__quik-links">
                            <h4 className="quick__links-title">Useful Links</h4>

                            <ListGroup className="mb-3">
                                <ListGroupItem className="ps-0  border-0">
                                    <Link to='/shop' >Shop</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0  border-0">
                                    <Link to='/cart' >Cart</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0  border-0">
                                    <Link to='/login' >Login</Link>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0  border-0">
                                    <Link to='#' >Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <div className="footer__quik-links">
                            <h4 className="quick__links-title">Contact</h4>

                            <ListGroup className="mb-3  footer-contact">
                                <ListGroupItem className="ps-0  border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-map-pin-line"></i>
                                    </span>

                                    <p>
                                        123 Zindabazar, Sylhet, Bangladesh
                                    </p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0  border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-phone-line"></i>
                                    </span>

                                    <p>
                                        +256555450205225
                                    </p>
                                </ListGroupItem>

                                <ListGroupItem className="ps-0  border-0 d-flex align-items-center gap-2">
                                    <span>
                                        <i className="ri-mail-line"></i>
                                    </span>

                                    <p>
                                        example123@gmail.com
                                    </p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg='12'>
                        <p className="footer__copyright">
                            Copyright {year} devloped by Shavkatov Sur'at. All rights reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}