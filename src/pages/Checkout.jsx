import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helment from '../componets/Helmet/Helmet'
import CommoSection  from '../componets/UI/CommonSection'
import '../styles/Checkout.css'
import { useSelector } from 'react-redux'

export default function Checkout() {

    const totalQty = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    console.log(totalAmount);

    return(
        <Helment title = 'checkout'>
            <CommoSection  title = 'checkout' />

            <section>
                <Container>
                    <Row>
                        <Col lg ='8' >
                            <h6 className='mb-4 fw-bold' >Billing Information</h6>

                            <Form className='billing__form'>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Enter your name' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter your email' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="number" placeholder='Phone Number' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Street adress' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='City' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Postall code' />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Country' />
                                </FormGroup>
                            </Form>
                        </Col>

                        <Col lg ='4' >
                            <div className="checkout__cart">
                                <h6>Total Qty: <span>{totalQty} items</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6><span>Shipping: <br />Free Shipping</span><span>$0</span></h6>
                                <h6>Free Shipping</h6>
                                <h4>Total Cost: <span>${totalAmount}</span></h4>
                                <button className="buy__btn auth__btn w-100">Place and order</button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </Helment>
    )
}   